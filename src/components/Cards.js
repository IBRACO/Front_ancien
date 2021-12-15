import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';
import '../App.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Découvrez ces destinations en bas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Les Services et les Objectif de EAST AFRICA SPORT DE LILLE'
              label='Nos services'
              path='/services'
            />
            {/* <CardItem
              src='images/img-2.jpg'
              text='Activites et Evenements'
              label='Qui Sommes Nous'
              // path='/QuiSommesNous'
            /> */}
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Faire un don à EASL'
              label='Espace Don'
              path='/don'
            />
            <CardItem
              src='images/img-4.jpg'
              text="Activites sportif"
              label='Entrainement'
              path='/entrainement'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='connexion'
              path='/connexion'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;