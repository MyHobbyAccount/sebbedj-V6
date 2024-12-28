import { sendEmail } from './email';

export const testEmailService = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message',
    service: 'Test Service'
  };

  try {
    const result = await sendEmail(testData);
    console.log('Email test result:', result);
    return result;
  } catch (error) {
    console.error('Email test failed:', error);
    throw error;
  }
};