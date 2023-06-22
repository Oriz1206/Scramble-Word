import React, {useEffect, useMemo, useState} from 'react';
import { AnswereBtns, GameWrap, GiveUpWrap, PopupBtn, PopupInfo, PopupWrap, PopupWrapMain, QuestionBtns, QuestionImage, QuestionWrap } from './Game_Styled';

export default function WordleGame() {

    const [count, setCount] = useState(-1);
    const [show, SetShow] = useState(false);
    const [currentAns, SetCurrentAns] = useState('');
    const [listQuestion, SetListQuestion] = useState([]);
    const [userGuess, SetUserGuess] = useState(Array(5).fill([]));
    const [results, SetResult] = useState({});

    const getList = () => {
        let baseList = require("../../../source.json");

        let randomIdx = Math.floor(Math.random() * baseList.length) <= 5 ? 5 : Math.floor(Math.random() * baseList.length)

        SetListQuestion(shuffleArray(baseList.filter((_, idx) => idx >= randomIdx-5 && idx < randomIdx)));
        setCount(0);
    };

    const increaseCount = () => {
        setCount(count+1);
        SetShow(false);
    };

    const giveUp = () =>{
        SetShow(true);
        SetUserGuess(userGuess => userGuess.map((e, idx) => {
            if(idx === count) return Array(e.length).fill('');
            return e;
        }))
    };

    const findEmptyPlaceInArray = (array) => {
        return array.findIndex(e => e=== '')
    };

    const handleClickBtnAns = (event, index) => {
        
        SetUserGuess(userGuess => userGuess.map((e, idx) => {
                if(idx === count) {
                    return e.map((el, id) => {
                        if(findEmptyPlaceInArray(e) === id) {
                            return {key: event.target.value, pos: index}
                        }
                        return el;

                    })
                }
                return [...e]
            })
        );
    };

    const handleClickBtnGuess = (event, index) => {

        SetUserGuess(userGuess => userGuess.map((e, idx) => {
                if(idx === count) {
                    return e.map(( el, id) => {
                        if(id !== index) return el;
                        return ""
                    })
                }
                return [...e]
            })
        );

    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const checkCurrentAns = () => {

        let stringUserGuess = userGuess[count].map(e=> e.key).join("");

        SetResult(res => ({
            username : res.username,
            game : res.game.map((e, idx) => {
                if(idx === count) return {
                    key: e.key,
                    img: e.img,
                    guess : stringUserGuess, 
                    iscorrect: stringUserGuess === e.key,
                    points: compareStrings(e.key, stringUserGuess) *10
                }

                return e
            })
        }))

        SetShow(true);
    };

    const handleCLickToEnd = () => {
        localStorage.setItem("game-result", JSON.stringify(results));
        window.location.href="/game-result";
    };
    
    const compareStrings = (str1, str2) => {
      let count = 0;
      
      // Make sure both strings have the same length
      if (str1.length !== str2.length) {
        throw new Error("Strings must have the same length");
      }
      
      for (let i = 0; i < str1.length; i++) {
        // Compare characters at the same position
        
        if(str1[i] === str2[i]){
            count++
        }
      }
      
      return count;
    };
    

    useMemo(() => {

        if(count >=0 ) {
            SetUserGuess(userGuess => userGuess.map((e, idx) => {
                if(idx === count) {
                    return Array.from(listQuestion[count].key).map(e=> '');
                }
                return [...e]
            }));
            SetCurrentAns(shuffleArray(Array.from(listQuestion[count].key)));
        }
        
    }, [count]);

    useMemo(() => {
        if(userGuess[count]) {
            userGuess[count].findIndex(e => e==='') <0 && checkCurrentAns();
        }
    }, [userGuess]);

    useMemo(() => {
        if(listQuestion.length !==0) {
            SetResult({
                game: listQuestion.map(e => (
                    {
                        ...e,
                        guess: '',
                        iscorrect: false,
                        points: 0
                    }
                ))
            })
        }
    }, [listQuestion.length])

    useEffect(() => {
        getList();
        localStorage.clear()
    }, []);


  return (
    <>
    
        {
            listQuestion.length!==0

            ? <GameWrap>

                <QuestionWrap>

                    <QuestionBtns>
                        {
                            Array.from(currentAns).map((e, idx) => {
                                if(userGuess[count].filter(element => (element.key === e && element.pos === idx) ).length !== 0) {
                                    return (
                                    <button
                                        disabled={true}
                                    ></button>)
                                }
                                return <button
                                        onClick={event => handleClickBtnAns(event, idx)}
                                        value={e}
                                    >{e.toUpperCase()}</button>
                            } )
                        }
                    </QuestionBtns>

                    <QuestionImage>
                        <img alt='img' src={listQuestion[count].img}></img>
                    </QuestionImage>

                </QuestionWrap>

                <AnswereBtns>
                    {
                            Array.from(currentAns).map((e, index) => (
                                userGuess[count][index]

                                ? <button
                                    onClick={event => handleClickBtnGuess(event, index)}
                                    value={userGuess[count][index].key}
                                >{userGuess[count][index].key.toUpperCase()}</button>

                                :<button
                                    disabled={true}
                                ></button>
                            ))
                    }
                </AnswereBtns>

                <GiveUpWrap>

                    <div>
                        <button onClick={giveUp}>Give Up</button>
                    </div>

                </GiveUpWrap>

                {
                        show &&  (        
                        <PopupWrap>

                            <PopupWrapMain>
                                <PopupInfo>

                                    <div>
                                        <p className={results.game[count].iscorrect ? "Correct" : "Wrong"}>
                                            {results.game[count].iscorrect ? "Correct" : "Wrong"}
                                        </p>
                                    </div>

                                    <div>
                                        <p><b>Points: </b>{results.game[count].points}</p>
                                        <p><b>Answere: </b>{listQuestion[count].key.toUpperCase()}</p>
                                    </div>
                                    
                                </PopupInfo>
                            
                    
                                <PopupBtn>
                                    {
                                        count+1 !== 5 
                                        ? <button onClick={increaseCount}>Continue</button> 
                                        : <button onClick={handleCLickToEnd}>Result</button> 
                                    }
                                </PopupBtn>                                
                            </PopupWrapMain>

                        </PopupWrap>)
                }

            </GameWrap>

            :<div>
                <p>Nothing</p>
            </div>
        }
    
    </>
  )
}