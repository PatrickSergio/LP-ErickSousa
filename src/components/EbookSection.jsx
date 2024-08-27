import React from 'react';
import styles from './EbookSection.module.css';
import livro1Image from '../images/livro1.svg'; 

const EbookSection = () => {
  return (
    <section className={styles.ebookSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Apresento Meu Ebook:</h1>
          <h2>"De 125kg a 76kg: O Guia Definitivo Para <br />Emagrecer com Saúde e Sem Sofrimento"</h2>
        </div>
        <div className={styles.imageContainer}>
          <img src={livro1Image} alt="Livro 1" className={styles.livroImage} />
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
