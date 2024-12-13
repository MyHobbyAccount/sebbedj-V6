import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import ContactInput from './ContactInput';
import ContactTextArea from './ContactTextArea';
import SubmitButton from './SubmitButton';

const ContactForm = () => {
  const { handleSubmit, isSubmitting } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Kontakta mig
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-lg bg-black/40 p-8 rounded-2xl border border-gray-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactInput
                  id="contact-name"
                  name="name"
                  label="Namn"
                  type="text"
                  autoComplete="name"
                />
                <ContactInput
                  id="contact-email"
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                />
              </div>

              <ContactTextArea
                id="contact-message"
                name="message"
                label="Meddelande"
                rows={6}
              />

              <div className="flex flex-col items-center space-y-6">
                <SubmitButton isSubmitting={isSubmitting} />
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30" />
    </section>
  );
};

export default ContactForm;