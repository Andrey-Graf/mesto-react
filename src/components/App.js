import React from 'react';
import Header from './Header';
import Main from './Main';
import Footet from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(!isImagePopupOpen)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }



    return (
        <div className="root">
            <div className="popup popup-confirm">
                <div className="popup__container">
                    <h3 className="popup__title">Вы уверены ?</h3>
                    <form className="form confirm-form" name="confirm" noValidate>
                        <fieldset className="form__set">
                            <button type="reset" className="popup__button-save">Да</button>
                        </fieldset>
                    </form>
                    <button type="button" className="popup__button-close popup__button-close_add_form"></button>
                </div>
            </div>
            <Header />
            <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
            <Footet />
            <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input type="text" name="name" id="profile-name" placeholder="Введите имя" className="form__text form__text_type_name" defaultValue="Жак-Ив Кусто" minLength="2" maxLength="40" required />
                <span className="form__input-error" id="profile-name-error"></span>
                <input type="text" name="about" id="profile-job" placeholder="Введите профессию" className="form__text form__text_type_job" defaultValue="Иследователь океана" minLength="2" maxLength="200" required />
                <span className="form__input-error" id="profile-job-error"></span>
                <button type="submit" className="popup__button-save" aria-label="Сохранить">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input type="text" name="name" id="photo-name" placeholder="Название" className="form__text" minLength="2" maxLength="30" required />
                <span className="form__input-error" id="photo-name-error"></span>
                <input type="url" name="link" id="photo-link" placeholder="Ссылка на картинку" className="form__text" minLength="2" required />
                <span className="form__input-error" id="photo-link-error"></span>
                <button type="submit" className="popup__button-save" aria-label="Создать">Создать</button>
            </PopupWithForm>
            <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input type="url" name="avatar" id="avatar-link" placeholder="Ссылка на картинку" className="form__text" minLength="2" required />
                <span className="form__input-error" id="avatar-link-error"></span>
                <button type="submit" className="popup__button-save" aria-label="Создать">Создать</button>
            </PopupWithForm>
            <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups}  card={selectedCard} />
        </div>
    );
}


export default App;