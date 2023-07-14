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
import { stepTwoSchema } from "../../validation";
import * as atoms from "../../atoms";
import InfoLink from "../../components/InfoLink";
import { TOOLS_CONTENT } from "../../data";
import { stepSubmit } from "../../common";

const StepTwoPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(stepTwoSchema)
  });

  const [valueThree, setValueThree] = useRecoilState(atoms.inputThreeValue);
  const [toolsOpen, setToolsOpen] = useRecoilState(atoms.toolsOpen);
  const setToolTipContent = useSetRecoilState(atoms.toolsContent);
  const setToolTipTitle = useSetRecoilState(atoms.toolsContentTitle);

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
      buttonRef.current.click();
    }
  }, [nextStep]);

  const handleToolTipChange = (content, title) => {
    if (!toolsOpen) {
      setToolsOpen((prevSetToolsOpen) => !prevSetToolsOpen);
    }
    setToolTipContent(content);
    setToolTipTitle(title);
  };

  return (
    <Container header={<Header variant="h2">Form Container</Header>}>
      <SpaceBetween size="l">
        <FormField
          info={
            <InfoLink
              onFollow={() =>
                handleToolTipChange(
                  TOOLS_CONTENT.tooltipThree.content,
                  TOOLS_CONTENT.tooltipThree.title
                )
              }
            />
          }
          errorText={errors.InputThree?.message}
          label={"Input Three"}
          description={"Label Desciption"}
          constraintText={"Min: 1, Max: 250"}
        >
          <Controller
            name="InputThree"
            defaultValue={valueThree}
            render={({ field: { onChange } }) => (
              <Input
                id="txtNumber"
                type="number"
                placeholder={250}
                value={valueThree}
                onChange={({ detail }) => {
                  onChange(detail.value);
                  setValueThree(detail.value);
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

export default StepTwoPage;
