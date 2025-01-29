import MyButton from "../myButton/MyButton";

function UserCard ({name,age, surname}) {




    // * функция обработчик, часто названия функции,  которые обрабатывают внутри компонента что-то начинаются с handle
const handleClick = () => {
alert(`Salam, ${name}`)
}

    return (
        <div>
            <p>Name: {name} </p>
            <p>Age: {age}</p>
            <p>Surname: {surname}</p>
            <MyButton func= {handleClick} text = {`Choose ${name}`}/>
        </div>
    )
}

export default UserCard;