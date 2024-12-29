import React from "react";
import { Transition } from "@headlessui/react";
import { sendEmail } from "../utils/email";

const ContactPopup = ({ isOpen, onClose, service }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      service: service?.title || "DJ-tjänster",
    };

    const result = await sendEmail(formData);
    if (result.success) {
      alert("Tack för din förfrågan! Vi återkommer så snart som möjligt.");
      e.target.reset();
      onClose();
    } else {
      alert(
        "Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt via telefon på 072-1571439"
      );
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
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-black p-6 rounded-lg max-w-md w-full text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Boka {service?.title || "DJ-tjänster"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="popup-name"
                className="block text-sm font-medium text-white"
              >
                Namn
              </label>
              <input
                type="text"
                id="popup-name"
                name="name"
                autoComplete="name"
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
              />
            </div>
            <div>
              <label
                htmlFor="popup-email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="popup-email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
              />
            </div>
            <div>
              <label
                htmlFor="popup-message"
                className="block text-sm font-medium text-white"
              >
                Meddelande
              </label>
              <textarea
                required
                rows={4}
                id="popup-message"
                name="message"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Avbryt
              </button>
              <button
                type="submit"
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-colors"
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
