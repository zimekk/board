import React from "react";

export default function RemoteCountControl({
  onIncrement,
  onDecrement,
  disabled,
}) {
  return (
    <div className="counter-control">
      <button
        type="button"
        className="counter-control-add"
        onClick={() => onIncrement()}
        style={{ marginRight: "2px" }}
        disabled={disabled}
      >
        +
      </button>
      <button
        type="button"
        className="counter-control-sub"
        onClick={() => onDecrement()}
        style={{ marginLeft: "2px" }}
        disabled={disabled}
      >
        -
      </button>
    </div>
  );
}
