# Garden watering system

## authors: 
* Embedded:   Paweł Majewski
* Backend:    Agata Krześniak 
* Frontend:   Klaudia Litwin

# Embedded Part
# Setup
## Devices:
* ESP32- Wroom x2.
* servo x1.
* LEDs x5.
* Capacitive Soil Molsture Sensor v2.0 x2.

## Environment
* Install VS CODE v1.78.0.
* Add extension "Espressif IDF v1.6.2".
* Create "sample_project".
* Add files from this repository.
* Filling in the details of the wifi network in the settings.

## Connection of modules
* Connect the peripherals as shown in the picture "electrical_diagram".
* Connect board with a USB cable to the computer.

## Build and flash
* Bulid project and flash boards.

# Project

## LEDs

* low soil hydration red diode.
* moderate soil hydration yellow diode.
* good soil hydration green diode.
* on - valve open, off - valve close.
* on - connected, off - not connected (wifi).

## Sensor

* ADC resolution setting option: 11Bit.
* ADC attenuation parameter: 11 dB (3.55 x).

* Raw data is converting into percentages.

## Servo (sprinkler imitation)

* Sets whether the valve is to be open or closed.

## WiFi

* Wifi connection supported.
* Support for HTTP: POST and GET commands.


## General description of operation

* taskSensor : reads the value from the sensor at specific intervals depending on whether watering is in progress or not.
* taskWifi : Reading data from the page.
* taskSprinklers : Servo support.(sprinkler)