import { useAppKit, useAppKitState } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { Button, Tag } from "@kleros/ui-components-library";

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
    return <Tag active text={`${address} | ${chain?.name}`} />;
  } else return <ConnectButton />;
}
