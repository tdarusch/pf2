import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Skills = ({ skills }) => {
  
  return(
    <Grid container spacing={2} justifyContent='center'>
        {skills.map((skill, i) => {
          return(
            <Grid item xs={3} key={i}>
              <Box display='flex' flexDirection='column' justifyContent='top'>
                <Typography textAlign='center' fontSize={20}>{skill.title}</Typography>
                <Typography textAlign='center' fontSize={15}>{skill.description}</Typography>
              </Box>
            </Grid>
          )
        })}
    </Grid>
  );
};

export default Skills;