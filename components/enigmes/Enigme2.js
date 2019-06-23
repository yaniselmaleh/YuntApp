import React, { Component } from 'react'
// import '../../sass/components/_reset.scss'
import '../../sass/components/_test.scss'
import '../../sass/components/_cta.scss'
import Time from '../../img/time.svg';
import Oursoupidou from '../../img/oursoupisearch.png';

class Enigme2 extends Component {
    render(){
        return(
            <div>
                <section id="timmer">
                    <img src={Time} alt="timmer"/>
                    <p>9:43</p>
                </section>
                <section>
                    <img src={Oursoupidou} alt="Oursoupidou"/>
                </section>
                <section>
                    <p>
                        Bravo !
                        <br></br>
                        Malheureusement on ne peut pas en savoir plus car le <b>téléphone est vérouillé…</b>
                        <br></br>
                        <br></br>
                        Ah ! Je me souviens avoir vu un <b>téléphone qui émettait des signaux étranges.</b> Essaies de voir à <b>quoi ça pourrait correspondre</b>.
                    </p>
                </section>
                <section>
                    <div>
                    <a href="Niveau.js" className="btn-unfilled">J'ai trouvé</a>
                    <br></br>
                    <a href="Niveau.js" className="btn-filled">Indice</a>
                    </div>   
                </section>
                <section><p>prog bar</p></section>
            </div>
        )
    }
}

export default Enigme2