import { ReactNode } from "react";
import "./Button.css";

// Nasluchiwanie przycisku na klikniecie
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { onClick, children } = props;
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
