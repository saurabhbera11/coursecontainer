import axios from 'axios';

export default async function signUp({ firstName, lastName, email, password }) {


  const url = 'http://localhost:3000/users/signup';

  try {
    const response = await axios.post(url, {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    });

    if (response.status === 201) {
      // User sign-up was successful
      return "Success";
      // You can handle further actions here, like updating the state with the new user information.
    }else if(response.status === 409) {
      return "User already exists"
    }
    else {
      return 'Error signing up: ', response.data;
    }
  } catch (error) {
    console.error('Error signing up: ', error.message);
    // Handle any network or other errors that may occur during the request.
  }
}