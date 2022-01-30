import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const avatar = React.useRef({});

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatar.current.value,/* Значение инпута, полученное с помощью рефа */
        });
    }

    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            title="Обновить аватар"
            name="avatar"
            isOpen={props.isOpen}
            onClose={props.onClose}
            ariaLabel="Создать"
            buttonText="Создать">
            <input ref={avatar} type="url" name="avatar" id="avatar-link" placeholder="Ссылка на картинку" className="form__text" minLength="2" required />
            <span className="form__input-error" id="avatar-link-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;