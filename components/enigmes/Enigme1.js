import React, { Component } from 'react';
import {isBrowser} from 'react-device-detect';

// import '../../sass/components/_reset.scss';
import '../../sass/components/_LayoutEnigmes.scss';
import '../../sass/components/_cta.scss';
import Time from '../../img/time.svg';
import Oursoupidou from '../../img/oursoupisearch.png';
import LayoutEnigmeCta from '../Layout/Enigmes/LayoutEnigmeCta';
import LayoutEnigmeText from '../Layout/Enigmes/LayoutEnigmeText';

class Enigme1 extends Component {
    renderContent = () => {
        if (isBrowser) {
            return <div>Bonjour vous êtes sur navigateur, pour voir l'app veuillez consulter la page sur un tel wesh</div>
        }
        return <div>
        <section id="timmer">
            <img src={Time} alt="timmer"/>
            <p>9:43</p>
        </section>

        <section>
            <img src={Oursoupidou} alt="Oursoupidou"/>
        </section>

        <section>
            <LayoutEnigmeText name="<b>Un produit n’est pas dans son rayon habituelle</b>,</br>on dirait presque qu’il a été déplacé volontairement !</br></br>C’est peut-être une première piste, <b>quel est le produit</b> ?"/>
        </section>

        <section>
            <div>
                <LayoutEnigmeCta name="J'ai trouvé" title="hello" className="unfilled" url="#concept"/>
                <br></br>
                <LayoutEnigmeCta name="Indice" title="hello" className="filled" url="#concept"/>
            </div>
        </section>

        <section><p>prog bar</p></section>
    </div>
    }

    render(){
        return this.renderContent();
    }
}

export default Enigme1