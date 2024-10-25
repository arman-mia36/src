
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Button from "./components/Main-body/Button/Button";
import Subscript from "./components/Subscribe/Subscript";
import Footer from "./components/Footer/Footer";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  // coin option
  const [coin, setCoin] = useState(0);

  // for active button
  const [activeButton, setActiveButton] = useState("available");

  // for avalabe cards
  const [player, setPlayer] = useState([]);
  
  // choose player 
  const [choosePlayer, setChoosePlayer] = useState([]);
  console.log(choosePlayer);
  
  const handleIsActive = (status)=>{
setActiveButton(status);
  }

  // coin function
  const handleCoin = () => { 
    setCoin(coin + 500000);
    toast('You Added $ 500000');
    
  }

  // setChoosePlayer([...choosePlayer, player[0]]);
  // choose player function
  const handleSelectPlayer = (selectePlayer) => {
  //   setChoosePlayer(selectePlayer);
  // console.log(selectePlayer);

     setChoosePlayer((prev)=>[...prev,selectePlayer]);
     console.log(selectePlayer);

  }


  useEffect(() => {
    fetch('players.json')
      .then(response => response.json())
    .then(data => setPlayer(data.players))
  },[])


  return (
    <>
      <Header coin={coin}></Header>
      <Banner handleCoin={handleCoin}></Banner>
      <Button
        handleIsActive={handleIsActive}
        activeButton={activeButton}
        player={player}
        handleSelectPlayer={handleSelectPlayer}
        choosePlayer={choosePlayer}
      ></Button>
      <Subscript></Subscript>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
}

export default App;
