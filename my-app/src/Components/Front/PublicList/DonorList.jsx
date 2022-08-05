import { useContext } from "react";
import FrontContext from "../FrontContext";
import Donor from "./Donor";


function DonorList() {
  const { donors } = useContext(FrontContext);

  return (
    <div className=" list-container">
      <div className="row">
        <div className="col-12 list-form">
          <h2>List of Donors</h2>
          <div className="list-group">
          <ul className="list-group-item">
            { donors
              ? donors.map((donor) => (
                  <Donor key={donor.id} donor={donor}></Donor>
                ))
              : null}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorList;