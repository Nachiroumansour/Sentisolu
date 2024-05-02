import React from 'react';
import '../css/footer.css';
function Footer() {
    return (
        <div className='footerr'>
            <div className="container">
                <div className="senti">
                    <div className="solu">
                        <img src={'/logo/logofoote.png'} alt="" />
                        <p>Nous sommes toujours ouverts pour discuter de votre projet et améliorer votre présence en ligne.</p>
                        <div className="contact-footer">
                            <ul>
                                <li className='cnt'>E-mail</li>
                                <li className='cnt'>Numéro Téléphone </li>
                                <li className='cntt'>contact@website.com</li>
                                <li className='cntt'>+221 78 712 38 43</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sol">
                        <h1>Parlons!</h1>
                        <p>Nous sommes toujours ouverts pour discuter de votre projet, améliorer votre présence en ligne et vous aider à relever vos défis de conception UX/UI.</p>
                        <div className="social-net">
                            <img src={'/Facebook/Negative.png'} alt="" />
                            <img src={'/Twitter/Negative.png'} alt="" />
                            <img src={'/Instagram/Negative.png'} alt="" />
                            <img src={'/LinkedIn/Negative.png'} alt="" />

                        </div>
                    </div>
                </div>

            </div>
            <div className="copyriht">
                <div className="container">
                    <div className="copy">
                        <div className="text-rih">
                            <p>Copyright 2022, Finsweet.com</p>
                        </div>
                        <ul className="link-rih">
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">À propos</a></li>
                            <li><a href="#">Caractéristiques</a></li>
                            <li><a href="#">Tarifs</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;