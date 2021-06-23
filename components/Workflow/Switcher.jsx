import React from "react";

const Switcher = () => {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <label id="toggleSwitch">
        <input type="checkbox" id="togBtn" />
        <div class="slider round">
          <span class="on">company</span>
          <span class="off">global</span>
        </div>
      </label>
    </div>
  );
};

export default Switcher;
