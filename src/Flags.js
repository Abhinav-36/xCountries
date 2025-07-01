import { useState, useEffect } from "react";

const Flag = ({ name,flag,abbr }) => {
  return (  <div className="flag-box" 
      style={{ display: "flex",
         flexDirection: "column", 
         justifyContent: "center",
         alignItems: "center",
         border: "1px solid lightgray",
         borderRadius: "10px",
         height: "150px",
         width: "150px",
         textAlign: "center",
          }}>
        <img style={{ width: "50px", height: "50px" }} src={flag} alt={abbr} />
        <h5>{name}</h5>
      </div>
  );
};

export default function Flags() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setFlags(data);
        } catch (error) {
            console.error("Error fetching flags:", error);
        }
      
    };
    fetchData();
  }, []);

  const url = "https://xcountries-backend.azurewebsites.net/all";

  return (
    <div className="Flags" style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      padding: "10px",
    }}>
      {flags.map(({name,flag,abbr}) => (
        <Flag key={abbr} flag={flag} name={name} abbr={abbr} />
        // Each flag is represented by a div with an image and a label)
      
 ))}
    </div>
  );
}