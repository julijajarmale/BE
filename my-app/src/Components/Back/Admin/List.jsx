import { useContext } from "react";
import Story from "../Admin/Story"
import BackContext from "../BackContext";


function List() {
  const { stories } = useContext(BackContext);

  return (
    <div className="container list-container">
      <div className="row">
        <div className="col-12 list-form">
          <h2>List of Stories</h2>
          <div className="list-group">
          <ul className="list-group-item">
            { stories 
              ?  stories.map((story) => (
                  <Story key={story.id} story={story}></Story>
                ))
              : null}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;