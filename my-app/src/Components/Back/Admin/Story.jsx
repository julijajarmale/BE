import { useContext } from "react";
import BackContext from "../BackContext";

function Product({ story }) {
  const { setDeleteStory, setApproveStory } = useContext(BackContext);

  const handleDelete = () => {
    setDeleteStory(story);
  };

  const handleApprove = () => {
    const data = { ...story, approved: 1 };
    setApproveStory(data);
  };

  const handleDissaprove = () => {
    const data = { ...story, approved: 0 };
    setApproveStory(data);
  };


  return (
    <li className="list-item">
      <div className="content">
        <span className="item">{story.title}</span>
        <span className="item">{story.text}</span>
        <span className="item">{story.sum}</span>
        <p style={{ color: story.approved ? "green" : "red" }}>
          Approved: {story.approved ? "Yes" : "No"}
        </p>
      </div>
      <div className="item herbas">
        {story.picture ? (
          <div className="photo-bin">
            <img src={story.picture} alt={story.title} />
          </div>
        ) : null}
      </div>

      <div className="buttons">
        <button type="button" className="buttons btn4" onClick={handleApprove}>
          Approve
        </button>
        <button type="button" className="buttons btn5" onClick={handleDissaprove}>
          DisApprove
        </button>
        <button type="button" className="buttons btn3" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Product;
