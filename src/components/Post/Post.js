import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title, body, id} = props.post;

    return (
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Social Buddy Post
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`details/${id}`}><Button size="small">Show Details</Button></Link>
      </CardActions>
    </Card>
    
    );
};

export default Post;