
export default function RecipeForm() {
    return (
        <div className="card text-center bg-light mt-5">
            <div className="card-header bg-warning-subtle">
                <h2>Recipe Form</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title mb-3">Add your recipe</h5>

                <form className="row g-3">
                    <div className="row-sm-2 mb-3">
                        {/* select */}
                        <div className="col-md-2 mb-3">
                            <select className="form-select conta" aria-label="Default select example">
                                <option value='' disabled>Type of meal</option>
                                <option value="1">Breakfast</option>
                                <option value="2">Lunch</option>
                                <option value="3">Dinner</option>
                                <option value="4">Snack</option>
                                <option value="5">Dessert</option>
                                <option value="6">Drink</option>
                                <option value="7">Appetizer</option>
                                <option value="8">Side</option>

                            </select>
                        </div>

                        {/* file */}
                        <div className="col-md-3">
                            <div className="mb-6">
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Recipe Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder='Recipe Name' />
                    </div>

                    {/* Ingredients */}
                    <div className="col-md-6">
                        <label htmlFor="inputIngredients" className="form-label">Ingredients</label>
                        <input type="text" className="form-control" id="inputIngredients" placeholder='Put a comma after each ingredient' />
                    </div>

                    {/* Instructions */}
                    <div className="col-12">
                        <label htmlFor="inputInstruction" className="form-label">Instructions</label>
                        <textarea className="form-control" id="inputInstructions" placeholder='Instructions'></textarea>
                    </div>

                    {/* button */}
                    <div className="col-12">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}