import React from "react";

export default function RemoteNameControl({
  onChangeName,
  onConfirmName,
  name,
  disabled,
}) {
  return (
    <form
      className="form-set-name"
      action="."
      onSubmit={(e) => {
        e.preventDefault();
        onConfirmName((e.target as any).name.value);
      }}
    >
      <label>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => onChangeName(e.target.value)}
          value={name}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled}>
          OK
        </button>
      </label>
    </form>
  );
}
