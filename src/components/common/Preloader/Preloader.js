import React from "react";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = () => {
  return (
    <div>
      <img src={preloader} style={{ width: "50px", height: "50px" }} />
    </div>
  );
};
export default Preloader;
