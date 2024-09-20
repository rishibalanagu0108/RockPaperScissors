import styled from 'styled-components'

export const GameBgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 30px;
`
export const GameContainer = styled.div`
  max-width: 1100px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottm: 30px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
`
export const ChoicesListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
  margin: 0px;

  @media screen and (max-width: 767px) {
    width: 400px;
    height: 400px;
  }
`
export const ChoiceItem = styled.li`
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
`
export const ChoiceItemButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ChoiceItemImage = styled.img`
  width: 285px;
  height: 285px;

  @media screen and (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`
export const RulesButton = styled.button`
  align-self: flex-end;
  background-color: #ffffff;
  color: #223a5f;
  text-align: center;
  border-radius: 5px;
  border-width: 0px;
  padding: 7px 15px 7px 15px;
  cursor: pointer;
  outline: none;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: #ffffff;
`
export const WrongButton = styled.button`
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

`
export const ModalImage = styled.img`
  width: 400x;
  height: 400px;
`
