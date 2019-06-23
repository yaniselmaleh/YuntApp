import React from 'react'
import '../sass/components/_progbar.scss';


const Track = styled.div`
    width: 100%;
    height: 20px;
    background-color: #222;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`;

export default class ProgBar extends React.Component {
    render(){
        return(
            <Track>
            
            </Track>
        )
    }
}