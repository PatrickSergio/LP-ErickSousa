import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import ericksousa from '../images/ericksousa.svg';
import instagramIcon from '../images/instagram-icon.svg';
import youtubeIcon from '../images/youtube-icon.svg';

const Footer = () => {
  const [showRocket, setShowRocket] = useState(false);

  const handleScroll = () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      const footerPosition = footerElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerPosition <= windowHeight) {
        setShowRocket(true);
      } else {
        setShowRocket(false);
      }
    }
  };

  const scrollToBuyButton = () => {
    const buyButton = document.getElementById('buyButton');
    if (buyButton) {
      console.log('Botão de compra encontrado');
      buyButton.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Força a reaplicação da animação
      buyButton.style.animation = 'none';
      void buyButton.offsetHeight; // Corrige o erro ESLint forçando o reflow sem usar a expressão diretamente
      buyButton.style.animation = 'neonPulse 1.5s ease-in-out infinite alternate';
      console.log('Animação neonPulse aplicada ao botão');
    } else {
      console.log('Botão de compra não encontrado');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={ericksousa} alt="Logo" />
      </div>
      <div className={styles.socialText}>
        <p>Me acompanhe nas Redes Sociais!</p>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
      {showRocket && (
        <div className={styles.scrollToBuy} onClick={scrollToBuyButton}>
          🚀
        </div>
      )}
    </footer>
  );
};

export default Footer;
