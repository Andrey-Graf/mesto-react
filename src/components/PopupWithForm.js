import React from 'react';

function PopupWithForm(props) {

    return (
        <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h3 className="popup__title">{props.title}</h3>
                <form className="form" name={props.name} noValidate>
                    <fieldset className="form__set">
                        {props.children}
                    </fieldset>    
                </form>
                <button type="button" className="popup__button-close popup__button-close_edit_form" aria-label="Закрыть попап" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;