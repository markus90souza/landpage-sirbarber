import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 357px;
  min-height: 324px;
  background-color: ${({ theme }) => theme.colors['gray-100']};
`

export const Info = styled.div`
  padding: 2rem;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors['black-700']};
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors['black-700']};
  font-weight: 400;
  font-size: 1rem;
`

export const Cover = styled(Image)`
  background-size: contain;
`
