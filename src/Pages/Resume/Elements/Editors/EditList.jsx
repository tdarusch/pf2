import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle,
  DialogContent, 
  DialogActions, 
  Button, 
  Box, 
  Typography,
  List,
  ListItem,
  IconButton,
  Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExperienceEditor from './ExperienceEditor';
import EducationEditor from './EducationEditor';
import ProjectEditor from './ProjectEditor';
import AccoladesEditor from './AccoladesEditor';
import SkillsEditor from './SkillsEditor';

const EditList = ({ open, formik, path, onCancel, onSave }) => {
  const [childEditorOpen, setChildEditorOpen] = useState(false);
  const [childEditorIndex, setChildEditorIndex] = useState(0);

  const handleEdit = (index) => {
    setChildEditorIndex(index);
    setChildEditorOpen(true);
  };

  const handleSubmit = (item) => {
    if(childEditorIndex !== -1) {
      setChildEditorOpen(false);
      formik.setFieldValue(`${path}[${childEditorIndex}]`, item);
    } else {
      setChildEditorOpen(false)
      const items = formik.values[path];
      items.unshift(item);
      formik.setFieldValue(`${path}`, items);
    }
  };

  const handleDelete = (index) => {
    const items = formik.values[path];
    items.splice(index, 1);
    formik.setFieldValue(`${path}`, items);
  };

  const handleAdd = () => {
    setChildEditorIndex(-1);
    setChildEditorOpen(true)
  }

  return(
    <Dialog open={open} fullWidth sx={{visibility: childEditorOpen ? 'hidden' : 'visible'}}>
      <DialogTitle>
        <Typography textAlign='center'>Editor</Typography>
      </DialogTitle>
      <DialogContent>
        <Box display='flex' justifyContent='center'>
          <IconButton
            onClick={handleAdd}
          >
            <AddBoxIcon />
          </IconButton>
        </Box>
        <List>
          {
            formik.values[path]?.map((item, i) => {
              return(
                <ListItem key={i}>
                  <Grid container>
                    <Grid item xs={10} direction='column' sx={{paddingTop: 0.5}}>
                      <Typography textOverflow='ellipsis'>{item.title || item.school}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Box display='flex' justifyContent='center' marginLeft={3.5}>
                        <IconButton sx={{height: 40}} onClick={() => handleEdit(i)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton sx={{marginLeft: 1, height: 40}} onClick={() => handleDelete(i)}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
              )
            })
          }
        </List>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='primary' onClick={onSave}>Submit</Button>
        <Button variant='outlined' color='secondary' onClick={onCancel}>Cancel</Button>
      </DialogActions>
      {path === 'experiences' &&
        <ExperienceEditor
          open={childEditorOpen}
          experience={childEditorIndex !== -1 ? formik.values[path][childEditorIndex] : null}
          onSave={handleSubmit}
          onCancel={() => setChildEditorOpen(false)}
        />
      }
      {path === 'education' &&
        <EducationEditor
          open={childEditorOpen}
          education={childEditorIndex !== -1 ? formik.values[path][childEditorIndex] : null}
          onSave={handleSubmit}
          onCancel={() => setChildEditorOpen(false)}
        />
      }
      {path === 'projects' &&
        <ProjectEditor 
          open={childEditorOpen}
          project={childEditorIndex !== -1 ? formik.values[path][childEditorIndex] : null}
          onSave={handleSubmit}
          onCancel={() => setChildEditorOpen(false)}
        />
      }
      {path === 'accolades' &&
        <AccoladesEditor 
          open={childEditorOpen}
          accolade={childEditorIndex !== -1 ? formik.values[path][childEditorIndex] : null}
          onSave={handleSubmit}
          onCancel={() => setChildEditorOpen(false)}
        />
      }
      {path === 'skills' &&
        <SkillsEditor 
          open={childEditorOpen}
          skill={childEditorIndex !== -1 ? formik.values[path][childEditorIndex] : null}
          onSave={handleSubmit}
          onCancel={() => setChildEditorOpen(false)}
        />
      }
    </Dialog>
  );
};

export default EditList;