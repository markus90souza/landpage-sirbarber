import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['black-700']};
`
export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled(Image)``

export const FooterBrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  p {
    color: ${({ theme }) => theme.colors['gray-100']};
  }
`

export const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`

export const SocialLink = styled(Link)`
  padding: 13px;
  cursor: pointer;
  display: inline-block;
  background-color: bisque;
  a:hover {
    background-color: red;
  }
`
