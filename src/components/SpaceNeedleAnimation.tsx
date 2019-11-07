import React from 'react';
import SVG from "react-inlinesvg";
import SpaceNeedle from "./space-needle.svg";

const SpaceNeedleAnimation: React.FC = () => {
  return(
    <div className={'space-needle-animation'}>
      <SVG src={SpaceNeedle}/>
    </div>
  );
};
export {SpaceNeedleAnimation}