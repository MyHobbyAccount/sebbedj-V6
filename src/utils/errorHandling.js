export const handleGlobalError = (error, customMessage = null) => {
  console.error('An error occurred:', error);
  return {
    success: false,
    message: customMessage || 'An unexpected error occurred. Please try again.'
  };
};

export const validateEnvVariables = () => {
  const required = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY'
  ];
  
  const missing = required.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    console.warn('Missing environment variables:', missing.join(', '));
    return false;
  }
  
  return true;
};