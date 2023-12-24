import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = ({ projects }) => {
  
  return(
    <Grid container>
      {projects.map((proj, i) => {
        return(
          <Grid item xs={12} marginY={1} key={i}>
            <Box display='flex' justifyContent='left' flexBasis='auto'>
              <Box display='flex' flexDirection='column' justifyContent='top' flexGrow={1}>
                <Box display='flex' justifyContent='space-between' flexGrow={1}>
                  <Box display='flex' justifyContent='center'>
                    <Box display='flex' justifyContent='center' flexDirection='column' mr={0.5}>
                      <Typography fontSize={20}>{proj.title}</Typography>
                    </Box>
                    {proj.link &&
                      <IconButton
                        href={proj.link}
                        target='_blank'
                      >
                        <LaunchIcon />
                      </IconButton>
                    }
                  </Box>
                  <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Typography fontSize={15}>{`${proj.startYear}-${proj.endYear || ''}`}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={17.5}>{proj.subtitle}</Typography>
                  <Typography fontSize={15}>{proj.description}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default Projects;

// {
//   "title": "Undergraduate Research",
//   "subtitle": "Simulating Wound Healing With Variable Intercellular Contact Adhesion",
//   "description": "Worked under Dr. Malmi-Kakkada & Dr. Jonathan Dawson of the Augusta University department of Chemistry & Physics to computationally model & explore the influence of cellular adhesion on the wound healing process.",
//   "startYear": 2022,
//   "endYear": 2023,
//   "link": "https://github.com/tdarusch/2022_WoundSimulations"
// },