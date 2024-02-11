// import mqtt from "mqtt";
import React, {
  type MouseEventHandler,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";

declare global {
  interface Window {
    castReceiverManager: any;
    messageBus: any;
  }
}

// declare module cast {
//   export class receiver {}
// }

declare module cast.receiver {
  export class CastReceiverManager {
    static getInstance(): CastReceiverManager;
  }
}

var applicationID = "5CB45E5A",
  namespace = "urn:x-cast:com.url.cast";
// , receiverDead = false
// , session = null;

const injectScript = (src: string, type = "text/javascript") => {
  const script = Object.assign(document.createElement("script"), {
    type,
    src,
  });
  document.head.appendChild(script);
};

export function Receiver() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Update the iframe src
  // warning: watch out for X-Frame-Options -> DENY
  function updateFrame(url) {
    window.castReceiverManager.setApplicationState("Now Playing: " + url);
    // document.getElementById('iframe').src = url;
    iframeRef.current.src = url;
  }

  // Set the window location to the URL
  // warning: this reciever dies essentially, because you navigated away
  function updateLocation(url) {
    window.castReceiverManager.setApplicationState("Now Playing: " + url);
    window.location.href = url;
  }

  useEffect(() => {
    injectScript(
      `//www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js`,
    );

    window.castReceiverManager =
      cast.receiver.CastReceiverManager.getInstance();

    window.castReceiverManager.onReady = function (event) {
      window.castReceiverManager.setApplicationState("URL Cast ready...");
    };

    // messages on a custom namespace
    var ns = "urn:x-cast:com.url.cast";
    window.messageBus = window.castReceiverManager.getCastMessageBus(ns);

    window.messageBus.onMessage = function (e) {
      var msg = JSON.parse(e.data);

      window.messageBus.send(e.senderId, "ok");

      if (msg.type === "iframe") updateFrame(msg.url);
      if (msg.type === "loc") updateLocation(msg.url);
    };

    // initialize CastReceiverManager
    window.castReceiverManager.start({ statusText: "URL Cast starting..." });
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src=""
      frameBorder="0"
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      seamless
      id="iframe"
    ></iframe>
  );
}

function Sender() {
  const [enabled, setEnabled] = useState(false);
  const receiverDeadRef = useRef(false);
  const sessionRef = useRef(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  function sessionUpdateListener(isAlive) {
    if (!isAlive) {
      // session = null;
      sessionRef.current = null;
      // disableInputs();
      setEnabled(false);
    }
    console.log("Session is alive?: ", isAlive);
  }

  function receiveMessage(namespace, msg) {
    // namespace = 'urn:x-cast:com.url.cast'
    // it only ever says 'ok' - just confirming when a url has been received
    console.log("Receiver said: " + msg);
  }

  function sessionListener(newSession) {
    console.log("New session ID:" + newSession.sessionId);
    // session = newSession;
    sessionRef.current = newSession;
    sessionRef.current.addUpdateListener(sessionUpdateListener);
    sessionRef.current.addMessageListener(namespace, receiveMessage);

    // enableInputs();
    setEnabled(true);
  }

  function onErr(err) {
    console.log("Err: " + JSON.stringify(err));
    // showError(err);
  }

  const handleRequestSession = useCallback<
    MouseEventHandler<HTMLButtonElement>
  >(() => {
    chrome.cast.requestSession(sessionListener, console.info);
  }, []);

  function sendMessage(msg) {
    if (receiverDeadRef.current || !sessionRef.current) return;

    // send msg
    sessionRef.current.sendMessage(
      namespace,
      msg,
      function () {
        console.log("Message sent: ", msg);
        // notify('Message sent: ' + JSON.stringify(msg));
      },
      onErr,
    );

    if (msg.type === "loc") {
      receiverDeadRef.current = true;
      // disableInputs();
      setEnabled(false);
      // notify('Receiver will now be unresponsive');
    }
  }

  const handleSend = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
    // var url = document.getElementById('url').value
    //   , type = document.getElementById('type').value;
    var url = urlRef.current.value,
      type = typeRef.current.value;

    if (!url || !type) return;

    sendMessage({ type: type, url: url });
  }, []);

  useEffect(() => {
    injectScript(`https://www.gstatic.com/cv/js/sender/v1/cast_sender.js`);

    function receiverListener(e) {
      e === "available"
        ? console.log("receiver found")
        : console.log("no receivers found");
    }

    function initializeCastApi() {
      var sessionRequest = new chrome.cast.SessionRequest(applicationID);

      var apiConfig = new chrome.cast.ApiConfig(
        sessionRequest,
        sessionListener,
        receiverListener,
      );

      function onSuccess(msg) {
        console.log("Sucess: " + msg);
      }

      chrome.cast.initialize(
        apiConfig,
        onSuccess.bind(this, "initialized ok"),
        onErr,
      );
    }

    // initialize
    window.__onGCastApiAvailable = function (loaded) {
      console.log(["__onGCastApiAvailable"], { loaded });
      if (loaded) initializeCastApi();
    };
  }, []);

  return (
    <div>
      <button onClick={handleRequestSession}>Start cast session</button>

      <p id="step2" className="notready">
        Step 2: Send url
      </p>

      <input
        ref={urlRef}
        id="url"
        className="border"
        type="text"
        placeholder="e.g. http://example.com"
        size={30}
        defaultValue="https://www.windytv.com/"
        disabled={!enabled}
      />
      <select ref={typeRef} id="type" defaultValue="loc" disabled={!enabled}>
        <option value="iframe">iframe</option>
        <option value="loc">location</option>
      </select>
      <button id="send" disabled={!enabled} onClick={handleSend}>
        send
      </button>

      <h3>Details</h3>
      <p>There are two methods for casting, with pros and cons:</p>
      <ol>
        <li>
          Load an iframe (You will have trouble loading a url with
          x-frame-options: same origin.)
        </li>
        <li>
          Change the window location (You will lose control when you load the
          url over the receiver.)
        </li>
      </ol>
      <p>
        Also, notice the chromecast viewport is 1280x720 and the default
        background is black before the receiver loads.
      </p>
      <p>
        <a
          href="https://github.com/DeMille/url-cast-receiver"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/DeMille/url-cast-receiver
        </a>
      </p>
    </div>
  );
}

export default function Section() {
  return (
    <section>
      <h2>Cast Receiver</h2>
      <Sender />
    </section>
  );
}
