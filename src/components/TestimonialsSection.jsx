import React from 'react';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <h2>O Que Estão Dizendo</h2>
        <h3>Sobre o <span>Erick Souza</span></h3>
        <p>Ganhe inspiração nestes Relatos</p>
      </div>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonial}>
          <p className={styles.quote}>"Você é um exemplo de foco e determinação então de certa forma isso nos motiva a continuar!"</p>
          <p className={styles.author}>Márcia Cristina<br /><span>@marciacristina_1</span></p>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.quote}>"Minha vida mudou muito! Sempre que penso em desistir da academia e da dieta, vou no seu perfil, e volto com mais força!"</p>
          <p className={styles.author}>Miguel Neto<br /><span>@mi_gueneto</span></p>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.quote}>"Olha, você me inspira muito mesmo! Consegui emagrecer 5kg e pretendo perder mais!"</p>
          <p className={styles.author}>Dayane Meireles<br /><span>@day_meireles.of</span></p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
