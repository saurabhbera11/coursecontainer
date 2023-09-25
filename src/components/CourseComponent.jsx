
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Course from './Course';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CourseComponent() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <main>
        <Container maxWidth="xl" sx={{ py: 5}}>
            <Grid container spacing={2}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                  <Course/>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Footer/>                 
      </Box>
    </ThemeProvider>
  );
}