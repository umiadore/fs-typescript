// Создать компонент Coctail.tsx и отрисовать как минимум два ключа : - Название коктейля; Фото напитка https://www.thecocktaildb.com/api/json/v1/1/random.php

import MyButton from "../../myButton/MyButton";
import style from "./cocktail.module.css"
import { useEffect, useState } from "react";

// ИСпользовать useEffect   только для первой отрисовкi

export default function Cocktail ():JSX.Element {
    const [cocktailName, setCocktailName] = useState <string> ('');
const [cocktailImg, setCocktailImg] = useState <string> ('');


useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error is ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            const drink = data.drinks[0];
            setCocktailName(drink.strDrink);
            setCocktailImg(drink.strDrinkThumb);
        })
        .catch((err) => {
            console.error('Error:', err.message);
        });
}, []); // Empty dependency array to run only once
return (
    <div className={style.wrapper}>
    <h1>{cocktailName}</h1>
    {cocktailImg && <img src={cocktailImg} alt={cocktailName} />}
</div>
);


}