import React, { Component } from 'react'
// import CanvasDraw from "react-canvas-draw";
import {isMobile} from 'react-device-detect';
 
// import { useIsMobileOrTablet } from "./util/useIsMobileOrTablet";
import '../sass/components/_draw.scss';

class Draw extends Component {

    renderContent = () => {
        if (isMobile) {
            return <div> This content is unavailable on mobile</div>
        }
        return <div> ...content </div>
    }

    render(){
        // return(
            // <div id="draw">
            // <CanvasDraw/>
            // </div>
            return this.renderContent();
        // )
    }
}

export default Draw