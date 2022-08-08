import { useState } from "react";
import { useContext } from "react";
import FrontContext from "../FrontContext";
import Donor from "./Donor";

function Story({ story }) {
  const { setCreateDonor, donors, stories } = useContext(FrontContext);

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

        <div className="col-12 list-form">
          <h2>List of Donors</h2>
          <div className="list-group">
            <ul className="list-group-item">
              {donors
                ? donors.map((donor) =>
                    donor.story_id === story.id ? (
                      <Donor key={donor.id} donor={donor}></Donor>
                    ) : null
                  )
                : null}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Story;

//let surinktaSuma;

//surinktaSuma = donors.filter(d => (d.story_id === story.id)).reduce((total, item) => total + +item.donation, 0).toFixed(2);

//<p>
//Jau surinkta suma: <b>{donors && stories ? surinktaSuma : null} EUR</b>
//<p
//  style={
//    story.sum <= surinktaSuma
//      ? { display: "block", color: "green", fontWeight: "bold" }
//      : { display: "none" }
//  }
//>
//  Suma surinkta!
//</p>
//</p>
//<p
//style={
//  story.sum <= surinktaSuma ? { display: "none" } : { display: "block" }
//}
//>
//Likusi iki tikslo suma:{" "}
//<b>
//  {donors && stories
//    ? (
//        story.sum -
//        donors
//          .filter((d) => d.story_id === story.id)
//          .reduce((total, item) => total + +item.donation, 0)
//      ).toFixed(2)
//    : null}{" "}
//  EUR
//</b>
//</p>
//<div
//style={
//  story.sum <= surinktaSuma ? { display: "none" } : { display: "block" }
//}
//></div>