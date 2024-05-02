import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/accueil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Accueil(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <img src={'/Arrow.svg'} alt="Previous" className="custom-prev-arrow" />,
        nextArrow: <img src={'/Arrow (1).svg'} alt="Next" className="custom-next-arrow" />
    };
    return (
        <div>

            <section className="hero-section">
                <div className="container">
                    <div className="hero-wrapper pt-120 pb-120">
                        <div className="hero-content">
                            <h1 className="hero-title">Explorez l'avenir avec SëntiSolu : Vision Loin, Solutions Impeccables</h1>
                            <p className="hero-desc">
                                Nous sommes une entreprise de solutions informatiques qui vous aide à atteindre vos objectifs.
                            </p>
                            <div className="hero-btn">

                                <a href="contact.html" className="cmn--btn">
                                    <span>Voir notre travail</span>
                                </a>
                                <a href="about.html" className="cmn--btn1">
                                    <span>En savoir plus</span>
                                    <img src={'/arrows/Arrow 1.svg'} alt="arrow1" />
                                </a>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={'hero/Illustration.svg'} alt="hero-img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="smart-section">
                <div className="container">
                    <div className="smart-wrapper">
                        <div className="smart-content">
                            <h3 className="smart-title">
                                Comment nous travaillons
                            </h3>
                            <p className="smart-desc">
                                Regardons Loin, Agissons Ensemble, Réalisons l'Impossible.
                            </p>
                            <div className="smart-btn">
                                <a href="contact.html" className="cmn--btn2">
                                    <span>Prenez contact avec nous</span>
                                    <img src={'/arrows/Arrow-red.svg'} alt="arrow1" />
                                </a>
                            </div>
                        </div>
                        <div className="smart-list">
                            <div className="smart-item">
                                <div className="smart-icon">
                                    <img src={'/smart/1.svg'} alt="smart-icon" />
                                </div>
                                <h4 className="smart-item-title">Stratégie</h4>
                                <p className="smart-item-desc">Façonnons votre avenir numérique avec une stratégie sur mesure, guidée par une vision à long terme.</p>
                            </div>
                            <div className="smart-item">
                                <div className="smart-icon">
                                    <img src={'/smart/2.svg'} alt="smart-icon" />
                                </div>
                                <h4 className="smart-item-title">Filaire</h4>
                                <p className="smart-item-desc">De la conception filaire à la réalité visuelle, chaque détail compte pour une expérience utilisateur exceptionnelle.</p>
                            </div>
                            <div className="smart-item">
                                <div className="smart-icon">
                                    <img src={'/smart/3.svg'} alt="smart-icon" />
                                </div>
                                <h4 className="smart-item-title">Conception</h4>
                                <p className="smart-item-desc">SëntiSolu donne vie à votre vision avec des designs innovants et une créativité sans limite.</p>
                            </div>
                            <div className="smart-item">
                                <div className="smart-icon">
                                    <img src={'/smart/4.svg'} alt="smart-icon" />
                                </div>
                                <h4 className="smart-item-title">Développement</h4>
                                <p className="smart-item-desc">Transformons les concepts en réalité fonctionnelle grâce à un développement robuste et une expertise technique de pointe.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="work-section">
                <div className="container">
                    <div className="work-wrapper">
                        <div className="work-content">
                            <h3 className="work-title">
                                Consultez nos projets
                            </h3>
                            <a href="" className="work-link">
                                <span>Voir plus</span>
                                <img src={'/arrows/Arrow 2.svg'} alt="arrow2" />
                            </a>
                        </div>
                    </div>
                    <div className="project-view">
                        <div className="bg-view">
                            <img src={'/Group 2563.svg'} alt="" />
                            <a href="" className="work-link">
                                <span className='prp'>Voir plus</span>
                                <img src={'/Arrow 2.png'} className='pr-row' alt="arrow2" />
                            </a>
                        </div>
                        <div className="view">
                            <div className="portfolio">
                                <a href="" className="porto">
                                    <span className=''>Voir plus</span>
                                    <img src={'/Arrow 2.png'} className='' alt="arrow2" />
                                </a>
                                <img src={'/Group 2566.svg'} alt="" />
                            </div>

                            <div className="portfolio2">
                                <img src={'/Card (1).svg'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='carat'>
                <div className="container">
                    <div className="caracteristeique">
                        <div className="caracter-title">
                            <p>Caractéristiques</p>
                            <div className="caract-titre">
                                <h1>Une conception qui résout les problèmes, un produit à la fois</h1>
                            </div>
                        </div>
                        <div className="card-caracterer">
                            <div className="card-caract-item">
                                <div className="item-card">
                                    <img src={'/Icon.svg'} alt="" />
                                    <h5>Utilisation du client d'abord</h5>
                                    <p>Nous plaçons votre vision au cœur de chaque projet, assurant une satisfaction totale du client.</p>
                                </div>
                            </div>
                            <div className="card-caract-item">
                                <div className="item-card">
                                    <img src={'/Icon 4.45.04 PM.svg'} alt="" />
                                    <h5>Deux cycles de révisions gratuit</h5>
                                    <p>Perfectionnez votre projet avec deux cycles de révisions gratuits, car chez SëntiSolu, la perfection est notre norme.</p>
                                </div>
                            </div>
                            <div className="card-caract-item">
                                <div className="item-card">
                                    <img src={'/Icon 4.48.40 PM.svg'} alt="" />
                                    <h5>Assistance 24h/24 et 7j/7</h5>
                                    <p>SëntiSolu est toujours là pour vous, avec une assistance ininterrompue 24h/24, 7j/7, pour répondre à vos besoins à tout moment.</p>
                                </div>
                            </div>
                            <div className="card-caract-item">
                                <div className="item-card">
                                    <img src={'/Icon 4.51.26 PM.svg'} alt="" />
                                    <h5>Livraison rapide</h5>
                                    <p>Votre projet avec SëntiSolu ne connaît pas de retard, notre livraison rapide garantit une concrétisation rapide de votre vision.</p>
                                </div>
                            </div>
                            <div className="card-caract-item">
                                <div className="item-card">
                                    <img src={'/Icon 4.46.39 PM.svg'} alt="" />
                                    <h5>Approche pratique</h5>
                                    <p>Optez pour une approche pratique avec SëntiSolu, transformant des idées complexes en solutions de conception simples et efficaces.</p>
                                </div>
                            </div>
                            <div className="card-caract-item">
                                <div className="item-card">
                                    <img src={'/Icon 4.47.23 PM.svg'} alt="" />
                                    <h5>Utilisation du client d'abord</h5>
                                    <p>Nous plaçons votre vision au cœur de chaque projet, assurant une satisfaction totale du client.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='temoin'>
                <div className="container">
                    <div className="todo">
                        <h3>Ce que nos clients disent de nous</h3>
                        <Slider {...settings}>
                            <div className="slide-temoin">
                                <p>La meilleure agence avec laquelle nous avons travaillé jusqu'à présent. Ils comprennent notre produit et sont capables d'ajouter de nouvelles fonctionnalités avec une grande concentration."</p>
                                <div className="tof-temoin">
                                    <img src={'/Mask Group.png'} alt="" />
                                    <div className="profil-temoin">
                                        <h5>Mbayang Drame</h5>
                                        <span>Vice President</span>
                                    </div>
                                </div>
                            </div>

                            <div className="slide-temoin">
                                <p>La meilleure agence avec laquelle nous avons travaillé jusqu'à présent. Ils comprennent notre produit et sont capables d'ajouter de nouvelles fonctionnalités avec une grande concentration."</p>
                                <div className="tof-temoin">
                                    <img src={'/Mask Group.png'} alt="" />
                                    <div className="profil-temoin">
                                        <h5>Mbayang Drame</h5>
                                        <span>Vice President</span>
                                    </div>
                                </div>
                            </div>

                            <div className="slide-temoin">
                                <p>La meilleure agence avec laquelle nous avons travaillé jusqu'à présent. Ils comprennent notre produit et sont capables d'ajouter de nouvelles fonctionnalités avec une grande concentration."</p>
                                <div className="tof-temoin">
                                    <img src={'/Mask Group.png'} alt="" />
                                    <div className="profil-temoin">
                                        <h5>Mbayang Drame</h5>
                                        <span>Vice President</span>
                                    </div>
                                </div>
                            </div>



                        </Slider>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="questions">
                        <div className="request">
                            <h5>Questions fréquemment posées</h5>
                            <a href="#">Contactez nous pour plus d'informations</a>
                        </div>
                        <div className="bloc-quest">
                            <div className="request-inner">
                                <div className="req">
                                    <span>01</span><h6>Combien de temps cela prend-il?</h6><img src={'/+.png'} alt="" className='pls' />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="request-inners">
                                <div className="req">
                                    <span>02</span><h6>Quelle est votre convention de dénomination de classe ?</h6><img src={'/+.svg'} alt="" className='pls' />
                                </div>

                            </div>
                            <div className="request-inners">
                                <div className="req">
                                    <span>03</span><h6>Comment communiquez-vous ?</h6><img src={'/+.svg'} alt="" className='pls' />
                                </div>

                            </div>
                            <div className="request-inners">
                                <div className="req">
                                    <span>04</span><h6>J'ai un plus gros projet. Peux-tu t'en charger?</h6><img src={'/+.svg'} alt="" className='pls' />
                                </div>

                            </div>
                            <div className="request-inners">
                                <div className="req">
                                    <span>05</span><h6>Quelle est votre convention de dénomination de classe ?</h6><img src={'/+.svg'} alt="" className='pls' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="contact">

                    <div className="imgg"><img src={'/Start Convert.png'} alt="" className='imagegrf' /></div>


                    <div className="form-contact">
                        <h6>Envoyer une demande</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <form action="" className='frm'>
                            <input type="text" placeholder='Votre Nom' />
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder="Collez l'URL de votre conception Figma" />
                            <button>Envoyer une demande</button>
                            <div className="pr-cnt">
                                <a href="">Prenez contact avec nous</a><span><img src={'/Arrow 2 2.31.16 AM.png'} alt="" /></span>
                            </div>

                        </form>
                    </div>

                </div>
            </section>
            <section className='Ablog'>
                <div className="container">
                    <h4 className='notre-blog'>Notre Blog</h4>
                    <div className="blog">
                        <div className="blog-item">
                            <img src={'/photo-of-people-using-laptops-3182833.svg'} />
                            <p className='blog-p'>19 Jan 2022</p>
                            <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                            <p className='blog-p'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <div className="read"><a href="#">Read More</a><span><img src={'/Arrow 1.png'} alt="" /></span></div>
                        </div>
                        <div className="blog-item">
                            <img src={'/side-view-photo-of-smiling-woman-in-a-black-and-white-striped-top-sitting-on-a-bed-while-using-a-laptop-3765035.svg'} />
                            <p className='blog-p'>19 Jan 2022</p>
                            <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                            <p className='blog-p'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <div className="read"><a href="#">Read More</a><span><img src={'/Arrow 1.png'} alt="" /></span></div>
                        </div>
                        <div className="blog-item">
                            <img src={'/top-view-photo-of-person-holding-earphones-3183198.svg'} />
                            <p className='blog-p'>19 Jan 2022</p>
                            <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                            <p className='blog-p' >See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <div className="read"><a href="#">Read More</a><span><img src={'/Arrow 1.png'} alt="" /></span></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Accueil;