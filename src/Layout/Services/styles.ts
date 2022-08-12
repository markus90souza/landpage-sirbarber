import styled from 'styled-components'

export const ServicesContainer = styled.section`
  padding: 96px 72px;
`

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;

  header {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
      color: ${({ theme }) => theme.colors['black-700']};
      font-weight: 700;
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors['red-500']};
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`

export const ServicesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`
