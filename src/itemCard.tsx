import { useState } from 'react';
import Button from './button'
import DisplayItem from './displayItem'
import { Recipe } from './types';

type cardProp = {

    cards: Recipe
    isSelected: boolean
    onSelected: (id: number) => void
    deleteCard: (id: number) => void
    editCard: (id: number) => void

}


export default function ItemCard({ cards, onSelected, deleteCard, editCard, isSelected }: cardProp) {




    return (
        <div className='col-md-3 p-3'>
            <div className='container-fluid'>
                {/* if card is clicked on collapse Instructions */}
                <div className={`card-md-2 mb-5 ${isSelected ? 'border border-primary' : 'border-light'}`} id='recipeCard' onClick={() => {
                    onSelected(cards.id)

                }}>
                    {/* Img */}
                    <img src={cards.image} className="card-img-top rounded-top border-secondary" alt="Image of food"></img>

                    {/* recipe name */}
                    <div className="card-body m-2">
                        <h5 className="card-title">{cards.recipeName}</h5>

                    </div>
                    {/* buttons */}
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-3'>
                                <Button text='Edit' onClick={() => editCard(cards.id)} />
                            </div>
                            <div className='col-6'>
                                <Button text='Delete' onClick={() => deleteCard(cards.id)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* display Instructions */}
                <DisplayItem card={cards} isSelected={isSelected} />
            </div>
        </div>

    )
}