import React, { useEffect, useRef } from "react";
import styles from "../styles/loading.module.css";

const Spin = () => {
  let speed = 0;
  const spin = useRef(null);
  const draw = () => {
    var ctx = spin.current.getContext("2d");

    speed += 0.08;

    ctx.translate(50, 50);
    ctx.rotate(0.04);
    ctx.translate(-50, -50);
    ctx.clearRect(0, 0, 100, 100);

    ctx.beginPath();
    ctx.arc(
      50,
      50,
      30,
      speed - Math.cos(speed + 90),
      speed + Math.sin(speed + 180) + 2.3
    );
    ctx.lineWidth = 10;
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";
    ctx.stroke();
    window.requestAnimationFrame(draw);
  };
  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={spin} width={100} height={100} />;
};

export default function Loading() {
  return (
    // <div
    //   styles={{
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   {/* <Spin /> */}
    //   {/* <img src="./" /> */}
    //   <div
    //     styles={{ position: "absolute", left: "50%", top: "50%", zIndex: "1" }}
    //   >
    //     <p>LOADING+++++++</p>
    //   </div>
    // </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      {/* <p>LOADING</p> */}
      <img src="Halfcircle.gif" alt="theme" />
    </div>
  );
}
