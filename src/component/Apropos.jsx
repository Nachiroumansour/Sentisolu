import React from 'react';
import '../css/header.css';
import '../css/apropos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Apropos(props) {
    return (
        <div>
            <section>
                <div className="container">

                    <div className="txt-apropos">
                        <div className="txt-pp">
                            <p className='APrs'>À propos de nous</p>
                            <h5>Nos conceptions résolvent des problèmes</h5>
                            <p>Notre identité se définit par la capacité de nos conceptions à résoudre des problèmes. Chaque projet que nous entreprenons est une opportunité de créer des solutions ingénieuses qui transcendent les défis, donnant vie à des idées qui inspirent et résolvent.</p>
                        </div>
                        <div className="img-pp">
                            <img src={'/group-of-people-sitting-indoors-3184360.svg'} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="objectif container">
                    <div className="objct">
                        <div className="objct-centree">
                            <span>Qui nous sommes</span>
                            <h5>Centré sur un objectif</h5>
                            <p>Chez SëntiSolu, notre identité est définie par notre engagement à être centré sur un objectif. Chaque projet est façonné avec une clarté stratégique, aligné sur votre vision pour atteindre des résultats exceptionnels.</p>

                        </div>
                        <div className="objct-ameliore">
                            <h5>Amélioration continue</h5>
                            <p>Nous sommes une équipe dédiée à l'amélioration continue chez SëntiSolu. Chaque jour est une opportunité pour affiner nos compétences, enrichir nos processus et offrir des solutions toujours plus innovantes et performantes à nos clients.</p>
                        </div>
                    </div>
                    <div className="objct-img">
                        <img src={'/man-in-blue-jacket-looking-at-white-board-7413916.svg'} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container prss">
                    <h3>Le processus que nous suivons</h3>
                    <div className="processus">
                        <div className="all-processus">
                            <img src={'/Line and Icon.png'} alt="" />
                            <h5>Planification</h5>
                            <p>Chaque projet chez SëntiSolu commence par une planification méticuleuse, où nous définissons les contours de votre vision pour assurer une exécution réussie.</p>
                        </div>
                        <div className="all-processus">
                            <img src={'/Line and Icon.png'} alt="" />
                            <h5>Conception</h5>
                            <p>La phase de conception chez SëntiSolu va au-delà des schémas, elle forge une base solide en alignant chaque élément sur votre objectif ultime.</p>
                        </div>
                        <div className="all-processus">
                            <img src={'/Line and Icon.png'} alt="" />
                            <h5>Design</h5>
                            <p>Dans l'atelier créatif de SëntiSolu, le design prend vie avec une esthétique captivante, chaque détail pensé pour enrichir l'expérience utilisateur.</p>
                        </div>
                        <div className="all-processus">
                            <img src={'/Line and Icon.png'} alt="" />
                            <h5>Développement</h5>
                            <p>Le processus de développement chez SëntiSolu allie expertise technique et créativité, transformant la conception en une réalité fonctionnelle, prête à impressionner.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='inspiration'>
                <div className="container">
                    <div className="inspirer">
                        <div className="inspi-txt">
                            <span>Notre mission</span>
                            <h5>Inspirez, innovez, partagez</h5>
                            <p>Notre mission chez SëntiSolu est de constamment inspirer par des créations innovantes, tout en partageant notre passion pour l'excellence, afin de modeler un futur digital empreint d'audace et de réussite.</p>
                        </div>

                        <div className="inspi-img">
                            <img src={'/a-man-standing-in-an-office-7792811.svg'} alt="" />
                        </div>
                        <div className="inspi-img">
                            <img src={'/photo-of-women-at-the-meeting-3810789.svg'} alt="" />
                        </div>
                        <div className="inspi-txt">
                            <span>Notre vision</span>
                            <h5>Mise au point laser</h5>
                            <p>Notre vision chez SëntiSolu est une mise au point laser sur l'excellence, où chaque projet est sculpté avec précision pour atteindre la perfection, illuminant ainsi le paysage numérique de solutions de conception exceptionnelles.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="avantage">
                        <h3></h3>
                        <div className="caracteristeique">
                            <div className="caracter-title">
                                {/* <p>Caractéristiques</p> */}
                                <div className="caract-titre">
                                    <h1>Les avantages de travailler avec nous</h1>
                                </div>
                            </div>
                            <div className="card-caracterer">

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

                            </div>
                            <div className="img-partenaire">
                                <img src={'/Logo Number.png'} alt="" />
                                <img src={'/Logo 1.png'} alt="" />
                                <img src={'/Logo 2.png'} alt="" />
                                <img src={'/Logo 3.png'} alt="" />
                                <img src={'/Logo 4.png'} alt="" />
                                <img src={'/Logo 5.png'} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Ekip'>
                <div className="container">
                    <div className="Equipes">
                        <h3>Rencontrez notre équipe</h3>
                        <div className="coleg">
                            <div className="coleg-item">
                                <div className="coleg-item-blc">
                                    <img src={'/Group 2572.svg'} alt="" />
                                    <h6>Mansour Nachirou</h6>
                                    <p>Développeur, Designer</p>
                                </div>
                            </div>
                            <div className="coleg-item">
                                <div className="coleg-item-blc">
                                    <img src={'/serious-man-3760373.svg'} alt="" />
                                    <h6>Abdou Malick Cissé </h6>
                                    <p>Développeur, Designer</p>
                                </div>
                            </div>
                            <div className="coleg-item">
                                <div className="coleg-item-blc">
                                    <img src={'/serious-man-3760373 2.svg'} alt="" />
                                    <h6>Ibrahima K Bakhoum</h6>
                                    <p>Développeur, Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      
        </div>
    );
}

export default Apropos;