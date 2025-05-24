import { useTransactions } from "hooks/useTransactions";

export default function Home() {
  const { data: transactions } = useTransactions();
  console.log("## transactions: ", transactions);
  return <div>Hello World</div>;
}
