import ItemCard from './itemCard'

import type { Recipe } from "./types"
import { useState } from 'react'





type ItemListProps = {

    cards: Array<Recipe>
    selectedCardId: number
    setSelectedCardId: (newValue: number) => void
    deleteCard: (id: number) => void
    editCard: (id: number) => void


}

export default function ItemList({ cards, selectedCardId, setSelectedCardId, deleteCard, editCard }: ItemListProps) {
    const [isExpanded, setIsExpanded] = useState(false) //state variable


    const handleCardClick = (id: number) => {

        setIsExpanded(!isExpanded)
        setSelectedCardId(id)
    }
    // const handleCardClick = (id: number) => {
    //     setSelectedCard(id)
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                {/* <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.'); */}

                {cards.map(c => <ItemCard key={c.id} cards={c} onSelected={handleCardClick} isSelected={c.id === selectedCardId} deleteCard={deleteCard} editCard={editCard} />)}

            </div>
        </div>
    )
}