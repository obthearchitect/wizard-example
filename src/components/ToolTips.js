import React from "react";
import { HelpPanel } from "@awsui/components-react";

const ToolTipFormatter = ({ title, content }) => {
  return <HelpPanel header={<h2>{title}</h2>}>{content}</HelpPanel>;
};

export default ToolTipFormatter;
