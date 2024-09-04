export const sendEmail = async (emailData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      console.log('response from mail sender', response);
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }