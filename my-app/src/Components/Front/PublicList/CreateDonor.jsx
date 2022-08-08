import { useState } from "react";

import { useContext } from "react";
import FrontContext from "../FrontContext";


function CreateDonor({story}) {
 
    const { setCreateDonor, setDonationSum} = useContext(FrontContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [donation, setDonation] = useState("");
  
    const handleDonate = () => {
      const data = {
        name,
        surname,
        donation: parseFloat(donation),
        story: story.id,
      };
      setCreateDonor(data);
      setDonationSum({ id: story.id, donation: donation })
      setName("");
      setSurname("");
      setDonation("");
      console.log(story.id);
    };

  return (
    <div className="content">
        
        <h4>Make Donation!</h4>
        <div className="form-row">
          <input
            type="text"
            className="input"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-row input">
          <input
            type="text"
            className="input"
            placeholder="Enter Surname"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            className="input"
            placeholder="Enter Sum"
            onChange={(e) => setDonation(e.target.value)}
            value={donation}
          />
        </div>

        <button type="button" className="btn" onClick={handleDonate}>
          DONATE
        </button> 
    </div>
  );
}

export default CreateDonor;