import React from "react";

function ImagePopup(props) {
    return (
        <div className={`popup popup-photo ${props.card && props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup-photo__container">
                <figure className="popup-photo__figure">
                    <img src={`${props.card.link}`} alt={`${props.card.name}`} className="popup-photo__image" />
                    <figcaption className="popup-photo__caption">{props.card.name}</figcaption>
                    <button type="button" className="popup__button-close popup__button-close_photo_form" aria-label="Закрыть фотографию" onClick={props.onClose}></button>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup;