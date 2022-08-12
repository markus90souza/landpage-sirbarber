import { ServiceCard } from './ServiceCard'
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCardContainer,
} from './styles'

import card1 from '@assets/images/card-01.png'
import card2 from '@assets/images/card-02.png'
import card3 from '@assets/images/card-03.png'

const services = [
  {
    id: 1,
    cover: card1,
    name: 'Corte de cabelo',
    description: 'Cortes profissionais e modernos para valorizar seu estilo.',
  },
  {
    id: 2,
    cover: card2,
    name: 'Barba aparada',
    description:
      'Dê uma bela forma pra sua barba com nossos cuidados especiais.',
  },
  {
    id: 3,
    cover: card3,
    name: 'Lavagem',
    description: 'Cuide da limpeza da sua cabeça com produtos exclusivos.',
  },
]

export function Services() {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <header>
          <h3>NOSSOS SERVIÇOS</h3>
          <h2>Veja o que fazemos de melhor</h2>
        </header>

        <ServicesCardContainer>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              cover={service.cover}
              name={service.name}
              description={service.description}
            />
          ))}
        </ServicesCardContainer>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
