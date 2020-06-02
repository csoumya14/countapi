import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {
    
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
    
  }
  `
