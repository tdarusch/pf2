import React from 'react';
import { Box, Typography, Divider, IconButton, Hidden, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextButton from '../../../Components/TextButton/TextButton';

const ProjectEntry = ({ title, dateRange, description, link='', isAdmin=true, handleDelete, handleEdit, index }) => {
  
  return(
    <Box display='flex' flexDirection='column' my={2} px={2} pb={1}>
      <Grid container>
        <Hidden smDown>
          <Grid item sm={6}>
            <Box display='flex' justifyContent='left'>
              <Typography fontSize={25} mr={2}>{title}</Typography>
              {isAdmin &&
                <>
                  <Box>
                    <IconButton onClick={() => {handleEdit(index)}}>
                      <EditIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton onClick={() => {handleDelete(index)}}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </>
              }
            </Box>
          </Grid>
            <Grid item sm={6}>
              <Box display='flex' justifyContent='right'>
                <Box display='flex' flexDirection='column' justifyContent='center' pt={0.5}>
                  <Typography>{`( ${dateRange} )`}</Typography>
                </Box>
              </Box>
            </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12}>
            <Box display='flex' justifyContent='center'>
              <Typography fontSize={25} mr={2}>{title}</Typography>
              {isAdmin &&
                <>
                  <Box>
                    <IconButton onClick={() => {handleEdit(index)}}>
                      <EditIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton onClick={() => {handleDelete(index)}}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </>
              }
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' justifyContent='center'>
              <Box display='flex' flexDirection='column' justifyContent='center' pt={0.5}>
                <Typography>{`( ${dateRange} )`}</Typography>
              </Box>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
      <Box my={0.5}>
        <Divider variant='fullWidth' />
      </Box>
      <Box>
        <Typography textAlign='left' fontSize={20}>
          {description}
        </Typography>
      </Box>
      {link && 
        <Box mt={1.5}>
          <TextButton
            text='Learn More'
            fontSize={15}
            ButtonProps={{
              component: Link,
              to: link,
              target: '_blank',
              padding: '0',
              endIcon: <OpenInNewIcon />
            }}
          />
        </Box>
      }
    </Box>
  );
};

export default ProjectEntry;