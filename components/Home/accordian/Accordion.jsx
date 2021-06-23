import React from "react";
import styles from "./accordion.module.css";
function Accordion({ ar, selectedText, selectRole }) {
  return (
    <div className="inner">
      {ar.innerArr.map((iArray, i) => (
        <span
          id="span"
          key={i}
          onClick={() => selectRole(i, iArray)}
          className={selectedText === iArray.desc ? styles.selected : ""}
        >
          {iArray.desc}
        </span>
      ))}
    </div>
  );
}

export default Accordion;
