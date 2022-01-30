import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopupOpen from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const [cardDelet, setCardDelet] = React.useState({});

    // Общая функция закрытия попап.
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

    function handleConfirmClick(card) {
        setCardDelet(card)
        setIsConfirmPopupOpen(!isConfirmPopupOpen)
    }

    React.useEffect(() => {
        api.getInitial().then((data) => {
            const [userData, cardData] = data;
            setCurrentUser(userData);
            setCards(cardData);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    // Функци обновления данных пользователя.
    function handleUpdateUser(data) {
        api.setUserInfo(data).then((data) => {
            setCurrentUser(data);
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        })
    }
    // Функция обновить аватар.
    function handleUpdateAvatar(data) {
        api.setUserAvatar(data).then((data) => {
            setCurrentUser(data);
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        })
    }

    // Функция открытия попап с фотографией.
    function handleCardClick(card) {
        setSelectedCard(card);
        setIsImagePopupOpen(!isImagePopupOpen)
    }

    // Функция like/disLike.
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch((err) => {
            console.log(err);
        })
    }

    //Функция удаления карточки.
    function handleCardDelete(evt) {
        evt.preventDefault();
        api.deleteCard(cardDelet).then(() => {
            const newCard = cards.filter((elem) => elem !== cardDelet);
            setCards(newCard);
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        })
    }

    function handleAddPlaceSubmit(data) {
        api.postCard(data).then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
        })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main cards={cards}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardDelete={handleConfirmClick}
                onCardLike={handleCardLike}
            />
            <Footer />
            <EditProfilePopupOpen
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser} />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit} />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar} />
            <PopupWithForm onSubmit={handleCardDelete} title="Вы уверены ?" name="confirm" isOpen={isConfirmPopupOpen} onClose={closeAllPopups} ariaLabel="Да" buttonText="Да" />
            <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />
        </CurrentUserContext.Provider>
    );
}


export default App;