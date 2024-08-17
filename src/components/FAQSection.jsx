import React from 'react';
import styles from './FAQSection.module.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "Como faço para adquirir o ebook?",
      answer: "Para adquirir o ebook, basta clicar no botão 'Quero Emagrecer Agora!' e seguir as instruções para completar sua compra. Você receberá um link para download imediatamente após a confirmação do pagamento.",
    },
    {
      question: "Em quanto tempo começarei a ver resultados?",
      answer: "Os resultados podem variar de pessoa para pessoa, mas muitos dos nossos leitores relatam mudanças visíveis nos primeiros meses de aplicação do método. A consistência e a dedicação são fundamentais para alcançar os melhores resultados.",
    },
    {
      question: "Preciso seguir uma dieta restritiva?",
      answer: "Não! Nosso método é projetado para ser sustentável a longo prazo. Sem dietas extremas. Você aprenderá a fazer escolhas alimentares saudáveis e deliciosas que se encaixam ao seu estilo de vida.",
    },
    {
      question: "O ebook é adequado para vegetarianos ou veganos?",
      answer: "Sim, o ebook inclui opções e substituições para vegetarianos e veganos. Nosso objetivo é proporcionar um plano flexível que atenda às diversas preferências alimentares.",
    },
    {
      question: "Quanto tempo preciso dedicar por dia para seguir o método?",
      answer: "Nosso método é projetado para ser integrado facilmente à sua rotina diária. Recomendamos dedicar cerca de 30 a 45 minutos por dia, mas você pode ajustar conforme sua necessidade. O mais importante é que você siga com consistência.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Estamos tão confiantes na eficácia do nosso método que oferecemos uma garantia de 7 dias. Se dentro deste período você não estiver satisfeito com o conteúdo, basta nos enviar um email e devolveremos 100% do seu dinheiro.",
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim, utilizamos plataformas de pagamento seguras e confiáveis para garantir que suas informações estejam protegidas durante toda a transação.",
    },
    {
      question: "Posso parcelar a compra?",
      answer: "Sim, oferecemos a opção de parcelamento em até 12x no cartão de crédito, para facilitar ainda mais o acesso ao nosso método.",
    },
    {
      question: "Receberei algum material físico?",
      answer: "Não, a proposta é 100% digital. Você terá acesso ao ebook e todos os materiais bônus diretamente no seu email, podendo acessá-los de qualquer dispositivo com internet.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}> Perguntas frequentes 🔍</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div className={styles.faqItem} key={index}>
            <h3>{faq.question} <span className={styles.icon}>✔</span></h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
