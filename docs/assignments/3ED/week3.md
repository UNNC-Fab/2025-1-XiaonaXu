# week3
## introduction
This week we will cover the basics of electronics design. We'll start from drawing a circuit board using software and manufacture them for later experiments.
## What is Electronics Design?

Electronics design is the process of creating circuits to perform specific functions, such as powering devices, processing signals, or controlling systems. It involves selecting components, calculating values, and arranging them to work together efficiently and safely.

---

## Tools and Materials

To get started, you’ll need:
- **Breadboard**: For prototyping without soldering.
- **Multimeter**: To measure voltage, current, and resistance.
- **Components**: Resistors, LEDs, capacitors, transistors, etc.
- **Power Supply**: A battery (e.g., 9V) or a bench power supply.
- **Wires**: Jumper wires or solid-core wire for connections.
- **Design Software**: Optional tools like KiCad, Eagle, or Fritzing for schematics.
- **Soldering Kit**: For permanent circuits (optional).

---

## Basic Concepts

Before designing, understand these key ideas:
- **Voltage (V)**: The electrical potential difference, measured in volts.
- **Current (I)**: The flow of electrons, measured in amperes (amps).
- **Resistance (R)**: Opposition to current flow, measured in ohms (Ω).
- **Ohm’s Law**: `V = I × R` – relates voltage, current, and resistance.
- **Series vs. Parallel**: Components can be connected end-to-end (series) or side-by-side (parallel), affecting total resistance and current flow.

In this practice we'll use LCEDA as an example to demonstrate the basic concepts of software aided electronics design, and use a circuit that controls two LED lights as an example.
This is is a basic layout
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153204143.png)

First, add the boards:
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153346002.png)
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153234233.png)
make sure to mark out the specific labels to note where these pins would be connected to the components.

Next, add the components:
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153326223.png)
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153454737.png)
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153414597.png)
and connect the LEDS and resistors
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153440937.png)

Connect all components, it should look like this:
![ALt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153545818.png)
 
 Now start viewing it in the PCB mode of the software:
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153758012.png)
connect them according to the sketch, leave the ground pins
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153707014.png)
now connect the ground pins, it should be completed automatically
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/20250320153617545.png)

This software also allows you to send this PCB file to it's servers and they'll process and manufacture it for you. Now we can use it for further experiments
![Alt Text](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/xxn/IMG_5871.JPG)
