import React from 'react';
import styles from './ComboSection.module.css';

import iconRapidos from '../images/icon-rapidos.svg';
import iconEstilo from '../images/icon-estilo.svg';
import iconOrientacao from '../images/icon-orientacao.svg';
import iconEsforco from '../images/icon-esforco.svg';
import iconMudancas from '../images/icon-mudancas.svg';
import iconConvencionais from '../images/icon-convencionais.svg';

const ComboSection = () => {
  return (
    <section className={styles.comboSection}>
      <div className={styles.comboPara}>
        <h2>Este combo é para você se</h2>
        <div className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <img src={iconRapidos} alt="Resultados Mais Rápidos" className={styles.icon} />
            <h3>Deseja Resultados Mais Rápidos</h3>
            <p>Se você está buscando perder peso de forma saudável e eficiente.</p>
          </div>
          <div className={styles.featureItem}>
            <img src={iconEstilo} alt="Mudança de Estilo de Vida" className={styles.icon} />
            <h3>Quer Uma Mudança de Estilo de Vida</h3>
            <p>Se você está pronto para adotar hábitos alimentares e de exercício que promovem saúde a longo prazo.</p>
          </div>
          <div className={styles.featureItem}>
            <img src={iconOrientacao} alt="Precisa de Orientação" className={styles.icon} />
            <h3>Precisa de Orientação</h3>
            <p>Se você se sente perdido ou sobrecarregado com informações e precisa de um guia claro e eficaz.</p>
          </div>
        </div>
      </div>
      <div className={styles.comboNaoPara}>
        <h2>Este combo <strong style={{ color: 'red' }}>NÃO</strong> é para você se</h2>

        <div className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <img src={iconEsforco} alt="Espera Resultados Sem Esforço" className={styles.icon} />
            <h3>Espera Resultados Sem Esforço</h3>
            <p>Se você busca uma solução mágica sem compromisso ou esforço pessoal.</p>
          </div>
          <div className={styles.featureItem}>
            <img src={iconMudancas} alt="Não Está Pronto Para Mudanças" className={styles.icon} />
            <h3>Não Está Pronto Para Mudanças</h3>
            <p>Se você não está disposto a ajustar seus hábitos alimentares e de exercício.</p>
          </div>
          <div className={styles.featureItem}>
            <img src={iconConvencionais} alt="Prefere Métodos Convencionais" className={styles.icon} />
            <h3>Prefere Métodos Convencionais</h3>
            <p>Se você prefere seguir métodos tradicionais ou dietas de moda sem um plano estruturado e comprovado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;
