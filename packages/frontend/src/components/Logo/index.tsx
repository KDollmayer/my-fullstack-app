import React from "react";
import * as s from "./styles";
import logo from "./logo.png";

export default function Logo() {
  return (
    <s.ImgDiv>
      <s.Img src={logo} />
    </s.ImgDiv>
  );
}
