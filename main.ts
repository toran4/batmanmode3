let distance = 0
let orange = false
let green = false
robobit.select_model(RBModel.Mk3)
robobit.ledRainbow()
basic.pause(2000)
robobit.ledClear()
while (true) {
    distance = robobit.sonar(RBPingUnit.Centimeters)
    if (distance <= 16) {
        robobit.stop(RBStopMode.Brake)
        robobit.setLedColor(0xFF0000)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        robobit.rotatems(RBRobotDirection.Left, 60, 400)
        orange = false
        green = false
    } else if (distance <= 30) {
        if (!(orange)) {
            robobit.go(RBDirection.Forward, 20)
            robobit.setLedColor(0xFFC000)
            basic.showIcon(IconNames.Asleep)
            orange = true
            green = false
        }
    } else if (!(green)) {
        robobit.setLedColor(0x00FF00)
        basic.showIcon(IconNames.Yes)
        robobit.go(RBDirection.Forward, 60)
        orange = false
        green = true
    }
}
