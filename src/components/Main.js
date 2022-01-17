import React from 'react';
import api from './../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitial().then((data) => {
            const [userData, cardsData] = data;
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cardsData);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container-info">
                    <img src={userAvatar} alt={userName} className="profile__avatar" />
                    <button className="profile__avatar-edit-btn" aria-label="Редактировать фотографию профиля" onClick={props.onEditAvatar}></button>
                    <div className="profile__edit">
                        <div className="profile__info">
                            <h1 className="profile__name">{userName}</h1>
                            <p className="profile__job">{userDescription}</p>
                        </div>
                        <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    </div>
                </div>
                <button type="submit" className="profile__add-button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__elements">
                    {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick} onClick={props.onClick}/>)}
                </ul>
            </section>
        </main>
    );
}

export default Main;