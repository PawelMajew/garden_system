// Zdefiniowanie metod do wysylania zadan HTTP
export class BaseService {
  private basePath: string;

  constructor(base: string) {
    this.basePath = base;
  }

  protected sendRequest(url: string, httpMethod: string) {
    const headers = this.GetHeaders();
    return fetch(`${this.basePath}${url}`, {
      headers,
      method: httpMethod,
      cache: "no-store",
    });
  }

  protected sendRequestBody(url: string, httpMethod: string, body: any) {
    const headers = this.GetHeaders();
    return fetch(`${this.basePath}${url}`, {
      headers,
      method: httpMethod,
      cache: "no-store",
      body: JSON.stringify(body),
    });
  }

  protected GetHeaders() {
    const headers = new Headers();
    headers.append("pragma", "no-cache");
    headers.append("cache-control", "no-cache");
    headers.append("Content-Type", "application/json");
    headers.append(
      "access-control-allow-methods",
      "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    return headers;
  }

  protected isJsonResponse(headers: Headers) {
    const contentTypeHeader = headers.get("Content-Type");
    if (!contentTypeHeader) return false;

    return contentTypeHeader.includes("application/json");
  }
}
