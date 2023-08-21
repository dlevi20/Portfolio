import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar(){

    useEffect(() => {
        const navbarMenu = document.querySelector('.navbar-menu')
        window.addEventListener("resize", () => {
            if(window.innerWidth > 650){
                navbarMenu.style.display = 'flex'
            } else {
                navbarMenu.style.display = 'none'
            }
        })
    }, [])

    function collapseNavbar(){
        const navbarMenu = document.querySelector('.navbar-menu')
        if(window.innerWidth > 650){
            navbarMenu.style.display = 'flex'
        } else {
            navbarMenu.style.display = 'none'
        }
    }

    function openNavbar(){
        const navbarMenu = document.querySelector('.navbar-menu')
        if(navbarMenu.style.display === 'flex'){
            navbarMenu.style.display = 'none'
        } else {
            navbarMenu.style.display = 'flex'
        }
    }

    return(
        <nav className="navbar">
            <div className="container">
                <ul className="navbar-menu">
                    <li className="list-item" onClick={collapseNavbar}><a href="#home">Kezdőlap</a></li>
                    <li className="list-item" onClick={collapseNavbar}><a href="#projects">Projektek</a></li>
                    <li className="list-item" onClick={collapseNavbar}><a href="">Kapcsolat</a></li>
                </ul>
                <h3 onClick={openNavbar} className="navbar-icon"><FontAwesomeIcon icon={faBars} /></h3>
            </div>
        </nav>
    )

}

export default Navbar