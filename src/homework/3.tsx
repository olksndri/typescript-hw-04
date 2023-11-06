import React, { useState, ChangeEvent } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <form>
      <input
        title="not empty title"
        type="text"
        value={value}
        onChange={handleChange}
      />
      ;
    </form>
  );
}
