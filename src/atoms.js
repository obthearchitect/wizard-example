import React from "react";
import { atom, selector, useResetRecoilState } from "recoil";

export const inputOneValue = atom({
  key: "input-one-value",
  default: undefined
});

export const inputTwoValue = atom({
  key: "input-two-value",
  default: undefined
});

export const inputThreeValue = atom({
  key: "input-three-value",
  default: undefined
});

export const inputFourValue = atom({
  key: "input-four-value",
  default: undefined
});

export const toolsHide = atom({
  key: "tools-hide",
  default: false
});

export const toolsContent = atom({
  key: "tools-content",
  default:
    "Place Holdercontent from Atoms. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
});

export const toolsOpen = atom({
  key: "tools-open",
  default: false
});

export const toolsContentTitle = atom({
  key: "tools-content-title",
  default: "Default Placeholder"
});

export const activeStepIndex = atom({
  key: "active-step-index",
  default: 0
});

export const navigateEvent = atom({
  key: "navigate-event",
  default: null
});

export const nextStep = atom({
  key: "next-step",
  default: 0
});
