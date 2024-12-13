import React from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/email';
import { FaEnvelope, FaUser, FaMusic } from 'react-icons/fa';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      eventType: e.target.eventType.value,
      message: e.target.message.value,
    };

    const result = await sendEmail(formData);
    if (result.success) {
      alert('Tack för ditt meddelande! Jag återkommer så snart som möjligt.');
      e.target.reset();
    } else {
      alert('Ett fel uppstod. Vänligen försök igen eller kontakta mig direkt via telefon.');
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="section-height bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text">
          Kontakta mig
        </h2>
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-lg shadow-neon">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                    <FaUser className="inline-block mr-2" />
                    Namn
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    className="w-full bg-black/50 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                    <FaEnvelope className="inline-block mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full bg-black/50 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-event-type" className="block text-sm font-medium text-gray-300 mb-2">
                  <FaMusic className="inline-block mr-2" />
                  Typ av Event
                </label>
                <select
                  id="contact-event-type"
                  name="eventType"
                  className="w-full bg-black/50 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all duration-300"
                >
                  <option>Bröllop</option>
                  <option>Klubbevent</option>
                  <option>Privat Fest</option>
                  <option>Musikquiz</option>
                  <option>Annat</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Meddelande
                </label>
                <textarea
                  rows={6}
                  id="contact-message"
                  name="message"
                  required
                  className="w-full bg-black/50 border border-gray-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all duration-300"
                  placeholder="Berätta mer om ditt event..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-8 py-3 rounded-lg hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1"
                >
                  Skicka Meddelande
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;