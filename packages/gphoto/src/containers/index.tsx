import React, { useCallback, useEffect, useRef, useState } from "react";
import { Camera } from "web-gphoto2";

export const MQTT_URL = (({ hostname, protocol }) =>
  `${protocol}//${hostname}:9001`)(
  new URL(
    `${process.env.MQTT_URL || window.location.href}`.replace(
      /^mqtt:\/\//,
      "ws://",
    ),
  ),
);

// import { CaptureButton } from './capture-button.js';
// import { Preview } from './preview.js';
// import { Widget } from './widget.js';

// class App extends Component {
//   setValue = async (name, value) => this.camera?.setConfigValue(name, value);

//   render(/** @type {App['props']} */ props, /** @type {App['state']} */ state) {
//     switch (state.type) {
//       case 'Config':
//         return h(
//           'div',
//           { class: 'pure-g' },
//           h(
//             'div',
//             { class: 'pure-u-2-3' },
//             h(Preview, {
//               getPreview: state.capturePreview
//             })
//           ),
//           h(
//             'div',
//             { id: 'config', class: 'pure-u-1-3' },
//             h(
//               'form',
//               { class: 'pure-form pure-form-aligned' },
//               h(
//                 'fieldset',
//                 null,
//                 state.triggerCapture
//                   ? h(CaptureButton, { getFile: state.triggerCapture })
//                   : undefined,
//                 ' ',
//                 h(
//                   'a',
//                   {
//                     class: 'pure-button',
//                     href: 'https://github.com/GoogleChromeLabs/web-gphoto2',
//                     target: '_blank'
//                   },
//                   '⭐ Star on Github'
//                 )
//               ),
//               h(Widget, { config: state.config, setValue: this.setValue })
//             )
//           )
//         );
//     }
//   }
// }

enum StateType {
  CameraPicker = "CameraPicker",
  Config = "Config",
  Status = "Status",
}

interface State {
  type: StateType;
  message?: string;
}

export default function Section() {
  const [state, setState] = useState<State>(() => ({
    // type: StateType.Status, message: '⌛ Loading...'
    type: StateType.CameraPicker,
  }));

  const cameraRef = useRef<Camera>(null);

  const selectDevice = useCallback(async () => {
    try {
      await Camera.showPicker();
      this.setState({ type: StateType.Status, message: "⌛ Connecting..." });
      await this.tryToConnectToCamera();
    } catch (e) {
      console.info(e);
    }
  }, []);

  const tryToConnectToCamera = useCallback(async () => {
    try {
      cameraRef.current = new Camera();
    } catch (e) {
      console.warn(e);
      setState({ type: StateType.CameraPicker });
      return;
    }
    const camera = cameraRef.current;
    await camera.connect();
    // let supportedOps = await camera.getSupportedOps();
    // let capturePreview;
    // if (supportedOps.capturePreview) {
    //   capturePreview = () => camera.capturePreviewAsBlob();
    // }
    // let triggerCapture;
    // if (supportedOps.captureImage) {
    //   triggerCapture = () => camera.captureImageAsFile();
    // }
    // We should reach this only once.
    // while (camera) {
    //   try {
    //     let config = await camera.getConfig();
    //     // if (!isDebug) {
    //     //   delete config.children.actions;
    //     //   delete config.children.other;
    //     // }
    //     this.setState({
    //       type: 'Config',
    //       config,
    //       capturePreview,
    //       triggerCapture
    //     });
    //   } catch (err) {
    //     rethrowIfCritical(err);
    //     console.error('Could not refresh config:', err);
    //   }
    //   while (true) {
    //     await new Promise(resolve =>
    //       requestIdleCallback(resolve, { timeout: 500 })
    //     );
    //     try {
    //       let hadEvents = await camera.consumeEvents();
    //       if (hadEvents) {
    //         break;
    //       }
    //     } catch (err) {
    //       rethrowIfCritical(err);
    //       console.error('Could not consume events:', err);
    //     }
    //   }
    // }
  }, []);

  useEffect(() => {
    addEventListener("error", ({ message }) =>
      this.setState({
        type: "Status",
        message: `⚠ ${message}`,
      }),
    );
    addEventListener(
      "beforeunload",
      () => {
        const camera = cameraRef.current;
        if (!camera) return;
        camera.disconnect();
        cameraRef.current = undefined;
      },
      { once: true },
    );
    //     // Try to connect to camera at startup.
    //     // If none is found among saved connections, it will fallback to a picker.
    tryToConnectToCamera();
  }, []);

  return (
    <section>
      <h2>Gphoto</h2>
      {
        {
          [StateType.CameraPicker]: (
            <div>
              <button onClick={selectDevice}>🔍 Select camera</button>
              <p>
                Don't know how you got here? Check out the{" "}
                <a
                  href="https://web.dev/porting-libusb-to-webusb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  web.dev/porting-libusb-to-webusb/
                </a>{" "}
                or the{" "}
                <a
                  href="https://github.com/GoogleChromeLabs/web-gphoto2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/GoogleChromeLabs/web-gphoto2
                </a>
              </p>
            </div>
          ),
          [StateType.Config]: <div>Config</div>,
          [StateType.Status]: <div>{state.message}</div>,
        }[state.type]
      }
      <div></div>
    </section>
  );
}
