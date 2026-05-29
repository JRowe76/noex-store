import { useState, useEffect } from "react";
import Store from "./Store";
import BodyweightBurner from "./BodyweightBurner";
import AbsProgram from "./Abs";
import ArmBlast from "./ArmBlast";
import StrengthForRunners from "./StrengthForRunners";
import Stretching from "./Stretching";

export default function App() {
  const [page, setPage] = useState("store");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") || "store";
    setPage(hash);
    const onHash = () => setPage(window.location.hash.replace("#", "") || "store");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (p) => {
    window.location.hash = p;
    setPage(p);
    window.scrollTo(0, 0);
  };

  const BackButton = () => (
    <button
      onClick={() => navigate("store")}
      style={{ position: "fixed", bottom: 24, right: 20, zIndex: 999, background: "#2b2e2b", color: "#fff", border: "none", borderRadius: 100, padding: "12px 20px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
      ← Store
    </button>
  );

  if (page === "bodyweight-burner") return <><BodyweightBurner /><BackButton /></>;
  if (page === "abs") return <><AbsProgram /><BackButton /></>;
  if (page === "arm-blast") return <><ArmBlast /><BackButton /></>;
  if (page === "strength-for-runners") return <><StrengthForRunners /><BackButton /></>;
  if (page === "stretching") return <><Stretching /><BackButton /></>;
  return <Store navigate={navigate} />;
}
