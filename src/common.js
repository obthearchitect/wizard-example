import React from "react";

export const stepSubmit = (
  setNextStep,
  activeStepIndex,
  setActiveStepIndex
) => {
  setNextStep(0);
  setActiveStepIndex(activeStepIndex + 1);
};
