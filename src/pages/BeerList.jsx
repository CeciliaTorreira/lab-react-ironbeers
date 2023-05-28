import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BeerCard from "../components/BeerCard";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const allBeers = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      //console.log(response.data)
      setBeers(allBeers.data);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
     // eslint-disable-next-line 
  }, []);

  return (
    <div>
      <h2>Beer List</h2>
      <div className="beer-list">
      {beers.map((eachBeer) => {
        return (<BeerCard key={eachBeer.id} eachBeer={eachBeer}/>)
      })}
      </div>
    </div>
  );
}

export default BeerList;
