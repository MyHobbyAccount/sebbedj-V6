import React from 'react';
import { Transition } from '@headlessui/react';
import ContactInput from './ContactInput';
import ContactTextArea from './ContactTextArea';
import { useContactForm } from '../../hooks/useContactForm';

const ContactPopup = ({ isOpen, onClose, service }) => {
  const { handleSubmit } = useContactForm();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      service: service?.title || 'DJ-tjänster'
    };

    const result = await handleSubmit(formData);
    if (result?.success) {
      onClose();
    }
  };

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="neon-box p-6 max-w-md w-full"
          onClick={e => e.stopPropagation()}
        >
          <h3 className="text-2xl font-semibold mb-4 neon-text">
            Boka {service?.title || 'DJ-tjänster'}
          </h3>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <ContactInput
              id="popup-name"
              name="name"
              label="Namn"
              type="text"
              autoComplete="name"
            />
            <ContactInput
              id="popup-email"
              name="email"
              label="Email"
              type="email"
              autoComplete="email"
            />
            <ContactTextArea
              id="popup-message"
              name="message"
              label="Meddelande"
              rows={4}
            />
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="neon-button px-6 py-2"
              >
                Avbryt
              </button>
              <button
                type="submit"
                className="neon-button px-6 py-2"
              >
                Skicka
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  );
};

export default ContactPopup;