import Header from "./components/header";
import "./style.css";
import { useState } from "react";
import CardView from "./components/CardView";

export default function App() {
  const [priceAcen, setpriceAcen] = useState(false);
  const [priceDesc, setpriceDesc] = useState(false);
  const [gender, setGender] = useState("Gender");
  const [size, setSize] = useState("Size");

  function handleClickAcen() {
    if (priceAcen) {
      setpriceAcen(false);
      setpriceDesc(true);
    } else {
      setpriceAcen(true);
      setpriceDesc(false);
    }
  }

  function handleClickDesc() {
    if (priceDesc) {
      setpriceDesc(false);
      setpriceAcen(true);
    } else {
      setpriceDesc(true);
      setpriceAcen(false);
    }
  }

  function handleSelectGender(e) {
    console.log(e.target.value);
    setGender(e.target.value);
  }
  function handleSelectSize(e) {
    console.log(e.target.value);
    setSize(e.target.value);
  }

  return (
    <>
      <div className="App">
        <Header />
        <div className="body">
          <div className="sortingToolbar">
            <button onClick={handleClickAcen}>Price: Low to high </button>
            <button onClick={handleClickDesc}>Price: High to low </button>
            <select value={size} onChange={handleSelectSize}>
              <option value="default">Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extraLarge">Extra Large</option>
            </select>
            <select value={gender} onChange={handleSelectGender}>
              <option value="default">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button>Clear All</button>
          </div>
          <div className="cardView">
            <CardView
              genderSelected={gender}
              pricesortasc={priceAcen}
              pricesortdes={priceDesc}
              sizeSelected={size}
            />
          </div>
        </div>
      </div>
    </>
  );
}
