
import React from 'react';

const Comment = (props) => {
    const { name, email, body } = props.comment;

    return (
        <div style={{marginLeft:'20px'}}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>'{body}'</p>
        </div>
    );
};

export default Comment;