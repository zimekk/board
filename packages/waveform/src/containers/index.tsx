import React, { useState } from "react";
import {
  WaveformAudioRecorder,
  type WaveformAudioRecorderType,
} from "waveform-audio-recorder";

export default function Section() {
  const [recorderState, setRecorderState] =
    useState<WaveformAudioRecorderType | null>(null);

  return (
    <section>
      <h2>Waveform</h2>
      <div>
        {recorderState?.initRecording ? (
          <button onClick={recorderState?.saveRecording}>Stop</button>
        ) : (
          <button onClick={recorderState?.startRecording}>Start</button>
        )}
        <WaveformAudioRecorder setRecorderState={setRecorderState} />
        {recorderState?.recordingDuration}
      </div>
      <a
        href="https://www.kaggle.com/datasets/aanhari/alexa-dataset"
        target="_blank"
        rel="noopener noreferrer"
      >
        alexa-dataset
      </a>
    </section>
  );
}
