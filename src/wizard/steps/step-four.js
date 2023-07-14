import { Container, Header, SpaceBetween } from "@awsui/components-react";
import { useRecoilValue } from "recoil";
import * as atoms from "../../atoms";

const StepFourPage = () => {
  const valueOne = useRecoilValue(atoms.inputOneValue);
  const valueTwo = useRecoilValue(atoms.inputTwoValue);
  const valueThree = useRecoilValue(atoms.inputThreeValue);
  const valueFour = useRecoilValue(atoms.inputFourValue);

  return (
    <Container header={<Header variant="h2">Form Container</Header>}>
      <SpaceBetween size="l">
        <ul>
          <li>This is Global State Value One: {valueOne} </li>
          <li>This is Global State Value Two: {valueTwo}</li>
          <li>This is Global State Value Three: {valueThree} </li>
          <li>This is Global State Value Four: {valueFour} </li>
        </ul>
      </SpaceBetween>
    </Container>
  );
};

export default StepFourPage;
