import styled from 'styled-components'

export const GameResultBgContainer = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 400px;
  }
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const GameResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameResultText = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Bree Serif';
  font-weight: bold;
`
export const GameResultImage = styled.img`
  width: 215px;
  height: 215px;

  @media screen and (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`

export const GameResultValue = styled.h2`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
`
export const CustomButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  text-align: center;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  padding: 7px 18px 7px 18px;
  border-radius: 10px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
`
