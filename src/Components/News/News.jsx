import React, { useContext } from "react";
import styled from "styled-components";
import { Text64 } from "../../Consts/Text";

import { Context } from "../../Context/GlobalContext";
import NewsBlock from "./NewsBlock";

const NewsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:100px;
  .text64 {
    margin-bottom: 100px;
  }

  @media (max-width: 524px) {
    .text64 {
      display: none;
    }
  }

  .for-us {
    margin:100px 0;
  }

  .for-us > img {
    width:70px;
  }

  .for-us > button {
    cursor:pointer;
  display: block;
  background-color: #fbd249;
  text-transform: uppercase;
  border: transparent;
  border-radius: 30px;
  font-size: 14px;
  width: 111px;
  height: 42px;
  margin:20px;
  }
`;




const News = (props) => {

  const {webinars,stories,blogs} = useContext(Context);
  console.log(blogs.data)

  
  
 
  
  
  
  return (
    <NewsWrapper>
      <Text64 className="text64">Brainster Новости</Text64>
      <NewsBlock text48="Вебинари и Настани"
      text24="Научи практична вештина која ќе ти помогне да бидеш поуспешен во
      својата работа или да навлезеш во одредена област во која можеби ќе
      почнеш да градиш нова кариера."
      stories={webinars}
      data={webinars.data && webinars.data.webinars}
      btn="Сите Вебинари и Настани" 
      />
      <NewsBlock text48="Успешни Приказни"
      text24="Научи практична вештина која ќе ти помогне да бидеш поуспешен во
      својата работа или да навлезеш во одредена област во која можеби ќе
      почнеш да градиш нова кариера."
      stories={stories}
      data={stories.data && stories.data.stories}
      btn="Сите Успешни Приказни" 
      />
      <NewsBlock text48="Блог"
      text24="Научи практична вештина која ќе ти помогне да бидеш поуспешен во
      својата работа или да навлезеш во одредена област во која можеби ќе
      почнеш да градиш нова кариера."
      stories={blogs}
      data={blogs.data && blogs.data.posts}
      btn="Сите Блог Постови" 
      isLastSection={true}
      />
      <div className="for-us">
      <img src="../Logo.svg" alt='logo' />
      <button><a href="https://brainster.co/" target="_blanc">За Нас</a> </button>
      </div>
      
      
    </NewsWrapper>
  );
};

export default News;
