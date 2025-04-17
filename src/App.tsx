import Header from './header';
import ItemList from './itemList';
import RecipeForm from './Form';
import picture from './assets/practice.png'
import { useState } from 'react';
import { Recipe } from './types';

/*
*make a state variable
*add the ability to create new items in your app(not dynamic yet)
*add the ability to delete items in you app (make sure to the state to a copy of the array)
*ability to update items

*/
const TEST_RECIPES = [{
  id: 0,
  order: 1,
  image: picture,
  recipeName: 'Salmon',
  ingredents: ['yum', 'more yum'],
  instruction: 'The best Instructions'
},
{
  id: 1,
  order: 2,
  image: picture,
  recipeName: 'Salmon',
  ingredents: ['yum', 'more yum'],
  instruction: 'The best Instructions. The best instructions is always the best instructions. I love these instructions. weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
},
{
  id: 2,
  order: 3,
  image: picture,
  recipeName: 'Salmon',
  ingredents: ['yum', 'more yum'],
  instruction: 'The best Instructions'
},
{
  id: 3,
  order: 4,
  image: picture,
  recipeName: 'Salmon',
  ingredents: ['yum', 'more yum'],
  instruction: 'The best Instructions'
},
{
  id: 4,
  order: 5,
  image: picture,
  recipeName: 'Salmon',
  ingredents: ['yum', 'more yum'],
  instruction: 'The best Instructions'
},
{
  id: 5,
  order: 6,
  image: picture,
  recipeName: 'Salmon',
  ingredents: ['yum', 'more yum'],
  instruction: 'The best Instructions'
}

]

export default function App() {
  const [recipe, setRecipe] = useState<Recipe[]>(TEST_RECIPES)
  const [selectedCardId, setSelectedCardId] = useState(0)


  const addRecipeCard = () => {
    const newRecipe = {
      id: recipe.length,
      order: recipe.length,
      image: picture,
      recipeName: 'Somthing new',
      ingredents: ['yum', 'more yum'],
      instruction: 'The best Instructions'
    }
    setRecipe([...recipe, newRecipe])
  }

  const deleteRecipeCard = (idToDelete: number) => {
    setRecipe(recipe.filter(c => c.id !== idToDelete))
  }

  const editRecipeCard = (idToEdit: number) => {
    const updatedRecipe = recipe.map(c => {
      if (c.id === idToEdit) {
        return {
          ...c,
          recipeName: 'Updated Recipe Name',
          image: picture,
          ingredents: ['Updated Ingredient 1', 'Updated Ingredient 2', 'Updated Ingredient 3'],
          instruction: 'Updated Instructions'
        }
      }
      return c
    })
    setRecipe(updatedRecipe)
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />

      <div className='d-flex justify-content-center align-items-center flex-grow-1 m-5'>
        <RecipeForm />
        <button className='btn btn-danger' onClick={addRecipeCard}> TEST Add Recipe</button>
      </div>

      <div className='d-flex flex-grow-1'>
        <ItemList cards={recipe} selectedCardId={selectedCardId} setSelectedCardId={setSelectedCardId} deleteCard={deleteRecipeCard} editCard={editRecipeCard} />
      </div>

    </div >
  )
}