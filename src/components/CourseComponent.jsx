import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import Course from "./Course";
import { getCourses } from "../api/courses/users/getcourses";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const defaultTheme = createTheme();

export default function CourseComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const courses = useSelector((state) => state.courseReducer.courses);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await getCourses(dispatch);
      if (response.message === "success") {
        setIsLoading(false)        
        // Set courses to the data received from the API
      } else if (response.message === "Unauthorized") {
        if (Cookies.get("user_details")) {
          Cookies.remove("user_details");
        }
        navigate("/signin");
      }
    } catch (e) {
      // Handle errors
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty array to run the effect once on component mount


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ width: "100%", margin: "0 auto" }}>
        <main>
          <Container maxWidth="xl" sx={{ py: 5 }}>
            {isLoading ? (
              // Render a CircularProgress loading icon
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Grid container spacing={2}>
                {courses.map((course) => (
                  <Grid item key={course._id} xs={12} sm={6} md={4} lg={3}>
                    <Course
                      title={course.title}
                      description={course.description}
                      price={course.price}
                      imageLink={course.imageLink}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
