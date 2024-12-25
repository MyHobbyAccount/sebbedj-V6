import React from "react";
import { createPortal } from "react-dom";
import { Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import BookingTerms from "./BookingTerms";

const BookingDetailsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <Transition
      show={true}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-75 z-[100] overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle glass rounded-lg shadow-xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Bokningsvillkor 2025-01
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoClose size={24} />
              </button>
            </div>

            <BookingTerms />

            <div className="mt-8 text-center">
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-6 py-2 rounded-lg hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>,
    document.body
  );
};

export default BookingDetailsPopup;
