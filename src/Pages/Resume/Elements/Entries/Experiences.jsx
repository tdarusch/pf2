import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const Experiences = ({ experiences }) => {
  
  return(
    <Grid container>
      {experiences.map((exp, i) => {
        return(
          <Grid item xs={12} marginY={1} key={i}>
            <Box display='flex' justifyContent='left' flexBasis='auto'>
              <Box display='flex' flexDirection='column' justifyContent='top' flexGrow={1}>
                <Box display='flex' justifyContent='space-between' flexGrow={1}>
                  <Typography fontSize={20}>{exp.title}</Typography>
                  <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Typography fontSize={15}>{`${exp.startDate}-${exp.endDate || 'Present'}`}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={17.5}>{exp.company}</Typography>
                  <Typography fontSize={15}>{exp.description}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default Experiences;