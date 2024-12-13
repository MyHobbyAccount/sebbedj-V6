import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from '../../data/faqData';

const FAQList = () => {
  return (
    <div className="space-y-2">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQList;