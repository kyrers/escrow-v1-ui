import { Steps } from "@kleros/ui-components-library";
import { useState } from "react";
import styled from "styled-components";
import EscrowType from "./EscrowType/EscrowType";
import CryptoTransactionImage from "assets/crypto-transaction.png";
import GeneralServiceImage from "assets/general-service.png";
import Details from "./Details/Details";
import Terms from "./Terms/Terms";

const STEPS = [
  { title: "Escrow type" },
  { title: "Details" },
  { title: "Terms" },
  { title: "Preview" },
];

const ESCROW_TEMPLATES = [
  {
    id: 0,
    title: "Cryptocurrency Transaction",
    description:
      "Escrow funds to facilitate a crypto transaction.\n" +
      "This is a good option for a safe cross chain swap or OTC trades.",
    court: "Blockchain Non Technical Court",
    image: CryptoTransactionImage,
  },
  {
    id: 1,
    title: "General Service",
    description:
      "Hiring an outside contractor? Use the general escrow to safeguard these transactions.\n" +
      "Use this option to define your own terms for any agreement, from freelancing to P2P commerce.",
    court: "General Court",
    image: GeneralServiceImage,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const StyledSteps = styled(Steps)`
  width: 80%;
`;

export default function CreateTransactionWizard() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Container>
      <StyledSteps items={STEPS} currentItemIndex={currentStep} horizontal />

      {currentStep === 0 && (
        <EscrowType templates={ESCROW_TEMPLATES} next={next} />
      )}
      {currentStep === 1 && <Details next={next} back={back} />}
      {currentStep === 2 && <Terms next={next} back={back} />}
    </Container>
  );
}
