import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'
import GameResultView from '../GameResultView'
import {
  GameBgContainer,
  GameContainer,
  CardContainer,
  ChoicesListContainer,
  ChoiceItem,
  ChoiceItemButton,
  ChoiceItemImage,
  RulesButton,
  ModalContainer,
  WrongButton,
  ModalImage,
} from './styledComponents'

const gameStatusConstants = {
  playing: 'PLAYING',
  completed: 'COMPLETED',
}

const gameResults = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
}

class RockPaperScissor extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.playing,
    yourImage: null,
    opponentImage: null,
    gameResult: null,
  }

  getAltText = () => {
    const altTextList = ['rockButton', 'scissorsButton', 'paperButton']
    altTextList.map(item => {
      return item
    })
  }

  calculateResult = (yourChoice, opponentChoice) => {
    if (yourChoice === opponentChoice) {
      return 'IT IS DRAW'
    } else if (
      (yourChoice === gameResults.rock &&
        opponentChoice === gameResults.scissors) ||
      (yourChoice === gameResults.paper &&
        opponentChoice === gameResults.rock) ||
      (yourChoice === gameResults.scissors &&
        opponentChoice === gameResults.paper)
    ) {
      return 'YOU WON'
    } else {
      return 'YOU LOSE'
    }
  }

  handleChoiceClick = choiceId => {
    const {choicesList} = this.props
    const {score} = this.state
    const userSelected = choicesList.find(choice => choice.id === choiceId)
    const opponentSelected =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const gameResultValue = this.calculateResult(choiceId, opponentSelected.id)
    let updatedScore = score

    if (gameResultValue === 'YOU WON') {
      updatedScore += 1
    } else if (gameResultValue === 'YOU LOSE') {
      updatedScore -= 1
    }

    this.setState({
      score: updatedScore,
      yourImage: userSelected.imageUrl,
      opponentImage: opponentSelected.imageUrl,
      gameStatus: gameStatusConstants.completed,
      gameResult: gameResultValue,
    })
  }

  choiceItem = item => {
    const {id, imageUrl} = item
    return (
      <ChoiceItem key={id}>
        <ChoiceItemButton
          type="button"
          data-testid={this.getAltText()}
          onClick={() => this.handleChoiceClick(id)}
        >
          <ChoiceItemImage src={imageUrl} alt="your choice" />
        </ChoiceItemButton>
      </ChoiceItem>
    )
  }

  playAgain = () => {
    this.setState({
      gameStatus: gameStatusConstants.playing,
      yourImage: null,
      opponentImage: null,
      gameResult: null,
    })
  }

  renderGameResultView = () => {
    const {yourImage, opponentImage, gameResult} = this.state
    const result = {
      yourImage,
      opponentImage,
      gameResult,
    }
    return <GameResultView result={result} playAgain={this.playAgain} />
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    const {choicesList} = this.props
    switch (gameStatus) {
      case gameStatusConstants.playing:
        return (
          <CardContainer>
            <ChoicesListContainer>
              {choicesList.map(item => this.choiceItem(item))}
            </ChoicesListContainer>
          </CardContainer>
        )
      case gameStatusConstants.completed:
        return <CardContainer>{this.renderGameResultView()}</CardContainer>
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <GameBgContainer>
        <GameContainer>
          <Header score={score} />
          {this.renderGameView()}
          <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
            {close => (
              <ModalContainer>
                <WrongButton type="button" onClick={() => close()}>
                  <RiCloseLine width={70} height={50} />
                </WrongButton>
                <ModalImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModalContainer>
            )}
          </Popup>
        </GameContainer>
      </GameBgContainer>
    )
  }
}

export default RockPaperScissor
