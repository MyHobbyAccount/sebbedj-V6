import { useState } from 'react';
import { sendEmail } from '../utils/email';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      service: e.target.service?.value
    };

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
        e.target.reset();
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};