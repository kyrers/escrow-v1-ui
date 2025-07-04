import {
  Button,
  Datepicker,
  FileUploader,
  TextArea,
} from "@kleros/ui-components-library";
import { useNewTransactionContext } from "context/newTransaction/useNewTransactionContext";
import {
  ButtonContainer,
  mobileResponsive,
  StyledForm,
} from "../StyledForm/StyledForm";
import styled from "styled-components";
import {
  getLocalTimeZone,
  now,
  parseZonedDateTime,
} from "@internationalized/date";
import { formatFileName } from "utils/common";

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

const CustomFormElementContainer = styled.div`
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
    overflow: hidden;
    width: 500px;

    ${mobileResponsive}
  }
`;

interface Props {
  next: () => void;
  back: () => void;
}

export default function Terms({ next, back }: Props) {
  const {
    agreementFile,
    description,
    setDescription,
    deadline,
    setDeadline,
    setAgreementFile,
  } = useNewTransactionContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    next();
  };

  const handleFileUpload = (file: File) => {
    if (file.type !== "application/pdf") {
      return;
    }

    setAgreementFile(file);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextArea
        value={description}
        onChange={(value) => setDescription(value)}
        label="Description"
        placeholder="Specify the agreement"
        isRequired
        resizeY
        validate={(value) =>
          value.length > 0 ? true : "Description is required"
        }
        showFieldError
      />

      <CustomFormElementContainer>
        <StyledLabel htmlFor="deadline">Deadline (Local time)</StyledLabel>
        <StyledDatepicker
          name="deadline"
          minValue={now(getLocalTimeZone())}
          defaultValue={deadline ? parseZonedDateTime(deadline) : undefined}
          onChange={(value) => setDeadline(value?.toString() ?? "")}
          time
          isRequired
        />
      </CustomFormElementContainer>

      <CustomFormElementContainer>
        <StyledLabel htmlFor="agreement">
          Upload an agreement PDF (optional)
        </StyledLabel>
        <StyledFileUploader
          callback={handleFileUpload}
          msg={
            agreementFile
              ? `Current file: ${formatFileName(agreementFile.name)}`
              : "Non PDF files will be ignored"
          }
          acceptedFileTypes={["application/pdf"]}
        />
      </CustomFormElementContainer>

      <ButtonContainer>
        <Button small text="Back" onPress={back} />
        <Button small text="Next" type="submit" />
      </ButtonContainer>
    </StyledForm>
  );
}
