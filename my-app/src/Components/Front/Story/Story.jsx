function Story({ story }) {
  return (
    <li className="list-item">
      <div className="content">
        <b className="item">{story.title}</b>
        <span className="item">{story.text}</span>
        <span className="item">Goal: {story.sum} EUR</span>
        <p style={{ color: story.approved ? "green" : "red" }}>
          Approved: {story.approved ? "Yes" : "No"}
        </p>
      </div>
      <div>
        {story.picture ? (
          <div className="herbas">
            <img src={story.picture} alt={story.title} />
          </div>
        ) : null}
      </div>
    </li>
  );
}

export default Story;
