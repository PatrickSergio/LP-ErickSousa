import React from 'react';
import styles from './GuaranteeSection.module.css';
import guaranteeBadge from '../images/guarantee-badge.svg';

const GuaranteeSection = () => {
  return (
    <section className={styles.guaranteeSection}>
      <h3>Experimente Sem Risco: Garantia Incondicional de 7 Dias!</h3>
      <div className={styles.content}>
        <p>
          Se em até 7 dias você não estiver satisfeito com o conteúdo do ebook, basta nos enviar um email e devolveremos 100% do seu dinheiro.
          Sem perguntas, sem burocracia.
        </p>
        <img src={guaranteeBadge} alt="Garantia de 7 Dias" className={styles.badge} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buyButton}>Garantir meu livro agora!</button>
      </div>
    </section>
  );
};

export default GuaranteeSection;
