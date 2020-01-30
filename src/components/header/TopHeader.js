import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './topHeader.css'


class TopHeader extends Component {
    state = {  }

    show = () =>{
        this.ul.style.display = 'block'
    }
    hide =() =>{
        this.ul.style.display = 'none' 
    }
    render() {
        const { about, projects, contact } = this.props;
        return (
            <div className='header'>
                
                <h2 className='text' style={{marginTop: 25}}><a className='link'>Home </a></h2>
                <h2 className='text'><a className='link' onClick={() => about()}>About</a></h2>
                <h2 className='text'><a className='link' onClick={() => projects()}>Projects </a></h2>     
                <h2 className='text' style={{marginBottom: 14}} ><a className='link' onClick={() => contact()}> Contact </a></h2>
            
               
            </div>
        );
    }
}

export default TopHeader;
