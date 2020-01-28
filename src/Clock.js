/* eslint-disable no-useless-constructor */
import React , {Component} from 'react';

class Clock extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render(){
    
        const tempo = this.state.date.getTime()+ this.props.timezone *3600 *1000;
        const data = new Date(tempo);
   
        return <h2>In {this.props.country} sono le {data.toLocaleTimeString() }</h2>
    }
    tick = () =>{
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.interval=setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

}

export default Clock;