import React from 'react';
import styles from './ComboDetailsSection.module.css';

const ComboDetailsSection = () => {
  return (
    <section className={styles.comboDetailsSection}>
      <div className={styles.comboText}>
        <h3>Este combo completo é tudo o que você precisa para:</h3>
        <ul className={styles.comboList}>
          <li><strong>Perder peso de forma rápida, saudável e sustentável.</strong></li>
          <li>Ter uma <strong>alimentação prazerosa</strong>, <span>sem restrições extremas.</span></li>
          <li><strong>Vencer a compulsão alimentar</strong> e o efeito sanfona de uma vez por todas.</li>
          <li>Cozinhar <strong>receitas deliciosas e fáceis</strong> que te ajudarão a alcançar seus <strong>objetivos de emagrecimento.</strong></li>
        </ul>
      </div>
      <div className={styles.bonusText}>
        <h3>Leve 2 Bônus Exclusivos e Turbine Seus Resultados!</h3>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buyButton}>Quero esse combo agora!</button>
      </div>
    </section>
  );
};

export default ComboDetailsSection;
