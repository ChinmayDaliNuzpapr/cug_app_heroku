import React from "react";
import styles from "./accordion.module.css";
import { array } from "./data";
import Accordion from "./Accordion";
import AccordionHeader from "./AccordionHeader";
export default class Index extends React.Component {
  state = {
    arr: array,
    oIndex: null,
    iIndex: null,
    selectedText: null,
  };
  handleTile = (index) => {
    this.setState({ oIndex: index });
  };
  selectRole = (i, iArray) => {
    this.setState({
      iIndex: i,
      selectedText: iArray.desc,
    });
  };
  render() {
    const { selectedText, oIndex } = this.state;
    return (
      <>
        {this.state.arr.map((ar, index) => (
          <div
            className={styles.heading}
            key={index}
            onClick={() => this.handleTile(index)}
          >
            <AccordionHeader
              ar={ar.innerArr}
              oIndex={oIndex}
              index={index}
              selectedText={selectedText}
            />

            {oIndex === index ? (
              <React.Fragment>
                <Accordion
                  ar={ar}
                  selectedText={selectedText}
                  selectRole={this.selectRole}
                />
              </React.Fragment>
            ) : null}
          </div>
        ))}
      </>
    );
  }
}
