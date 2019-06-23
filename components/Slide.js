import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import '../sass/components/_reset.scss';
import '../sass/components/_Swiper.scss';
import '../sass/components/_cta.scss';

import Concept from '../img/yunt-concept.png';
import Progression from '../img/yunt-progression.png';
import Recompense from '../img/yunt-recompenses.png';
import BotImage from '../img/oursoupidou.png';

export default class Default extends Component {
  render() {
    return (
      <Swiper>
        {/* <SlideLayout image={img1} title="coucouc" description="lorem"/> */}

        <div>
            <img src={Concept} alt="Concept"/>
            <h2>Concept</h2>
            <p>Participez à un <b>escape game dans nos magasins partenaires</b> partout en <b>France</b> et <b>gagnez de nombreuses récompenses.</b></p>
            <a href="Niveau.js">Passer l'introduction</a>
        </div>

        <div>
            <img src={Progression} alt="Progression"/>
            <h2>Progression</h2>
            <p><b>Choisissez</b> votre niveau de difficulté, <b>surmontez</b> les épreuves et <b>évoluez</b> pour <b>gagner davantage de lots.</b></p>
            <a href="slide.js">Passer l'introduction</a>
        </div>

        <div>
            <img src={Recompense} alt="Recompense"/>
            <h2>Récompenses</h2>
            <p>( On sait que c’est ce qui t’intéresse )<b>Un pourcentage de réduction</b> en fonction du temps impartis dans <b>nos magasins partenaires !</b></p>
            <a href="slide.js">Passer l'introduction</a>
        </div>

        <div>
            <img src={BotImage} alt="Oursoupidou"/>
            <h2>Oursoupidou</h2>
            <p>Bonjour, <b>je suis Oursoupidou</b> ! Je te <b>conseillerai</b> durant ton parcours ici, si tu as <b>une question</b> ou <b>besoin d’indices</b>, n’hésites pas !</p>
            <a href="slide.js" className="btn-unfilled">Commencer l'aventure</a>
            <a href="slide.js">Passer l'introduction</a>
        </div>      
      </Swiper>
    )
  }
}