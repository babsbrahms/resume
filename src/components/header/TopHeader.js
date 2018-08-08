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
                <h2 className='text' 
                    onMouseOver={this.show} onMouseOut={this.hide}>
                    <Link  className='link' to='/projects'>Projects </Link>
                     <ul className='ul' ref={(ul)=> {this.ul = ul}}>
                        <li className='li'> <Link to='/projects' className='link'>phVID </Link> </li>
                        <li className='li'> <Link to='/projects' className='link'>skincare </Link></li>
                        <li className='li'> <Link to='/projects' className='link'>e-vent </Link></li>
                        <li className='li'> <Link to='/projects' className='link'>clocks </Link></li>

                    </ul> 
                </h2>
                <h2 className='text'><Link className='link' to='/contact'> Contact </Link></h2>
            </div>
        );
    }
}

export default TopHeader;
