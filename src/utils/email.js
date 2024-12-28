import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('Email configuration is missing');
    }

    const templateParams = {
      to_name: 'sebbedj',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      service_type: formData.service || 'General Inquiry',
      reply_to: formData.email
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email error:', error);
    return { 
      success: false, 
      error: 'Ett fel uppstod vid skickandet av meddelandet. Vänligen försök igen.'
    };
  }
};