import React, { Component } from 'react';
import '../sass/components/_loader.scss';

class Loader extends Component {

    // state = {
    //     loading : true
    // }
      
    // componentWillMount(){
    //     setTimeout(() =>{
    //         this.setState({
    //             loading: false
    //         })
    //     }, 5000);
    // }

    render(){

        // if(this.state.loading){
        //     return <App/>
        // }
        return(
            <section id="loader">
            </section>
        )
    }
}

export default Loader