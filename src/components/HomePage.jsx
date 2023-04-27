import React from 'react';
import './Style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {
  const navigate = useNavigate()    
  return (
    <div>
      <Box sx={{ width: '90%' }} margin='30px auto'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {props.cards.map((item,index)=>(
        <Grid xs={4} key={index}>
    <Card sx={{ maxWidth: 428}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name} {item.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>navigate(`/details/${item.id}`)} size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
        </Grid>
      ))}
      </Grid>
    </Box>
    </div>
  )
}

export default HomePage