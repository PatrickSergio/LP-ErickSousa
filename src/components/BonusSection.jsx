import React from 'react';
import styles from './BonusSection.module.css';
import livro2Image from '../images/livro2.svg';
import livro3Image from '../images/livro3.svg';

const BonusSection = () => {
  return (
    <section className={styles.bonusSection}>
      <div className={styles.topText}>
        <h2>Comece a <span>emagrecer hoje!</span></h2>
        <p>
          Com o Ebook "De 125kg a 76kg: O Guia Definitivo Para <strong>Emagrecer com Saúde e Sem Sofrimento</strong>",
          você terá acesso ao método <strong>passo a passo</strong> que me fez <strong>eliminar 48kg</strong> e transformar completamente minha vida!
        </p>
        <p>Mas prepare-se, pois <strong>a transformação não para por aí...</strong></p>
      </div>
      <div className={styles.bonusText}>
        <h3>Leve 2 Bônus Exclusivos e Turbine Seus Resultados!</h3>
      </div>
      <div className={styles.booksContainer}>
        <div className={styles.bookItem}>
          <h4>Bônus 1</h4>
          <p><strong>Guia Completo de Dicas Alimentar</strong><br />
            Dicas práticas de como fazer as melhores escolhas para o seu dia a dia, e se alimentar corretamente.
          </p>
          <img src={livro2Image} alt="Livro 2" className={styles.bookImage} />
        </div>
        <div className={styles.bookItem}>
          <img src={livro3Image} alt="Livro 3" className={styles.bookImage} />
          <h4>Bônus 2</h4>
          <p><strong>50 Melhores Receitas Low Carb Para Emagrecer com Prazer</strong><br />
            Receitas simples e saborosas que usei na minha jornada para emagrecer comendo bem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
