import React from 'react';
import styles from './EbookFeaturesSection.module.css';

import iconJornada from '../images/icon-jornada.svg';
import iconNutricao from '../images/icon-nutricao.svg';
import iconControle from '../images/icon-controle.svg';
import iconReceitas from '../images/icon-receitas.svg';
import iconSucesso from '../images/icon-sucesso.svg';

const EbookFeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <nav>
        <h2 className={styles.heading}>Neste Ebook você irá encontrar</h2>
      </nav>

      <div className={styles.featuresContainer}>
        <div className={styles.featureItem}>
          <img src={iconJornada} alt="Jornada Guiada" className={styles.icon} />
          <h3>Jornada Guiada</h3>
          <p>O passo a passo detalhado do meu método para <strong>perder peso de forma definitiva.</strong></p>
        </div>
        <div className={styles.featureItem}>
          <img src={iconNutricao} alt="Nutrição Fácil" className={styles.icon} />
          <h3>Nutrição Fácil</h3>
          <p>Dicas para uma <strong>alimentação saudável e deliciosa</strong>, sem restrições extremas ou passar fome.</p>
        </div>
        <div className={styles.featureItem}>
          <img src={iconControle} alt="Controle Alimentar" className={styles.icon} />
          <h3>Controle Alimentar</h3>
          <p>Estratégias eficazes para <strong>vencer a compulsão alimentar</strong> e o efeito sanfona de uma vez por todas.</p>
        </div>
        <div className={styles.featureItem}>
          <img src={iconReceitas} alt="Receitas Saudáveis" className={styles.icon} />
          <h3>Receitas Saudáveis</h3>
          <p><strong>Receitas simples e saborosas</strong> que usei na minha jornada para <strong>emagrecer comendo bem.</strong></p>
        </div>
        <div className={styles.featureItem}>
          <img src={iconSucesso} alt="Sucesso Acelerado" className={styles.icon} />
          <h3>Sucesso Acelerado</h3>
          <p>Sabendo tudo isso, você poderá obter os mesmos resultados que eu, mas em <strong>menos tempo!</strong></p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button id='buyButton' className={styles.buyButton}>Quero Meu Ebook Agora!</button>
      </div>
    </section>
  );
};

export default EbookFeaturesSection;
