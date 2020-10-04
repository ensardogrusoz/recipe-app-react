import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,theRecipe}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <p>calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>

            <a href={theRecipe}>get recipe</a>
            
        </div>
    );
}

export default Recipe;