import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  }, []);

  return (
    <div>
      <h2>Beer List</h2>
      {beers.map((eachBeer) => {
        return <div key={eachBeer.id}>{eachBeer.name}</div>;
      })}
    </div>
  );
}

export default BeerList;
