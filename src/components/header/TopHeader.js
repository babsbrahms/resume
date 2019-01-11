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
        return (
            <div className='header'>
                
                <h2 className='text' style={{marginTop: 25}}><Link className='link' to='/'>Home </Link></h2>
                <h2 className='text'><Link className='link' to='/about'>About Me </Link></h2>
                <h2 className='text'><Link  className='link' to='/projects'>Projects </Link></h2>     
                <h2 className='text' style={{marginBottom: 14}} ><Link className='link' to='/contact'> Contact </Link></h2>
            
               
            </div>
        );
    }
}

export default TopHeader;
