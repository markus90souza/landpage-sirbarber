import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['gray-100']};

  iframe {
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0;
  }
`
export const LocationWrapper = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding-top: 96px;
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

    span {
      display: flex;
      align-items: center;

      gap: 1rem;
      font-size: 20px;
      font-weight: 400;

      address {
        font-family: 'Epilogue', sans-serif;
        font-style: normal;
        font-family: ${({ theme }) => theme.colors['black-700']};
      }
    }
  }
`
