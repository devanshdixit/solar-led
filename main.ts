basic.forever(function () {
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(80, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.middleServo.fwdSetSpeed(90)
    } else if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.middleServo.fwdSetSpeed(50)
    } else {
        fwdMotors.middleServo.fwdSetSpeed(0)
    }
})
