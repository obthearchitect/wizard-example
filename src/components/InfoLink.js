import React from "react";
import { Link } from "@awsui/components-react";

const InfoLink = ({ id, onFollow }) => {
  return (
    <Link variant="info" id={id} onFollow={onFollow}>
      Learn More
    </Link>
  );
};

export default InfoLink;
