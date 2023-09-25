import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Course({title,descripton,price="10RS",imageLink}) {
  return (
    <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}
  >
    <CardMedia
      component="div"
      sx={{
        // 16:9
        pt: '56.25%',
      }}
      image={imageLink}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography>
        {descripton}
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        {price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View</Button>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card>
  )
}

export default Course