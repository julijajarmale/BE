import { useState } from "react";
import { useContext } from "react";
import FrontContext from "../FrontContext";
import DonorList from "./DonorList";

function Story({ story }) {
  const { setCreateDonor } = useContext(FrontContext);

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
    setName("");
    setSurname("");
    setDonation("");
    console.log(story.id);
  };
  return (
    <li className="list-item">
      <div className="content">
      <b className="item">{story.title}</b>
        <span className="item">{story.text}</span>
        <span className="item">Tikslas: {story.sum} EUR</span>
      </div>
      <div className="item herbas">
        {story.picture ? (
          <div className="photo-bin">
            <img src={story.picture} alt={story.title} />
          </div>
        ) : null}
      </div>
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
        <DonorList/>
        
      </div>
     
    </li>
    
  );
}

export default Story;
