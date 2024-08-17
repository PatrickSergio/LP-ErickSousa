import React from 'react';
import styles from './HeroSection.module.css';
import beforeAfterImage from '../images/antes-depois.svg';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.topBanner}>
        <p>
          🔥 Preço Imperdível!! 🔥 Só hoje: de R$49,90 por R$29,90! ⏳ Não perca!
          <button className={styles.bannerButton}>Clique aqui!</button>
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>De 125kg a 76kg</h1>
          <h2 className={styles.subTitle}>A Transformação Que Mudou Minha Vida (e Pode Mudar a Sua Também!)</h2>
          <p className={styles.tagline}>Emagreça com saúde e sem passar fome!</p>
          <p className={styles.description}>
            Descubra o <strong>método passo a passo</strong> que me libertou do efeito sanfona
            e pode te levar a <strong>resultados incríveis em pouco tempo!</strong>
          </p>
          <button className={styles.ctaButton}>Quero Emagrecer agora!</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={beforeAfterImage} alt="Antes e Depois" className={styles.beforeAfterImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
