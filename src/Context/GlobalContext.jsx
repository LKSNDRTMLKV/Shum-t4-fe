import { createContext, useState, useEffect } from "react";
import { Howl } from "howler";
import { API, METHOD, PROCCES_MSG } from "../Consts/Constants";
import useEndpoint from "../hooks/useEndpoint";

import sounds from "../Components/Player/sounds";

export const Context = createContext({});

const GlobalContextProvider = (props) => {
  const [choosenSounds, setChoosenSounds] = useState([]);
  const [choosenCategory, setChoosenCategory] = useState("");
  const [audioObj, setAudioObj] = useState([]);
  const [volume, setVolume] = useState({0: 100, 1: 100, 2: 100, 3: 100, 4: 100, 5: 100, 6: 100, 7: 100, 8: 100, 9: 100, 10: 100});
  const [globalVolume, setGlobalVolume] = useState(100);

  const webinarsObject = {
    method: METHOD.GET,
    url: API.WEBINARS,
  };
  const webinars = useEndpoint(webinarsObject);
  
  

  const storiesObject = {
    method: METHOD.GET,
    url: API.STORIES,
  };
  const stories = useEndpoint(storiesObject);
  

  const blogsObject = {
    method: METHOD.GET,
    url: API.BLOGS,
  };
  const blogs = useEndpoint(blogsObject);
  
  const mainApiObject = {
    method:METHOD.GET,
    url: API.MAINAPI,
  }
  const mainapi = useEndpoint(mainApiObject);

  const randomAudioObject = {
    method:METHOD.GET,
    url: API.RANDOMAUDIO,
  }
  const randomAudio = useEndpoint(randomAudioObject);
  

  const iconsObject = {
    method:METHOD.GET,
    url: API.ICONS,
  }
  const getIcons = useEndpoint(iconsObject);
  const icons = getIcons.data;

  

  const myContext = {
      choosenSounds,
      setChoosenSounds,
      webinars,
      stories,
      blogs,
      mainapi,
      randomAudio,
      icons,
  };

  return (
    <Context.Provider value={myContext}>{props.children}</Context.Provider>
  );
};

export default GlobalContextProvider;

