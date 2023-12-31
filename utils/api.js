// This is a simplified example of the API function
export async function registerUser(userData) {
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  