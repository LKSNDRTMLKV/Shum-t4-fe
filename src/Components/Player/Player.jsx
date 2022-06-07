import React, { isValidElement, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Howl } from "howler";
import sounds from "./sounds";
import styled from "styled-components";
import { Text_main } from "../../Consts/Text";

const PlayerWrapper = styled.div`
  padding: 92px 0;
  display: flex;
  align-items: ceter;

  .player-main {
    // flex-basis: 20%;
    min-width: 400px;
  }
  .secondary-player {
    text-align: center;
    align-self: center;
  }
  .categories {
    // flex-basis: 80%;
    display: flex;
  }
  .player-office,
  .player-coffeeshop,
  .player-fireplace,
  .player-forest {
    flex-basis: 25%;
    align-self: center;
  }

  button {
    display: block;
    width: 100%;
    background-color: black;
    border: none;
    padding: 0 60px;
    height: 170px;
  }

  img {
    width: 80px;
  }
  label img {
    filter: invert(1);
    width: 20px;
    margin: 4px;
  }
  img:hover {
    filter: invert(0.8);
  }

  .main-logo-wrapper {
    padding: 0 60px;
  }
  .main-logo-btn {
    height: 400px;
    padding: 0;
  }
  .main-logo-img {
    width: 100%;
  }
  .subcategory-volume {
    display: flex;
  }
  .volume-wrapper {
    position: relative;
    display: flex;
    padding-top: 60px;
  }
  .main {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Player = () => {
  const [chosenSounds, setChosenSounds] = useState([]);
  const [audioObj, setAudioObj] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");

  const [globalVolume, setGlobalVolume] = useState(100);

  const [categoryIcons, setCategoryIcons] = useState([]);
  const [subcategoryIcons, setSubcategoryIcons] = useState([]);

  useEffect(() => {
    axios.get("https://22fc1033b138.ngrok.io/api/category").then((res) => {
      setCategoryIcons(res.data.category);
    });
  }, []);

  useEffect(() => {
    axios.get("https://22fc1033b138.ngrok.io/api/category").then((res) => {
      setSubcategoryIcons(res.data.subcategory);
      console.log(res.data.subcategory);
    });
  }, []);

  useEffect(() => {
    let chosen = sounds.filter((el) => el.category.includes(chosenCategory));

    let audioObjects = [];

    if (chosen !== []) {
      chosen.forEach((sound) => {
        audioObjects[sound.id] = {};
        audioObjects[sound.id].howler = new Howl({
          src: sound.url,
          loop: true,
          volume: (globalVolume - (100 - sound.volume)) / 100,
          onend: function () {
            if (!sound.seamless || false) {
              audioObjects[sound.id].howler.pause();
              setTimeout(function () {
                audioObjects[sound.id].howler.play("loop");
              }, sound.randomPause || 0);
            }
          },
          sprite: {
            loop: [sound.loopStart, sound.loopEnd, true],
          },
        });
      });

      setChosenSounds(chosen);
      setAudioObj(audioObjects);
    }

    console.log(chosenSounds);
  }, [chosenCategory]);

  const Pause = () => {
    audioObj.forEach((el) => el.howler.pause());
    setChosenCategory("");
  };

  const Volume = (e, id, audio) => {
    audio[id].howler.volume(e.target.value * 10);
  };

  const MainVolume = (e) => {
    let val = e.target.value * 10;
    setGlobalVolume(val);
  };

  const categoryClicked = (category) => {
    setChosenCategory(category);
    audioObj.forEach((el) => {
      el.howler.play("loop");
    });
  };

  return (
    <PlayerWrapper>
      {/* MAIN PLAYER */}
      <div className="player-main">
        {" "}
        <div className="main-logo-wrapper">
          <button className="main-logo-btn" onClick={Pause}>
            <img
              className="main-logo-img"
              src={require(`../../imgs/MainLogo.svg`).default}
            />{" "}
          </button>
        </div>
        <div className="main-volume">
          <label htmlFor="office">Main Volume</label>
          <input
            type="range"
            min="0"
            max="10"
            onChange={(e) => MainVolume(e)}
            name="office"
            id="office"
          ></input>
        </div>
      </div>
      {/* ____________________________ */}
      <div className="secondary-player">
        <div className="categories">
          <div className="player-office">
            <button onClick={() => categoryClicked("office")}>
              <img
                src={
                  categoryIcons.length > 0 ? categoryIcons[0].location : null
                }
              />
            </button>
          </div>
          <div className="player-coffeeshop">
            <button onClick={() => categoryClicked("coffeeshop")}>
              <img
                src={
                  categoryIcons.length > 0 ? categoryIcons[1].location : null
                }
              />
            </button>
          </div>
          <div className="player-fireplace">
            <button onClick={() => categoryClicked("fireplace")}>
              <img
                src={
                  categoryIcons.length > 0 ? categoryIcons[2].location : null
                }
              />
            </button>
          </div>
          <div className="player-forest">
            <button onClick={() => categoryClicked("forest")}>
              <img
                src={
                  categoryIcons.length > 0 ? categoryIcons[3].location : null
                }
              />
            </button>
          </div>
        </div>
        {/* SUBCATEGORIES */}
        {chosenCategory === "" ? (
          <Text_main>
            Одберете ја вашата омилена категорија на звуци и работете
            продуктивно.
          </Text_main>
        ) : (
          <div className="volume-wrapper">
            {chosenSounds.map((el) => (
              <div className={el.main ? "main" : "sub"}>
                {" "}
                <label htmlFor={el.id}>
                  {" "}
                  <img src={el.icon} />{" "}
                </label>{" "}
                <input
                  type="range"
                  min="0"
                  max="10"
                  name={el.name}
                  id={el.id}
                  onChange={(e, id, audio) => Volume(e, el.id, audioObj)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </PlayerWrapper>
  );
};

export default Player;
