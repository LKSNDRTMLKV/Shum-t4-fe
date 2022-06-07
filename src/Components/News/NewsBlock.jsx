import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text24, Text48,  } from "../../Consts/Text";
import {  PROCCES_MSG } from "../../Consts/Constants";
import Card from "./Card";
import { useMediaQuery } from "react-responsive";
import Card2 from "./Card2";

const NewsBlockWrapper = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
padding:10px;
margin-bottom:100px;

.stories {
  display:flex;
  flex-flow: row wrap;
}


.text48 {
  margin: 0 auto;
  margin-bottom: 50px;
}

.text24 {
  margin-bottom: 20px;
}

button {
  cursor:pointer;
  display: block;
  background-color: #fbd249;
  text-transform: uppercase;
  border: transparent;
  border-radius: 30px;
  font-size: 14px;
  width: 309px;
  height: 42px;
  margin-bottom: 20px;
}

@media (max-width: 1200px) {
  width: 80%;
}

@media (max-width: 974px) {
  width: 100%;
}
`;

const NewsBlock = ({ text48, text24, stories, data , btn }) => {
    
  
  const [storiesToRender, setStoriesToRender] = useState([]);
  const [blogsToRender, setBlogsToRender] = useState([]);

  console.log(data && data.length)

  const isMobile = useMediaQuery({ query: '(max-width: 524px)' })

  const setLessStories = () => {
    let newStories = [];
    
      data && data.length && data.forEach((story,idx) => {
        if(isMobile ? idx <= 1 : idx <= 2) {
          newStories.push(story);
        }
        setStoriesToRender(newStories)
      })
    
     
    
  }

  const setAllStories = (e) => {
    let allStories = [];
    data && data.length && data.forEach((story) => {
      allStories.push(story)
    })
    setStoriesToRender(allStories)
    e.target.remove();
  }

  useEffect(()=>{
        setLessStories();
    },[data])

  


  return (
    <NewsBlockWrapper>
      <Text48 className="text48">{text48}</Text48>
      <Text24 className="text24">{text24}</Text24>
      <div className="stories">
            {(stories.pending && PROCCES_MSG.LOADING) ||
              (stories.error && PROCCES_MSG.ERROR) ||
              (stories.complete && 
                storiesToRender.map((el, idx) => {
                  console.log(el)
                  return <Card key={idx} info={el} />;
                }) )
                
                
                }
      </div>

          

        <button onClick={(e) => setAllStories(e)}>{btn}</button>
    </NewsBlockWrapper>
  );
};

export default NewsBlock;
