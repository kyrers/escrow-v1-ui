import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to invoices page immediately
    navigate('/invoices');
  }, [navigate]);

  // Return null since we're redirecting
  return null;
}
