import React from "react";


function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="photo-grid__element">
            <figure className="photo-grid__figure">
                <img src={`${props.card.link}`} alt={`${props.card.name}`} className="photo-grid__image" onClick={handleClick}/>
                <button type="button" className="photo-grid__delete-button" aria-label="Удалить"></button>
                <figcaption className="photo-grid__group">
                    <h2 className="photo-grid__caption">{props.card.name}</h2>
                    <div className="photo-grid__like-group">
                        <button type="button" className="photo-grid__like-button"></button>
                        <span className="photo-grid__like-count">{props.card.likes.length}</span>
                    </div>
                </figcaption>
            </figure>
        </li>
    );
}

export default Card;