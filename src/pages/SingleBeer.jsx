import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerCard from "../components/BeerCard";

function SingleBeer() {
  const params = useParams();

  const [beerDetails, setBeerDetails] = useState;

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.id}`
      );

      console.log(response);
      setBeerDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <BeerCard beerDetails={beerDetails} />
      {/* He de actualizar esto para que muestre más detalles de cada cerveza */}
    </div>
  );
}
export default SingleBeer;
