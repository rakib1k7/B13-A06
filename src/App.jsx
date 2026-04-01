import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";
import PremiumTools from "./components/PremiumTools";
import Rattings from "./components/rattings";
import Step from "./components/step";
import SelectedCart from "./components/SelectedCart";

const getAiTool = async () => {
  const res = await fetch("/public/AiTools/Aitools.json");
  return res.json();
};

function App() {
  const AiPromise = getAiTool();

  const [activeTab, setActiveTab] = useState("Tools")
  const [cartData, setCartData] = useState([])
  console.log(cartData);

  return (
    <>
      <Navbar />
      <Banner />
      <Rattings />
      {/* name of each tab group should be unique */}
      <div className="tabs justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Products"
          defaultChecked
          onClick={()=>setActiveTab("Tools")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Cart"
          onClick={()=> setActiveTab("Cart")}
          
        />
        
      </div>
      <Suspense>
        { activeTab === "Tools" && <PremiumTools AiPromise={AiPromise} cartData = {cartData} setCartData = {setCartData} />}
      </Suspense>
      { activeTab === "Cart" && <SelectedCart cartData = {cartData} />}

      <Step />
    </>
  );
}

export default App;
