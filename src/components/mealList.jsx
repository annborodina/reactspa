import {Link} from "react-router-dom"

function MealList({meals}){
    return(
        <div className="list">
            {meals.map((el) => (
                <div className="card" key = {el.idMeal}>
                    <div className="card-image">
                        <img src = {el.strMealThumb} alt = {el.strMeal}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{el.strMeal}</span>
                    </div>
                    <div className="card-action">
                        <Link to = {`/meal/${el.idMeal}`} className = "btn light-green darken-2">
                            Watch recipe
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export {MealList}