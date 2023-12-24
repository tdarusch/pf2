import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Education = ({ education }) => {
  
  return(
    <Grid container>
    {education.map((ed, i) => {
      return(
        <Grid item xs={12} marginY={1} key={i}>
          <Box display='flex' justifyContent='left' flexBasis='auto'>
            <Box display='flex' flexDirection='column' justifyContent='top' flexGrow={1}>
              <Box display='flex' justifyContent='space-between' flexGrow={1}>
                <Typography fontSize={20}>{ed.school}</Typography>
                <Box display='flex' flexDirection='column' justifyContent='center'>
                  <Typography fontSize={15}>{`${ed.startYear}-${ed.endYear || ''}`}</Typography>
                </Box>
              </Box>
              <Box>
                <Typography fontSize={17.5}>{ed.degree}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      )
    })}
  </Grid>
  );
};

export default Education;