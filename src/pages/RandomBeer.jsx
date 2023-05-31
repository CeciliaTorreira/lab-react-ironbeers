import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleBeer from "./SingleBeer";


function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState();

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const aRandomBeer = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(aRandomBeer);

      setRandomBeer(aRandomBeer);
    } catch (error) {
      console.log(error);
      navigate("/error"); //
    }
  };


  useEffect(()=>{
   getData()
  // eslint-disable-next-line
  }, [])
  return <div>
  <SingleBeer beerDetails={randomBeer}/>
  
  </div>;
}

export default RandomBeer;
