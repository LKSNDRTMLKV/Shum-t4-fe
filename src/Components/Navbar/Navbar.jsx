import React, { useContext, useEffect, useState } from "react";
import UseClicked from "../../hooks/UseClicked";
import axios from "axios";

import styled from "styled-components";
import GlobalContextProvider, {
  Context,
  myContext,
} from "../../Context/GlobalContext";
import Icon from "../Icon";
import { Text16 } from "../../Consts/Text";

const NavWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position:relative;
  align-items: center;
  padding:1rem 2rem;
  

  .nav-logo {
    height: 71px;
    margin: 0 40px;
  }
  span {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: white;
    height: 100%;
  }
  .nav-menu {
    display: flex;
    align-items: center;
  }

  .nav-menu-img {
    height: 24px;
    cursor: pointer;
    margin: 5px 10px;
    filter:invert(1);
  }


  .share-menu-img {
    height: 24px;
    cursor: pointer;
    color: black;
  }
  .share-icons-wrap {
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.yellow_dark};
    border-radius: 10px;
  }

  .share-icons-wrap > li {
    padding: 5px 10px;
  }

  .closeBtn {
    cursor: pointer;
    background-color: transparent;
    border: transparent;
    font-size: 24px;
    height: 24px;
  }
  .closeBtn:hover {
    background-color:${(props) => props.theme.yellow_hover};
  }

  .clock-menu-form {
    background-color: ${(props) => props.theme.yellow_dark};
    display:flex;
    flex-direction:column;
    position:absolute;
    top:60%;
    right:4%;
    padding:10px;
    border-radius:10px;
  }

  .clock-menu p{
    color:black;
  }

  .clock-menu-btns {
    background-color: ${(props) => props.theme.yellow_dark};
    display:flex;
    border-radius:10px;
  }

  .input-wrap {
    position:relative;
  }

  #time {
    width:250px;
    height:40px;
    font-family:
    font-size:24px;
    margin:10px 0 20px;
    
  }

  #time::-webkit-datetime-edit-ampm-field{
    display:none;
  }

  .input-wrap > .nav-menu-img {
    position:absolute;
    top:5%; 
    right:5%;
  }

  .sound-menu-wrap {
    display:flex;
  }
  

`;

const Navbar = () => {
  const [navIcons, setNavIcons] = useState([]);
  const clicked = UseClicked();

  const [onShare, setShare] = useState(false);
  const [onClockMenu, setClockMenu] = useState(false);

  const { icons } = useContext(Context);

  let shareIcon = icons && icons.data.find((el) => el.name === "Сподели");
  let socialMediaIcons =
    icons && icons.data.filter((el) => el.category.includes("share"));
  let randomIcon = icons && icons.data.find((el) => el.name === "Рендом");
  let clockIcon = icons && icons.data.find((el) => el.name === "Саат");
  let navbarIcons =
    icons && icons.data.filter((el) => el.category.includes("navbar"));
  

  const clockElement = () => {
    return (
      <Icon
        cls="nav-menu-img"
        src={icons && clockIcon.location}
        alt={icons && clockIcon.id}
      />
    );
  };

  const closeBtn = (on, set) => {
    return (
      <button onClick={() => set(on)} className="closeBtn">
        &times;
      </button>
    );
  };

  return (
    <NavWraper>
      <img
        className="nav-logo"
        src={require(`../../imgs/Logo.svg`).default}
        alt="nav-brand"
      />
      <ul className="nav-menu">
        {onShare ? (
          <ul className="share-icons-wrap">
            {icons &&
              socialMediaIcons.map((el, idx) => {
                return (
                  <li key={idx}>
                    <Icon cls="share-menu-img" src={el.location} alt={el.id} />
                  </li>
                );
              })}
            <li>
              {closeBtn(!onShare, setShare)}
            </li>
          </ul>
        ) : (
          <li>
            <Icon
              cls="nav-menu-img"
              src={icons && shareIcon.location}
              alt={icons && shareIcon.id}
              onClick={() => setShare(!onShare)}
            />
          </li>
        )}
        <li>
          <Icon
            cls="nav-menu-img"
            src={icons && randomIcon.location}
            alt={icons && randomIcon.id}
            // onClick={() => shufflePlay()}
          />
        </li>
        {onClockMenu ? (
          <div className="clock-menu">
            <div className="clock-menu-btns">
            {clockElement()}
            {closeBtn(!onClockMenu, setClockMenu)}
            </div>
          <form className="clock-menu-form">
            <label htmlFor="time"><Text16 >Одбери Време</Text16> </label>
            <div className="input-wrap">
                <input type="time" id="time" min="1:00" max="60:00" />
            </div>
          <Text16 >Одбери Акција</Text16>
            <div className="sound-menu-wrap">
            <input type="checkbox" id="stopSound" />
                <label htmlFor="stopSound"><Text16>Прекини Звук</Text16> </label>
                <input type="checkbox" id="lowerSound" />
                <label htmlFor="lowerSound"><Text16>Намали Звук  </Text16> </label>
            </div>
                <button type="submit" onClick={(e)=>e.preventDefault()}>Zacuvaj</button>
          </form>
          </div>
          
        ) : (
          <li>{clockElement()}</li>
        )}

        <li>
          <span
          onClick={() =>setClockMenu(!onClockMenu)}
          >00:00</span>
        </li>
      </ul>
    </NavWraper>
  );
};

export default Navbar;
