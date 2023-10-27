import axios from "axios";
import Cookies from "js-cookie";
import {BASE_URL} from "../../config"
import { setCourses } from "../../../store/courseSlice/courseSlice";
// Function to get the access token from the "user details" cookie
const getAccessTokenFromCookie = () => {
  const user_details=Cookies.get("user_details");
  if(user_details){
    // console.log("getting access token from cookie");
    return JSON.parse(user_details)["accessToken"];
  }
};

export const getCourses = async (dispatch) => {
  console.log("get courses...");
  try {
    // console.log("inside try")
    const accessToken = getAccessTokenFromCookie();
    if (accessToken) {
      axios.interceptors.request.use((config) => {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        return config;
      });
      console.log("sending....");
      const response = await axios.get(BASE_URL + "users/courses");
      console.log("recieved....")

      // console.log(response);
      // Convert the object to an array
      const courses = Object.values(response.data.courses);
      dispatch(setCourses(courses));
      // dispatch(setCourses(courses))
      return {message:"success"};
    }else{
      return { message: "Unauthorized" };
    }
    // Use the response data here
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 403) {
      return { message: "Unauthorized" };
    }
    console.error("Error fetching courses:", error);
  }
};

