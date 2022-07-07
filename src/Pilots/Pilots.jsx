import { useEffect, useState } from "react";
import { getPilots } from "../services/api-calls";

const Pilots = (props) => {

  const [pilotList, setPilot] = useState([]);

  useEffect(() => {
    const fetchPilotDetails = async () => {
      const pilotList = await getPilots(props.pilots);
      setPilot(pilotList)
    }
    fetchPilotDetails();
  });

  return (
    <>
      {pilotList.length !== 0 ? 
        <>
        {pilotList.map(pilot => 
          <li key={pilot.name}>{pilot.name}</li>
        )}
        </>
      :
      <li key="None">No Pilots</li>
      }
      
    </>
  );
}

export default Pilots;