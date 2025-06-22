import {
  Button,
  DropdownSelect,
  NumberField,
  TextField,
} from "@kleros/ui-components-library";
import { ETH_TOKEN } from "config/tokens";
import { useERC20Tokens } from "hooks/useERC20Tokens";
import { useMemo } from "react";
import styled from "styled-components";
import { validateAddress } from "utils/common";
import {
  ButtonContainer,
  mobileResponsive,
  StyledForm,
} from "../StyledForm/StyledForm";

const StyledTextField = styled(TextField)`
  width: 500px;

  ${mobileResponsive}
`;

const AmountAndTokenContainer = styled.div`
  display: flex;
  width: 500px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 250px;
    align-items: center;
  }
`;

const StyledNumberField = styled(NumberField)`
  ${mobileResponsive}
`;

const StyledDropdownSelect = styled(DropdownSelect)`
  button {
    ${mobileResponsive}
  }
`;

//Instead of having to use hacks to style the dropdown options, we can just add a small margin to the image element
const StyledImage = styled.img`
  margin-right: 8px;
`;

interface Props {
  next: () => void;
  back: () => void;
}

export default function Details({ next, back }: Props) {
  const { data: erc20Tokens } = useERC20Tokens();

  const tokens = useMemo(() => {
    return [ETH_TOKEN, ...erc20Tokens];
  }, [erc20Tokens]);

  return (
    <StyledForm onSubmit={next}>
      <StyledTextField
        isRequired
        label="Title"
        name="title"
        placeholder="Title of the escrow transaction"
        type="text"
      />

      <StyledTextField
        isRequired
        label="Receiver"
        name="receiver"
        placeholder="ETH address of the funds receiver"
        type="text"
        validationBehavior="native"
        validate={(value) =>
          validateAddress(value) ? true : "Invalid ETH address"
        }
        maxLength={42}
        autoComplete="off"
      />

      <AmountAndTokenContainer>
        <StyledNumberField
          isRequired
          label="Amount"
          name="amount"
          placeholder="Amount"
          validationBehavior="native"
          validate={(value) =>
            value > 0 ? true : "Amount must be greater than 0"
          }
        />

        <StyledDropdownSelect
          callback={() => {}}
          label="Token"
          name="token"
          isRequired
          items={[
            ...tokens.map((token) => ({
              icon: (
                <StyledImage
                  src={token.logoURI}
                  alt={token.name}
                  width={24}
                  height={24}
                />
              ),
              id: token.name,
              itemValue: token.address,
              text: token.ticker,
            })),
          ]}
        />
      </AmountAndTokenContainer>

      <ButtonContainer>
        <Button small text="Back" onPress={back} />
        <Button small text="Next" type="submit" />
      </ButtonContainer>
    </StyledForm>
  );
}
