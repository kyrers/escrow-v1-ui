import { useAccount } from "wagmi";
import ConnectButton from "./ConnectButton/ConnectButton";
import ConnectedMenu from "./ConnectedMenu/ConnectedMenu";

export default function ConnectWallet() {
  const { isConnected } = useAccount();

  if (isConnected) {
    return <ConnectedMenu />;
  }

  return <ConnectButton />;
}
