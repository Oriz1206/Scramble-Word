import React from 'react';
import { ArticleWrap, ButtonEntry, RulePart, TitlePart, TitleText, WarpRule } from './Rule';
import OneRule from '../../Component/Each Rule/OneRule';

export default function Wordle() {
  document.title = "Home";

  return (

    <WarpRule>

      <ArticleWrap style={{background: "var(--Primary_Dark)", alignItems: 'center', justifyContent: 'center'}}>

        <TitleText>
          <h1>scramble it!</h1>
        </TitleText>

        <ButtonEntry>
          <a href='/game'>Let's scramble</a>
        </ButtonEntry>

      </ArticleWrap>

      <ArticleWrap style={{background: "var(--Primary_White)"}}>

        <TitlePart>
          <h1>scramble<br></br>rule</h1>
        </TitlePart>

        <RulePart>

          <OneRule title={"First"} main={"The game gives you 5 questions. Each question have an image and the letters of the word describe that image."}/>
          <OneRule title={"Second"} main={"Choose each letter given to complete your answer."}/>
          <OneRule title={"Third"} main={"Each correct letter gives you 10 points, if wrong you get 0 points. You can press GIVE UP to skip the current question (Score 0)."}/>

        </RulePart>

      </ArticleWrap>

    </WarpRule>

  )
}

