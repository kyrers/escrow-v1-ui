import {
  Button,
  Datepicker,
  FileUploader,
  TextArea,
} from "@kleros/ui-components-library";
import {
  ButtonContainer,
  mobileResponsive,
  StyledForm,
} from "../StyledForm/StyledForm";
import styled from "styled-components";

const StyledTextArea = styled(TextArea)`
  width: 500px;

  textarea {
    width: 100%;
  }

  ${mobileResponsive}
`;

const StyledFileUploader = styled(FileUploader)`
  width: 500px;

  small {
    font-size: 14px;
  }

  ${mobileResponsive}
`;

const DeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 500px;

  ${mobileResponsive}
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const StyledDatepicker = styled(Datepicker)`
  div {
    width: 500px;

    ${mobileResponsive}
  }
`;

interface Props {
  next: () => void;
  back: () => void;
}

export default function Terms({ next, back }: Props) {
  return (
    <StyledForm onSubmit={next}>
      <StyledTextArea
        label="Description"
        placeholder="Specify the agreement"
        isRequired
        resizeY
      />

      <DeadlineContainer>
        <StyledLabel htmlFor="deadline">Deadline</StyledLabel>
        <StyledDatepicker time isRequired name="deadline" />
      </DeadlineContainer>

      <StyledFileUploader
        callback={() => {}}
        msg="Upload an agreement PDF (optional)"
        acceptedFileTypes={["application/pdf"]}
      />

      <ButtonContainer>
        <Button small text="Back" onPress={back} />
        <Button small text="Next" type="submit" />
      </ButtonContainer>
    </StyledForm>
  );
}
