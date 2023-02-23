

import styled from '@emotion/styled';
import { ButtonBase, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const Comment = (props) => {
    const { name, email, body, id } = props.comment;

    return (
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      style={{marginBottom:'20px'}}
    >
      <Grid container marginTop={1} spacing={2} >
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }} >
            <Img style={{borderRadius:'50%'}} alt="complex" src={`https://randomuser.me/api/portraits/men/${id}.jpg`} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               '{body}'
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

       
        // <div style={{marginLeft:'20px'}}>
        //     <h3>{name}</h3>
        //     <p>Email: {email}</p>
        //     <p>'{body}'</p>
        //     <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt="" />
        // </div>
       
        
    );
};

export default Comment;