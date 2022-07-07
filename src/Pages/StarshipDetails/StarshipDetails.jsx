import { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Pilots from "../../Pilots/Pilots";
import { getStarshipDetails } from "../../services/api-calls";

const StarshipDetails = () => {

  const [starshipDetails, setStarshipDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url);
      setStarshipDetails(starshipData);
    }
    fetchStarshipDetails();
  },[location.state.starship.url]);

  return (
    <>
      <div className="Detail-Card">
        {starshipDetails.name ? 
        <>
          <h2>Name: {starshipDetails.name}</h2>
          <h2>Model: {starshipDetails.model}</h2>
          <h2>Pilots:</h2>
          <ul>
            <Pilots pilots={starshipDetails.pilots}/>
          </ul>
          <Link key="Return" to="/">
            <h3>Return</h3>
          </Link>
        </>
        :
        <>
          <p>Loading ship details...</p>
        </>
        }
      </div>
    </>
  );
}

export default StarshipDetails;