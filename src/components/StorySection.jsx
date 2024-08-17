import React from 'react';
import styles from './StorySection.module.css';
import erickImage from '../images/ericksousa.svg'; 

const StorySection = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Erick Sousa: De 125kg à Vitória!<br />Minha Revolução no Emagrecimento</h2>
          <p>
            Desde pequeno, <strong>enfrentei bullying por ser gordinho</strong>, e aos 18 anos, <strong>cheguei a pesar 125kg</strong> buscando conforto na comida após uma perda familiar. Após a pandemia, <strong>o choque nos olhares</strong> das pessoas foi meu ponto de virada. Decidi que era hora de mudar.
          </p>
          <p>
            Comecei a <strong>me exercitar em casa e na academia</strong>, mas a verdadeira transformação veio com a ajuda do meu amigo Douglas, um especialista em treinos. Juntos, criamos um <strong>método que me ajudou a perder 48kg em 1 ano e meio</strong>.
          </p>
          <p>
            Hoje, sou nutricionista e coach de emagrecimento, estou aqui para provar que <strong>qualquer um pode transformar sua vida. Se eu consegui, você também consegue!</strong> Com meu método, você pode <strong>emagrecer mais rápido</strong> e alcançar <strong>resultados incríveis</strong>. Junte-se a mim nessa <strong>jornada de superação e conquista!</strong>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={erickImage} alt="Erick Sousa" className={styles.erickImage} />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
