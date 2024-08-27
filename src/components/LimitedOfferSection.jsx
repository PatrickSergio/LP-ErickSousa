import React, { useState, useEffect } from 'react';
import styles from './LimitedOfferSection.module.css';
import livro1Image from '../images/livro1.svg';
import livro2Image from '../images/livro2.svg';
import livro3Image from '../images/livro3.svg';

const LimitedOfferSection = () => {
  const getStoredDeadline = () => {
    const storedDeadline = localStorage.getItem('countdownDeadline');
    const now = new Date().getTime();

    if (storedDeadline && parseInt(storedDeadline, 10) > now) {
      return parseInt(storedDeadline, 10);
    } else {
      const newDeadline = now + 6 * 60 * 60 * 1000; // 6 horas
      localStorage.setItem('countdownDeadline', newDeadline);
      return newDeadline;
    }
  };

  const calculateTimeLeft = (deadline) => {
    const now = new Date().getTime();
    const difference = deadline - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [deadline] = useState(getStoredDeadline());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <section className={styles.limitedOfferSection}>
      <div className={styles.header}>
        <p>🚀 Transforme Sua Vida por apenas <span className={styles.priceHighlight}>R$ 29,90</span> 🚀</p>
      </div>
      <div className={styles.offerContainer}>
        <div className={styles.booksContainer}>
          <img src={livro1Image} alt="Livro 1" className={`${styles.bookImage} ${styles.bookCenter}`} />
          <img src={livro2Image} alt="Livro 2" className={`${styles.bookImage} ${styles.bookLeft}`} />
          <img src={livro3Image} alt="Livro 3" className={`${styles.bookImage} ${styles.bookRight}`} />
        </div>
        <div className={styles.offerDetails}>
          <h3>OFERTA POR TEMPO LIMITADO</h3>
          <div className={styles.timer}>
            <span>⏰</span>
            <span className={styles.time}>
              {String(timeLeft.hours).padStart(2, '0')} h {String(timeLeft.minutes).padStart(2, '0')} m {String(timeLeft.seconds).padStart(2, '0')} s
            </span>
          </div>
          <div className={styles.pricing}>
            <p>De <span className={styles.oldPrice}>49,90</span></p>
            <p>Por <span className={styles.currentPrice}>29,90</span></p>
          </div>
          <button className={styles.buyButton}>QUERO GARANTIR MINHA OFERTA!</button>
        </div>
      </div>
    </section>
  );
};

export default LimitedOfferSection;
