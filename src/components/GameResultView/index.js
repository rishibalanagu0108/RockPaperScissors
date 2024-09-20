import {
  GameResultContainer,
  GameResultItem,
  GameResultText,
  GameResultImage,
  GameResultBgContainer,
  GameResultValue,
  CustomButton,
} from './styledComponents'

const GameResultView = props => {
  const {result, playAgain} = props
  const {yourImage, opponentImage, gameResult} = result

  return (
    <GameResultBgContainer>
      <GameResultContainer>
        <GameResultItem>
          <GameResultText>YOU</GameResultText>
          <GameResultImage src={yourImage} alt="your choice" />
        </GameResultItem>
        <GameResultItem>
          <GameResultText>OPPONENT</GameResultText>
          <GameResultImage src={opponentImage} alt="opponent choice" />
        </GameResultItem>
      </GameResultContainer>
      <GameResultValue>{gameResult}</GameResultValue>
      <CustomButton type="button" onClick={playAgain}>
        PLAY AGAIN
      </CustomButton>
    </GameResultBgContainer>
  )
}

export default GameResultView
