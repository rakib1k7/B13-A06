import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";
import PremiumTools from "./components/PremiumTools";
import Rattings from "./components/rattings";

const getAiTool = async () => {
  const res = await fetch("/public/AiTools/Aitools.json");
  return res.json();
};

function App() {
  const AiPromise = getAiTool();

  return (
    <>
      <Navbar />
      <Banner />
      <Rattings />

      <Suspense>
        <PremiumTools AiPromise={AiPromise} />
      </Suspense>
    </>
  );
}

export default App;
