import {Link} from "react-router-dom"

function CategoryList({catalog = []}){

    return(
        <div className="list">
            {catalog.map((el) => (
                <div className="card" key = {el.idCategory}>
                    <div className="card-image">
                        <img src = {el.strCategoryThumb} alt = {el.strCategory}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{el.strCategory}</span>
                        <p>{el.strCategoryDescription.slice(0, 60)}...</p>
                    </div>
                    <div className="card-action">
                        <Link to = {`/category/${el.strCategory}`} className = "btn light-green darken-2">
                            Watch category
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export {CategoryList}