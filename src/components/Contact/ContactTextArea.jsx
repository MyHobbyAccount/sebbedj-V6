import React, { useState } from 'react';

const ContactTextArea = ({ id, name, label, rows }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <label 
        htmlFor={id} 
        className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
          isFocused ? 'text-neon-pink' : 'text-gray-300'
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        required
        className="w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white px-4 py-3 
                 focus:ring-2 focus:ring-neon-purple focus:border-transparent
                 transition-all duration-300 backdrop-blur-sm
                 hover:border-gray-600 resize-y"
      ></textarea>
    </div>
  );
};

export default ContactTextArea;