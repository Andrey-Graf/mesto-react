import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const name = React.useRef([]);
    const link = React.useRef([]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name: name.current.value,
            link: link.current.value,
        });
    }


    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            title="Новое место"
            name="add"
            isOpen={props.isOpen}
            onClose={props.onClose}
            ariaLabel="Создать"
            buttonText="Создать">
            <input ref={name} type="text" name="name" id="photo-name" placeholder="Название" className="form__text" minLength="2" maxLength="30" required />
            <span className="form__input-error" id="photo-name-error"></span>
            <input ref={link} type="url" name="link" id="photo-link" placeholder="Ссылка на картинку" className="form__text" minLength="2" required />
            <span className="form__input-error" id="photo-link-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;