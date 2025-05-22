import { useAppKit, useAppKitState } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { Button } from "@kleros/ui-components-library";

const ConnectButton: React.FC = () => {
  const { open } = useAppKit();
  const { open: isOpen } = useAppKitState();

  return (
    <Button
      isDisabled={isOpen}
      small
      text={"Connect Wallet"}
      onClick={async () => open({ view: "Connect" })}
    />
  );
};

export default function ConnectWallet() {
  const { isConnected, chain, address } = useAccount();

  if (isConnected) {
    return (
      <p>
        {address} | {chain?.name}
      </p>
    );
  } else return <ConnectButton />;
}
