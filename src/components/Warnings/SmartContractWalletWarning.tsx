import { AlertMessage } from "@kleros/ui-components-library";
import { IconButton } from "components/Common/Buttons/IconButton";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCode } from "viem/actions";
import { useAccount, useClient } from "wagmi";
import CloseIcon from "assets/close.svg?react";

const Container = styled.div`
  display: flex;
`;

const StyledAlertMessage = styled(AlertMessage)`
  flex: 1;
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
`;

export default function SmartContractWalletWarning() {
  const client = useClient();
  const { address } = useAccount();
  const [isSmartContractWallet, setIsSmartContractWallet] =
    useState<boolean>(false);
  const [showWarning, setShowWarning] = useLocalStorage<boolean>(
    "@kleros/escrow-v1/alert/smart-contract-wallet-warning",
    true
  );

  useEffect(() => {
    if (address && client) {
      getCode(client, {
        address: address,
      }).then((code) => {
        setIsSmartContractWallet(!!code);
      });
    }
  }, [address, client]);

  if (!showWarning || !isSmartContractWallet) {
    return null;
  }

  return (
    <Container>
      <StyledAlertMessage
        title="Warning"
        msg="You are using a smart contract wallet. This is not recommended."
        variant="warning"
      />

      <StyledIconButton
        small
        icon={<CloseIcon />}
        text=""
        onClick={() => setShowWarning(false)}
      />
    </Container>
  );
}
