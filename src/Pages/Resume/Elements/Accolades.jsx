import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Accolades = ({ accolades }) => {
  
  return(
    <Grid container>
      {accolades.map((acc, i) => {
        return(
          <Grid item xs={12} marginY={1} key={i}>
            <Box display='flex' justifyContent='left' flexBasis='auto'>
              <Box display='flex' flexDirection='column' justifyContent='top' flexGrow={1}>
                <Box display='flex' justifyContent='space-between' flexGrow={1}>
                  <Typography fontSize={20}>{acc.title}</Typography>
                  <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Typography fontSize={15}>{acc.year}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={17.5}>{acc.institution}</Typography>
                  <Typography fontSize={15}>{acc.description}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default Accolades;

// "accolades": [
//   {
//     "title": "Summer Scholar",
//     "institution": "Augusta University",
//     "description": "Awarded to undergraduate students who complete Augusta University's Summer Scholars Program. The SSP pairs student researchers to mentors and culminates in a presentation at an interdisciplinary symposium at the end of the 12-week program.",
//     "year": "2022, 2023"
//   },
//   {
//     "title": "National AP Scholar",
//     "institution": "Collegeboard",
//     "description": "Awarded to students in the United States who receive an average score of at least 4 on all AP Exams taken, and scores of 4 or higher on eight or more of these exams.",
//     "year": "2019"
//   },
//   {
//     "title": "AP Scholar w/ Distinction",
//     "institution": "Collegeboard",
//     "description": "Awarded to students who receive an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams.",
//     "year": "2018, 2019, 2020"
//   }
// ],