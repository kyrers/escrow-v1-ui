import styled from "styled-components";
import { Box, Button, Card } from "@kleros/ui-components-library";
import EscrowTypeImage from "assets/escrow-type.png";
import type { EscrowTemplate } from "model/EscrowTemplate";
import { useState } from "react";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 8px;
  width: fit-content;
  max-width: 50%;
  min-width: 500px;
  height: auto;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 80%;
    min-width: unset;
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const StyledCard = styled(Card)<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 150px;
  gap: 4px;
  padding: 4px;
  justify-content: space-around;
  align-items: center;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.tint : "transparent"};
`;

const StyledDescription = styled.p`
  text-align: center;
  white-space: pre-wrap;
`;

const StyledCourt = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
`;

const StyledA = styled.a`
  text-decoration: underline;
`;

interface Props {
  templates: EscrowTemplate[];
  next: () => void;
}

export default function EscrowType({ templates, next }: Props) {
  const [selectedTemplate, setSelectedTemplate] = useState<EscrowTemplate>(
    templates[0]
  );

  return (
    <StyledBox>
      <img src={EscrowTypeImage} alt="Escrow type" />

      <CardContainer>
        {templates.map((template) => (
          <StyledCard
            key={template.title}
            active={selectedTemplate.id === template.id}
            onClick={() => setSelectedTemplate(template)}
            round
            hover
          >
            <img src={template.image} alt={template.title} width="60%" />
            <h2>{template.title}</h2>
          </StyledCard>
        ))}
      </CardContainer>

      <StyledDescription>{selectedTemplate.description}</StyledDescription>

      <StyledCourt>
        Any disputes that may arise will be resolved in the{" "}
        <StyledA
          href={`https://court.kleros.io/courts`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kleros {selectedTemplate.court}.
        </StyledA>
      </StyledCourt>

      <Button text="Next" small onPress={next} />
    </StyledBox>
  );
}
