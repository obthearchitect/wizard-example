import React, { useEffect, useRef } from "react";
import {
  Container,
  Header,
  SpaceBetween,
  FormField,
  Input
} from "@awsui/components-react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepOneSchema } from "../../validation";
import * as atoms from "../../atoms";
import InfoLink from "../../components/InfoLink";
import { TOOLS_CONTENT } from "../../data";
import { stepSubmit } from "../../common";

const FirstComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(stepOneSchema)
  });

  const [valueOne, setValueOne] = useRecoilState(atoms.inputOneValue);
  const [valueTwo, setValueTwo] = useRecoilState(atoms.inputTwoValue);
  const [toolsOpen, setToolsOpen] = useRecoilState(atoms.toolsOpen);
  const setToolTipContent = useSetRecoilState(atoms.toolsContent);
  const setToolTipTtile = useSetRecoilState(atoms.toolsContentTitle);

  const [nextStep, setNextStep] = useRecoilState(atoms.nextStep);
  const [activeStepIndex, setActiveStepIndex] = useRecoilState(
    atoms.activeStepIndex
  );

  const buttonRef = useRef();

  const stepHandler = (data) => {
    stepSubmit(setNextStep, activeStepIndex, setActiveStepIndex);
  };

  useEffect(() => {
    if (nextStep > 0 && buttonRef) {
      console.log("useEffect");
      buttonRef.current.click();
    }
  }, [nextStep]);

  const handleToolTipChange = (content, title) => {
    if (!toolsOpen) {
      setToolsOpen((prevSetToolsOpen) => !prevSetToolsOpen);
    }
    setToolTipContent(content);
    setToolTipTtile(title);
  };

  return (
    <Container header={<Header variant="h2">Form Container</Header>}>
      <SpaceBetween size="l">
        <FormField
          info={
            <InfoLink
              onFollow={() =>
                handleToolTipChange(
                  TOOLS_CONTENT.tooltipOne.content,
                  TOOLS_CONTENT.tooltipOne.title
                )
              }
            />
          }
          errorText={errors.InputOne?.message}
          label={"Input One"}
          description={"Label Desciption"}
          constraintText={"Min: 1, Max: 250"}
        >
          <Controller
            name="InputOne"
            defaultValue={valueOne}
            render={({ field: { onChange } }) => (
              <Input
                type="number"
                placeholder={250}
                value={valueOne}
                onChange={({ detail }) => {
                  onChange(detail.value);
                  setValueOne(detail.value);
                }}
              />
            )}
            control={control}
          />
        </FormField>
        <FormField
          info={
            <InfoLink
              onFollow={(event) =>
                handleToolTipChange(
                  TOOLS_CONTENT.tooltipTwo.content,
                  TOOLS_CONTENT.tooltipTwo.title
                )
              }
            />
          }
          errorText={errors.InputTwo?.message}
          label={"Input Two"}
          description={"Label Desciption"}
          constraintText={"Min: 1, Max: 10"}
        >
          <Controller
            name="InputTwo"
            defaultValue={valueTwo}
            render={({ field: { onChange } }) => (
              <Input
                type="number"
                placeholder={250}
                value={valueTwo}
                onChange={({ detail }) => {
                  onChange(detail.value);
                  setValueTwo(detail.value);
                }}
              />
            )}
            control={control}
          />
        </FormField>
      </SpaceBetween>
      <button
        onClick={handleSubmit(stepHandler)}
        className="hide-button"
        ref={buttonRef}
      />
    </Container>
  );
};

const StepOnePage = () => {
  return <FirstComponent />;
};

export default StepOnePage;
