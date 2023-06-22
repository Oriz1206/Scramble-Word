import React, {useState} from 'react';
import { EachRes } from '../../Pages/Game_Res/Res_Styled';

export default function BoxRes({img, user_ans, correct_ans}) {

  return (

    <EachRes className={user_ans === correct_ans ? "Correct" : "Wrong"}>

        <div>

            <div>
                <p>Answere: {correct_ans.toUpperCase()}</p>
            </div>

            <div>
                <p>Your Answere: {user_ans.toUpperCase().length ===0  ? "No Answere" : user_ans.toUpperCase()}</p>
            </div>

        </div>

        <div>

            <img alt='pic' src={img}></img>

        </div>

    </EachRes>

  )
}