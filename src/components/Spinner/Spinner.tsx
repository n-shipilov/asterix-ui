import React from "react";
import { cn } from "../utils/cn";
import "./Spinner.scss";

type SpinnerSize = "s" | "m";

type SpinnerView = "default" | "inverted";

type SpinnerProps = {
  size?: SpinnerSize;
  view?: SpinnerView;
};

const spinner = cn("spinner");

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { size = "m", view = "default" } = props;

  return <div className={spinner({ size, view })}></div>;
};
