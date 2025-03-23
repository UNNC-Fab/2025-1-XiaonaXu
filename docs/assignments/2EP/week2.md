# week2
## introduction
This week we will cover the basic progress of embedded programming using arduino. 
### basic information
Arduino is an open-source hardware and software platform based on microcontrollers and development boards. In this section the typical type of board we'll use is the Seeed Studio XIAO ESP32C3
![Alt Text](https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png)
Seeed Studio XIAO ESP32C3 is an IoT mini development board based on the Espressif ESP32-C3 WiFi/Bluetooth dual-mode chip, featuring a 32-bit RISC-V CPU that delivers powerful computing performance with its efficient architecture. It has excellent radio frequency performance, supporting IEEE 802.11 b/g/n WiFi, and Bluetooth 5 (BLE) protocols. This board comes included with an external antenna to increase the signal strength for your wireless applications. It also has a small and exquisite form-factor combined with a single-sided surface-mountable design. It is equipped with rich interfaces and has 11 digital I/O that can be used as PWM pins and 3 analog I/O that can be used as ADC pins. It supports four serial interfaces such as UART, I2C and SPI. There is also a small reset button and a bootloader mode button on the board. XIAO ESP32C3 is fully compatible with the Grove Shield for Seeeduino XIAO and Seeeduino XIAO Expansion board except for the Seeeduino XIAO Expansion board, the SWD spring contacts on the board will not be compatible.
With regard to the features highlighted above, XIAO ESP32C3 is positioned as a high-performance, low-power, cost-effective IoT mini development board, suitable for low-power IoT applications and wireless wearable applications.

-features
This is the basic layout 
![Alt Text](https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png)
![Alt Text](https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png)
![Alt Text](https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png)
### steps
Now we're going to learn how to do embedded programming using arduino. Here are the steps:

#### Requirements
To follow this tutorial, you’ll need:
- An Arduino board (e.g., Seeed Studio XIAO ESP32C3)
- A USB cable (usually Type-A to Type-B)
- A computer with the Arduino IDE installed
- An LED and sensors, we use an EMG sensor in this example
- A breadboard and jumper wires (optional for external LED)

#### Setting Up the Arduino IDE

1. **Download the IDE**: Visit [arduino.cc](https://www.arduino.cc/en/software) and download the Arduino IDE for your operating system.
2. **Install the IDE**: Follow the installation instructions for your OS.
3. **Connect Your Arduino**: Plug your Arduino into your computer via the USB cable.
4. **Select Your Board**: Open the IDE, go to `Tools > Board`, and select your Arduino model (e.g., Seeed Studio XIAO ESP32C3).
5. **Select the Port**: Go to `Tools > Port` and choose the port your Arduino is connected
 
 basic layout:
 ![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250323094240859.png)


