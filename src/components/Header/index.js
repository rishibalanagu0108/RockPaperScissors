import {
  HeaderContainer,
  HeaderContent,
  HeaderElement,
  ScoreContainer,
  ScoreName,
  ScoreValue,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderElement>Rock Paper Scissors</HeaderElement>
      </HeaderContent>
      <ScoreContainer>
        <ScoreName>Score</ScoreName>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
