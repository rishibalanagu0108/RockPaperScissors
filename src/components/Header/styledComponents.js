import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderElement = styled.h1`
  color: #ffffff;
  font-size: 28px;
  font-family: 'Bree Serif'
  font-weight: bold;
  margin-bottom: 2px;
  margin-top: 2px;
`
export const ScoreContainer = styled(HeaderContent)`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 7px 35px 7px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreName = styled.p`
  color: #223a5f;
  font-size: 28px;
  font-family: 'Bree Serif';
  font-weight: 700;
  margin-top: 1px;
  margin-bottom: 0px;
`

export const ScoreValue = styled.p`
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 900;
  color: #223a5f;
  margin-top: 1px;
  margin-bottom: 1px;
`
