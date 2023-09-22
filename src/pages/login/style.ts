import { theme } from '@/assets/styles/theme'
import styled from 'styled-components'

export const DivbottonLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  height: 100vh;
  width: 100vw;
`
export const DivLogin = styled.div`
  width: 40%;
  height: 90%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`
export const InpuntLogin = styled.input`
  width: 100%;
  border-radius: 25px;
  height: 29px;
  padding-left: 8px;
`

export const LabelLogin = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`
export const DivaAlignment = styled.div`
  width: 75%;
  height: 40px;
  margin: 3%;
`
export const Button = styled.button`
  background: ${({ theme }) => theme.colors.greenButton};
  color: ${({ theme }) => theme.colors.white};
  width: 75%;
  height: 35px;
  border-radius: 15px;
  margin-left: 10%;
`
