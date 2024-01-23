import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='quizContainer'>
        <div className='quizBox'>
            <h1>Question</h1>
            <p>{this.props.currentQuestion + 1} of 15</p>
            <h3>{this.props.QuizData["question"]}</h3>

            <div className='options'>
                <div onClick={(e) => {this.props.checkAnswer(e,this.props.QuizData["answer"])}} className="choices">{this.props.QuizData["optionA"]}</div>
                <div onClick={(e) => {this.props.checkAnswer(e,this.props.QuizData["answer"])}} className="choices">{this.props.QuizData["optionB"]}</div>
                <div onClick={(e) => {this.props.checkAnswer(e,this.props.QuizData["answer"])}} className="choices">{this.props.QuizData["optionC"]}</div>
                <div onClick={(e) => {this.props.checkAnswer(e,this.props.QuizData["answer"])}} className="choices">{this.props.QuizData["optionD"]}</div>   
            </div>

            <div className='controls'>
                <div onClick={this.props.previous} className="controlButtons previous">previous</div>
                <div onClick={this.props.next} className="controlButtons next">next</div>
                <div onClick={this.props.quit} className="controlButtons quit">quit</div>
            </div>

        </div>
      </div>
    )
  }
}
