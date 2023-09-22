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
  height: 60%;
  background: ${({ theme }) => theme.colors.white};
`
