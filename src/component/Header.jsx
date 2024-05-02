import React from 'react';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Header() {


    useEffect(() => {
        // Fonction pour gérer le défilement de la page
        const handleScroll = () => {
            // Sélection de la section de l'en-tête
            const headerSection = document.querySelector('.header-section');

            // Ajout/Suppression des classes 'menu-fixed' et 'slideInUp' en fonction du défilement de la page
            if (window.scrollY > 220) {
                headerSection.classList.add('menu-fixed', 'animated', 'fadeInDown');
                headerSection.classList.remove('slideInUp');
                document.body.classList.add('body-padding');
            } else {
                headerSection.classList.remove('menu-fixed', 'fadeInDown');
                headerSection.classList.add('slideInUp');
                document.body.classList.remove('body-padding');
            }
        };

        // Ajout d'un écouteur d'événement pour gérer le défilement de la page
        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            {/* Début du défilement */}
            <div id="progress">
                <span id="valiu"><i className="fas fa-arrow-up"></i></span>
            </div>
            {/* Fin du défilement */}
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-menu">
                            <a href="index.html" className="logo">
                                <img src={'/logo/Logo.svg'} alt="logo" />
                            </a>
                        </div>
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className="main-menu">
                            <li className="active">
                                <a href="index.html">Accueil</a>
                            </li>
                            <li>
                                <Link to="/Apropos">     À Propos</Link>
                            </li>
                            <li>
                                <a href="caractéristiques.html">Caractéristiques</a>
                            </li>
                            <li>
                                <a href="tarifs.html">Tarifs</a>
                            </li>
                            <li>
                                <a href="FAQ.html">FAQ</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>

                            <li className="head-btn">
                                <a href="contact.html" className="cmn--btn">
                                    <span>Contactez-Nous</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;