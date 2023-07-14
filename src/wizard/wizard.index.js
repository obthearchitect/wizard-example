import React from "react";
import { Wizard } from "@awsui/components-react";
import { useNavigate } from "react-router-dom";
import { STEPS } from "./steps";
import { useRecoilState, useResetRecoilState } from "recoil";
import * as atoms from "../atoms";

const ServerlessWizard = () => {
  const navigate = useNavigate();

  const [activeStepIndex, setActiveStepIndex] = useRecoilState(
    atoms.activeStepIndex
  );

  const [nextStep, setNextStep] = useRecoilState(atoms.nextStep);

  const resetWizard = useResetRecoilState(atoms.activeStepIndex);
  const resetValueOne = useResetRecoilState(atoms.inputOneValue);
  const resetValueTwo = useResetRecoilState(atoms.inputTwoValue);
  const resetValueThree = useResetRecoilState(atoms.inputThreeValue);

  const handleNavigate = (href) => {
    navigate(href);
  };

  const handleWizardCancel = (event) => {
    console.log("Cancel Event", event);
    resetWizard();
    resetValueOne();
    resetValueTwo();
    resetValueThree();
  };

  const handleOnSubmit = (event) => {
    console.log("Submit Event ===", event);
    resetWizard();
    resetValueOne();
    resetValueTwo();
    resetValueThree();
  };

  const handleOnNavigate = (event) => {
    if (event.detail.reason === "previous") {
      console.log("Previous", event);
      setNextStep(0);
      setActiveStepIndex(event.detail.requestedStepIndex);
    } else if (event.detail.reason === "next") {
      console.log("Next", event, nextStep);
      setNextStep(nextStep + 1);
    } else if (event.detail.reason === "step") {
      console.log("Step", event);
      setNextStep(0);
      setActiveStepIndex(event.detail.requestedStepIndex);
    }
  };

  const i18nStrings = {
    stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
    collapsedStepsLabel: (stepNumber, stepsCount) =>
      `Step ${stepNumber} of ${stepsCount}`,
    cancelButton: "Cancel",
    previousButton: "Previous",
    nextButton: "Next",
    submitButton: "Submit",
    optional: "optional"
  };

  const wizardSteps = STEPS.map(({ title, StepContent }) => ({
    title,
    content: <StepContent />
  }));

  return (
    <Wizard
      i18nStrings={i18nStrings}
      className={"custom-wizard"}
      steps={wizardSteps}
      onCancel={(event) => {
        handleNavigate("/");
        handleWizardCancel(event);
      }}
      onSubmit={(event) => {
        handleOnSubmit(event);
        handleNavigate("/congrats");
      }}
      activeStepIndex={activeStepIndex}
      onNavigate={(event) => handleOnNavigate(event)}
    />
  );
};

export default ServerlessWizard;
