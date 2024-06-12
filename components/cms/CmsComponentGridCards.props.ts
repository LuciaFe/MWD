import type { CardProps } from '../molecules/MoleculesCard.props'

export type CMSGridCardsProps = {
  cards: {
    ComponentCard_id: {
      Image: string
      id: number
      name: string
      title: string
      username: string
    }
  }[]
}
