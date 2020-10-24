/*
  -- Component structure --

  App (stateful)
    *Introduction (page)
    *Personalitytest (page)
      Statementlist (44 statements)
        Statement
          Answerbuttons 
    *Results (page)
      Traitlist (5 traits)  
        Traitdescription
        Traitpercentage

  sitewide
    Button

  -- Explanation --
  The app consists of three main pages: Introduction, Personalitytest and Results. 
  App owns state and the state data flows up and down to answerbuttons, when the 
  user fills in the test. When the user is done, the Personalitytest component calls 
  the calculateResults function (in the logic folder) with the answers as argument 
  to finally show the results on the Results page. Button is the only component
  used in more than one page.
*/

import React, { useState } from 'react'
import './App.css'

import Introduction from './components/introduction/Introduction.js'
import Personalitytest from './components/personalitytest/Personalitytest.js'
import Results from './components/results/Results'

export default function App() {
  //initialize state
  const [answers, setAnswers] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0, 31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0  
  })

  const [page, setPage] = useState("intro")

  //functions to update state
  function updateAnswers( key, value ) {
    setAnswers(prevState => {
      return {...prevState, [key]: value}
    })
  } 

  function updatePage(page) {
    setPage(page);
  } 

  //the page state is used to render the pages conditionally
  return (
    <div id="app">
      {
        page === "intro" 
        ? <Introduction updatePage={updatePage} />
        : page === "test"
          ? <Personalitytest updatePage={updatePage} updateAnswers={updateAnswers} getAnswers={answers} />
          : <Results />
      } 
    </div>
  )
}
