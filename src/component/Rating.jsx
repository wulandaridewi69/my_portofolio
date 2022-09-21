import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const BasicRating = (props) => {

  return (
    <>
      <Typography component="legend">{props.name}</Typography>
      <Rating name="read-only" value={props.value} readOnly />
    </>
  );
}

export default BasicRating;
