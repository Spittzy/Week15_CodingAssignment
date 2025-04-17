// import ItemCard from "./itemCard"
// }
import type { Recipe } from "./types"
import { useState, useEffect, use } from "react"

type DisplayItemProps = {
    card: Recipe
    isSelected: boolean



}
export default function DisplayItem({ card, isSelected }: DisplayItemProps) {
    const [isExpanded, setIsExpanded] = useState(false) //state variable

    useEffect(() => {
        setIsExpanded(isSelected);
    }
        , [isSelected]) //useEffect to update isExpanded when isSelected changes

    return (
        isExpanded ? (
            <div className="collapse collapse-horizontal mt-3 show w-100" id="collapseWidthExample">
                <div className="card card-body gap-2">
                    <div className="row">
                        <div className="col">
                            <h3> {card.recipeName}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-2">
                            <ul className="list-group list-group-flush ms-3">
                                {card.ingredents.map((ingredent, i) => <li key={i}>{ingredent}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {card.instruction}
                        </div>
                    </div>
                </div>
            </div>
        ) : null

    )
}