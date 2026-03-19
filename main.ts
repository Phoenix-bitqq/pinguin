input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
})
