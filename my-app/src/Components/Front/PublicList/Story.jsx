
import { useContext } from "react";
import FrontContext from "../FrontContext";
import CreateDonor from "./CreateDonor";
import Donor from "./Donor";

function Story({ story }) {
  const { donors} = useContext(FrontContext);

 

  return (
    <>
    <li className="main-list-item">
      <div className="first-row">

      <div className="content">
        <b className="item">{story.title}</b>
        <span className="item">{story.text}</span>
        <b className="item">Goal: {story.sum} EUR</b>
        <b className="item" style={{ color: 'green' }}>Money Raised: {story.sumDonated} EUR</b>
        <b className="item" style={{ color: 'red' }}>Goal to be reached: {story.sumRemained} EUR</b>
      </div>

      <div className="photo-box">
        {story.picture ? (
          <div className="herbas">
            <img src={story.picture} alt={story.title} />
          </div>
        ) : null}
      </div>
      
      {story.sumRemained > 0 ?
          <CreateDonor/> :
          <p className='goal' style={{ color: 'red' }}>GOAL HAS BEEN REACHED!</p>
        }
        </div> 

<div className="second-row">
        <div className="col-12 list-form">
          <h2>List of Donors</h2>
          
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
    </li>
    </>
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