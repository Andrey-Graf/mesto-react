import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

    function handleCardClick(card) {
        setSelectedCard(card);
        setIsImagePopupOpen(!isImagePopupOpen)
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsConfirmPopupOpen(false);
        setIsImagePopupOpen(false);
        setSelectedCard({});
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleConfirmClick() {
        setIsConfirmPopupOpen(!isConfirmPopupOpen)
    }


    return (
        <div className="root">
            <Header />
            <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onClick={handleConfirmClick} />
            <Footer />
            <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} ariaLabel="Сохранить" buttonText="Сохранить">
                <input type="text" name="name" id="profile-name" placeholder="Введите имя" className="form__text form__text_type_name" defaultValue="Жак-Ив Кусто" minLength="2" maxLength="40" required />
                <span className="form__input-error" id="profile-name-error"></span>
                <input type="text" name="about" id="profile-job" placeholder="Введите профессию" className="form__text form__text_type_job" defaultValue="Иследователь океана" minLength="2" maxLength="200" required />
                <span className="form__input-error" id="profile-job-error"></span>
            </PopupWithForm>
            <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} ariaLabel="Создать" buttonText="Создать">
                <input type="text" name="name" id="photo-name" placeholder="Название" className="form__text" minLength="2" maxLength="30" required />
                <span className="form__input-error" id="photo-name-error"></span>
                <input type="url" name="link" id="photo-link" placeholder="Ссылка на картинку" className="form__text" minLength="2" required />
                <span className="form__input-error" id="photo-link-error"></span>
            </PopupWithForm>
            <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} ariaLabel="Создать" buttonText="Создать">
                <input type="url" name="avatar" id="avatar-link" placeholder="Ссылка на картинку" className="form__text" minLength="2" required />
                <span className="form__input-error" id="avatar-link-error"></span>
            </PopupWithForm>
            <PopupWithForm title="Вы уверены ?" name="confirm" isOpen={isConfirmPopupOpen} onClose={closeAllPopups} ariaLabel="Да" buttonText="Да" />
            <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups}  card={selectedCard} />
        </div>
    );
}


export default App;