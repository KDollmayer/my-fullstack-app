import React from "react";
import * as s from "./styles";
import profile from "./profile.png";

export default function Image() {
  return (
    <s.ImgDiv>
      <s.Img src={profile} />
    </s.ImgDiv>
  );
}
