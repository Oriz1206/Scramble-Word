import React, {useEffect, useMemo, useState} from 'react';
import BoxRes from '../../Component/Box_Res/BoxRes';
import { ResBtns, ResMain, ResWrap } from './Res_Styled';

export default function GameRes() {

  const [resultGame, SetResultGame] = useState([]);

  const getAllInLocal = () =>{
    SetResultGame(JSON.parse(localStorage.getItem("game-result")).game);
  }

  useEffect(()=> {
    getAllInLocal();
    document.title = "Playing Game...";
  }, []);

  return (

    <ResWrap>

        
        <ResMain>
          {
            resultGame.length !==0
            ? <>
                <div>
                  <p>Points: {resultGame.reduce((acc, cur) => acc += cur.points, 0)}/{resultGame.reduce((acc, cur) => acc += cur.key.length *10, 0)}</p>
                </div>
                <div>
                  {
                    resultGame.map(e => (
                    <BoxRes img={e.img} user_ans={e.guess} correct_ans={e.key}/>))
                  }
                </div>
            </>
            : <p>Nothing</p>
          }
        </ResMain>


        <ResBtns>
            <a href='/game'>Again</a>
            <a href='/'>Home</a>
        </ResBtns>

    </ResWrap>

  )
}

