basic.forever(function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(80, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetBrightness(9)
    } else if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetBrightness(1)
    } else {
        fwdSensors.ledRing.fwdSetBrightness(0)
    }
})
