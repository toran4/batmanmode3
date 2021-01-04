distance = 0
orange = False
green = False
robobit.select_model(RBModel.MK3)
robobit.led_rainbow()
basic.pause(2000)
robobit.led_clear()
while True:
    distance = robobit.sonar(RBPingUnit.CENTIMETERS)
    if distance <= 25:
        robobit.stop(RBStopMode.BRAKE)
        robobit.set_led_color(0xFF0000)
        basic.show_icon(IconNames.NO)
        basic.pause(500)
        robobit.rotatems(RBRobotDirection.LEFT, 60, 400)
        orange = False
        green = False
    elif distance <= 40:
        if not (orange):
            robobit.go(RBDirection.FORWARD, 20)
            robobit.set_led_color(0xFFC000)
            basic.show_icon(IconNames.ASLEEP)
            orange = True
            green = False
    elif not (green):
        robobit.set_led_color(0x00FF00)
        basic.show_icon(IconNames.YES)
        robobit.go(RBDirection.FORWARD, 48)
        orange = False
        green = True