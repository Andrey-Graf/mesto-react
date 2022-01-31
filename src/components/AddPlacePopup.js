import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState([]);
    const [link, setLink] = React.useState([]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name,
            link,
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
            <input value={name} onChange={handleNameChange} type="text" name="name" id="photo-name" placeholder="Название" className="form__text" minLength="2" maxLength="30" required />
            <span className="form__input-error" id="photo-name-error"></span>
            <input value={link} onChange={handleLinkChange} type="url" name="link" id="photo-link" placeholder="Ссылка на картинку" className="form__text" minLength="2" required />
            <span className="form__input-error" id="photo-link-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;