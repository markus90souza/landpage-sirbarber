import { WhatsappLogo } from 'phosphor-react'
import {
  HeroContainer,
  HeroWrapper,
  HeadlineContainer,
  ImageContainer,
  Headline,
  SubHeadline,
  WhatsappButton,
  Cover,
} from './styles'

import heroImage from '@assets/images/hero.png'

export function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeadlineContainer>
          <Headline>Uma nova experiência em barbearia</Headline>
          <SubHeadline>
            Experimente mudar totalmente sua maneira de ir ao barbeiro com
            inovação, bom atendimento e com certeza, muito estilo!
          </SubHeadline>

          <WhatsappButton>
            <WhatsappLogo size={20} />
            AGENDAR HORÁRIO
          </WhatsappButton>
        </HeadlineContainer>
        <ImageContainer>
          <Cover src={heroImage} />
        </ImageContainer>
      </HeroWrapper>
    </HeroContainer>
  )
}
