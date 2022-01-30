import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container-info">
                    <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
                    <button className="profile__avatar-edit-btn" aria-label="Редактировать фотографию профиля" onClick={props.onEditAvatar}></button>
                    <div className="profile__edit">
                        <div className="profile__info">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <p className="profile__job">{currentUser.about}</p>
                        </div>
                        <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    </div>
                </div>
                <button type="submit" className="profile__add-button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__elements">
                    {props.cards.map((card) =>
                        <Card key={card._id}
                            card={card}
                            onCardClick={props.onCardClick}
                            onCardDelete={props.onCardDelete}
                            onCardLike={props.onCardLike} />)}
                </ul>
            </section>
        </main>
    );
}

export default Main;