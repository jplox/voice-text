import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import Animation from "./Animation";
import CommandList from "./CommandsList";

function VoiceCheck() {
  const commands = [
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    {
      command: "open *",
      callback: (website) => {
        window.open("http://" + website.split(" ").join("") + ".com");
      },
    },
    {
      command: "change background to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "change text to *",
      callback: (text) => {
        document.body.style.color = text;
      },
    },
    {
      command: "reset background",
      callback: () => {
        document.body.style.background = `rgb(255,255,255)`; //white
      },
    },
    {
      command: "reset text",
      callback: () => {
        document.body.style.color = `rgb(0,0,0)`; //black
      },
    },
    {
      command: "turn off mic",
      callback: () => {
        SpeechRecognition.stopListening();
        setListening(false);
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [listening, setListening] = useState(false);

  const handleStart = () => {
    setListening(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const handleStop = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    handleStop();
    resetTranscript();
  };
  return (
    <>
      <div className="micbutton d-flex justify-content-center my-5">
        <div className="onmiccontainer">
          <button className="btn btnback  mx-5" onClick={handleStart}>
            <img
              className="voice"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
              title="Search by Voice"
              alt="micicon"
            />
          </button>
          <p className="resetpara">On Mic</p>
        </div>
        <div className="ResetDiv">
          <button className="btn  btnback mx-5" onClick={handleReset}>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/monochromatic-surface-icon-library/reset-25.png"
              alt="reseticon"
              className="voice"
            />
          </button>
          <p className="resetpara">Reset</p>
        </div>
        <div className="animationdiv">
          {listening && (
            <>
              <button className="btn btnback mx-5" onClick={handleStop}>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/mobile-apps-settings-ii-flat/2048/466_-_Power_button-512.png"
                  alt="powericon"
                  className="powericon"
                />
              </button>
              <p className="micoff">Off Mic</p>
            </>
          )}
        </div>
      </div>
      <div className="transcriptdiv">
        <p id="message" className="text-center">
          {transcript}
          {transcript === "show command" ? <CommandList></CommandList> : ""}
        </p>
      </div>

      <div >{listening ? <Animation></Animation> : " "}</div>

    </>
  );
}

export default VoiceCheck;
