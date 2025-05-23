import { Button, Tag } from "@kleros/ui-components-library";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useAccount, useDisconnect } from "wagmi";

const Container = styled.div`
  position: relative;
`;

const CustomTag = styled(Tag)`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.mediumBlue};

  &:hover {
    opacity: 0.8;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin-top: 8px;
  padding: 8px;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.base};
  background-color: ${({ theme }) => theme.colors.mediumBlue};
`;

const CustomButton = styled(Button)`
  border: 0;
  background-color: transparent;

  p {
    color: ${({ theme }) => theme.colors.secondaryText};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default function ConnectedMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { chain, address } = useAccount();
  const { disconnect } = useDisconnect();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node))
        setIsMenuOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Container ref={containerRef}>
      <CustomTag
        active
        text={`${chain?.name} | ${address?.slice(0, 6)}...${address?.slice(
          -4
        )}`}
        onPress={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <MenuContainer>
          <CustomButton text="Disconnect" small onPress={() => disconnect()} />
        </MenuContainer>
      )}
    </Container>
  );
}
