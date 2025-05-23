import { IconButton } from "components/common/IconButton";
import QuestionCircle from "assets/question-circle.svg?react";

export default function Tutorial() {
  return (
    <a
      href="https://docs.kleros.io/products/escrow/new-in-progress-kleros-escrow-tutorial"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton small icon={<QuestionCircle />} text="" />
    </a>
  );
}
