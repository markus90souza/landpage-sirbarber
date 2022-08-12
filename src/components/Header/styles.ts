import Image from 'next/image'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['black-700']};
`
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  margin: 0 auto;
`
export const Brand = styled(Image)``

export const HeaderButton = styled.button`
  height: 3rem;
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors['gray-300']};
    border-color: ${({ theme }) => theme.colors['gray-300']};
  }
`
