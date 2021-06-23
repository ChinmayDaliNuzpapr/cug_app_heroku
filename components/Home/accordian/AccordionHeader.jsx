import React from "react";
import ToggleIcon from "./ToggleIcon";
import styles from "./accordion.module.css";
// import top from "../../../public/leader_board.svg";
function AccordionHeader({ ar, oIndex, index, selectedText }) {
  console.log("AR", ar);
  let array = ar.map((a) => a.desc);
  function matchIt(text) {
    return array.includes(text);
  }
  return (
    <div
      className={styles.tile}
      style={{ border: oIndex === index ? "2px solid darkcyan" : "" }}
    >
      <div className={styles.left}>
        <img src="leader_board.svg" className="h-6 w-6" alt="theme" />
        <div>
          <div>{ar.head}</div>
          <div>
            {oIndex === index
              ? selectedText !== null && matchIt(selectedText)
                ? selectedText
                : ar.ques
              : ar.ques}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <ToggleIcon state={oIndex === index ? true : false} />
      </div>
    </div>
  );
}
export default AccordionHeader;
