import axios from 'axios';

export default async function signIn({ email, password }) {
  const url = 'http://localhost:3000/users/login';
  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      // Successful request, you can access the access token from the response data
      const cookie = {accessToken:response.data.accessToken,firstname:response.data.firstname,lastname:response.data.lastname,email:response.data.email};
      return {message:"Success",cookie};
    }else if(response.status === 401){
      return {message:"Unauthorized"}
    } else {
      // Handle other status codes or errors here
      console.error('Sign in failed:', response.status);
      return {message:"Error"}; // or throw an error
    }
  } catch (error) {
    // Handle any network or request errors here
    console.error('Network or request error:', error);
    throw error;
  }
}