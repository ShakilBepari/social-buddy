import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Details = () => {
    const {id} = useParams();

    const [postDetails, setPostDetails] = useState([]);

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPostDetails(data))
    },[id])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[id])

    return (
        <>
            <Card sx={{ minWidth: 275 }} style={{marginBottom:'20px',textAlign:'center'}}>
             <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     Social Buddy Post
                </Typography>
                <Typography variant="h5" component="div">
                    {postDetails.title}
                 </Typography>
                 <Typography variant="body2">
                     {postDetails.body}
                </Typography>
             </CardContent>
            </Card>

       {
        comments.map(comment => <Comment key={comment.id} comment={comment} />)
       }

        </>
    );
};

export default Details;