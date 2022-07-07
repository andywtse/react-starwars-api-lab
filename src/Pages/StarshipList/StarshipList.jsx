import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/api-calls";

const StarshipList = () => {

  const [starshipList, setStarshipList] = useState([]);

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships();
      setStarshipList(starshipData.results);
    }
    fetchStarshipList();
  }, []);

  return (
    <>
      <div className="Starship-Card-Container">
      {starshipList.map(starship =>
        <Link to="/starship" key={starship.name} state={{starship}} className="Card-Link">
          <div className="Starship-Card">
            <h2>{starship.name}</h2>
          </div>
        </Link>
      )}
      </div>
    </>
  );
}

export default StarshipList;