import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'
import  Questions  from './../resources/quizQuestion.json'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

      HomeComponent:true,
      QuizComponent:false,
      ResultComponent:false,
      score: 0,
      currentQuestion: 0,
      attempted:0
    }
  }
  
  toggleStartQuiz = () => {
    this.setState({
      HomeComponent:false,
      QuizComponent:true,
    })
  }

  toggleNextQuestion = () => {
    if(this.state.currentQuestion < Questions.length -1){
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })
  }
  console.log(this.state)
  this.resultPopUp()
  
}

  togglePreviousQuestion = () => {
    if(this.state.currentQuestion === 0) return
    else if(this.state.currentQuestion >0 ){
    this.setState({
      currentQuestion: this.state.currentQuestion - 1
    })
  }
  }

  toggleQuit = () =>{
    this.setState({
      HomeComponent:false,
      QuizComponent:false,
      ResultComponent:true,
    })

    alert("You have quit the quiz")
  }

  quizReset = () =>{
    this.setState({
      currentQuestion:0,
      score:0,
      attempted:0,
      HomeComponent:true,
      QuizComponent:false,
      ResultComponent:false,
    })
  }

  playAgain = () =>{
    this.setState({
      currentQuestion:0,
      score:0,
      attempted:0,
      QuizComponent:true,
      ResultComponent:false
    })
  }

  checkAnswer = (e,ans) =>{
    e.target.innerText == ans ? this.setState({score: this.state.score + 1}) : null
    this.toggleNextQuestion()
    this.resultPopUp()
    this.setState({attempted : this.state.attempted + 1})
  }

  resultPopUp = () =>{
    if(this.state.currentQuestion == Questions.length -1 ){
      this.setState({
        HomeComponent:false,
        QuizComponent:false,
        ResultComponent:true,
      })
    }
  }


  render(){
  return (
    <>
      {this.state.HomeComponent ? <HomeComponent toggle={this.toggleStartQuiz} />: null}

      {this.state.QuizComponent ? <QuizComponent 
      currentQuestion = {this.state.currentQuestion}
      QuizData = {Questions[`${this.state.currentQuestion}`]} 
      next = {this.toggleNextQuestion}
      previous = {this.togglePreviousQuestion}
      quit = {this.toggleQuit}
      checkAnswer = {this.checkAnswer}
      />: null}
      
      {this.state.ResultComponent ? <ResultComponent 
      Result = {this.state.score}
      Attempted = {this.state.attempted}
      QuizReset={this.quizReset}
      PlayAgain={this.playAgain}
      />: null}

    </>
      )
    }
  }


export default App
