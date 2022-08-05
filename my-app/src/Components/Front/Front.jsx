import Nav from "../Back/Nav";
import FrontContext from "./FrontContext";
import FrontNav from "./Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import StoryCrud from "./Story/Crud";

function Front({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [stories, setStories] = useState(null);
  const [createStory, setCreateStory] = useState(null);

  //READ STORIES
  useEffect(() => {
    axios
      .get("http://localhost:3003/story")
      .then((res) => setStories(res.data));
  }, [lastUpdate]);

  //CREATE STORIES

  useEffect(() => {
    if (null === createStory) return;
    axios.post("http://localhost:3003/story", createStory).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createStory]);

  return (
    <FrontContext.Provider
      value={{
        stories,
        setCreateStory,
      }}
    >
      {show === "/" ? (
        <>
          <Nav />
        </>
      ) : show === "story" ? (
        <StoryCrud />
      ) : null}
      <FrontNav />
      <div className="container">
        <div className="row"></div>
      </div>
      <div className="container">
        <div className="row"></div>
      </div>
    </FrontContext.Provider>
  );
}
export default Front;
