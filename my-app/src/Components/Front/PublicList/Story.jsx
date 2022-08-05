function Story({ story }) {
    return (
      <li className="list-item">
        <div className="content">
          <span className="item">{story.title}</span>
          <span className="item">{story.text}</span>
          <span className="item">{story.sum}</span>
        </div>
        <div className="item herbas">
          {story.picture ? (
            <div className="photo-bin">
              <img src={story.picture} alt={story.title} />
            </div>
          ) : null}
        </div>
      </li>
    );
  }
  
  export default Story;
  