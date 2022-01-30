import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopupOpen(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAboutChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            title="Редактировать профиль"
            name="edit"
            isOpen={props.isOpen}
            onClose={props.onClose}
            ariaLabel="Сохранить" 
            buttonText="Сохранить">
            <input value={name} onChange={handleNameChange} type="text" name="name" id="profile-name" placeholder="Введите имя" className="form__text form__text_type_name" minLength="2" maxLength="40" required />
            <span className="form__input-error" id="profile-name-error"></span>
            <input value={description} onChange={handleAboutChange} type="text" name="about" id="profile-job" placeholder="Введите профессию" className="form__text form__text_type_job" minLength="2" maxLength="200" required />
            <span className="form__input-error" id="profile-job-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopupOpen;