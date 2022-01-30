import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `photo-grid__delete-button ${isOwn ? 'photo-grid__delete-button_visible' : 'photo-grid__delete-button_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (`photo-grid__like-button ${isLiked ? 'photo-grid__like-button_activ' : ''}`);

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <li className="photo-grid__element">
            <figure className="photo-grid__figure">
                <img src={props.card.link} alt={props.card.name} className="photo-grid__image" onClick={handleClick} />
                <button type="button" className={cardDeleteButtonClassName} aria-label="Удалить" onClick={handleDeleteClick}></button>
                <figcaption className="photo-grid__group">
                    <h2 className="photo-grid__caption">{props.card.name}</h2>
                    <div className="photo-grid__like-group">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                        <span className="photo-grid__like-count">{props.card.likes.length}</span>
                    </div>
                </figcaption>
            </figure>
        </li>
    );
}

export default Card;