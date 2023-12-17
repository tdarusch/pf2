import React, { useState } from "react";
import PageContainer from "../../Components/PageContainer/PageContainer";
import ProjectEntry from "./ProjectEntry/ProjectEntry";
import testProjects from "../../Assets/Projects";
import { IconButton, Box } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProjectDialog from "./ProjectDialog/ProjectDialog";

const Projects = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [project, setProject] = useState();
  const isAdmin = true;

  const handleCancel = () => {
    setDialogOpen(false);
    setProject();
  }

  const handleSubmit = (values) => {
    //todo
    console.log(values);
    handleCancel();
  }

  const handleDialogOpen = () => {
    setDialogOpen(true);
  }

  const handleEdit = (index) => {
    console.log(index);
    setProject(testProjects[index]);
    handleDialogOpen();
  }

  const handleDelete = (index) => {
    //todos
  }

  return(
    <PageContainer transparent>
      {isAdmin &&
        <Box display='flex' justifyContent='right' px={2}>
          <IconButton onClick={handleDialogOpen}>
            <AddBoxIcon />
          </IconButton>
        </Box>
      }
      {testProjects.map((project, i) => {
        return(
          <ProjectEntry key={project.id} 
            title={project.title}
            dateRange={project.dateRange}
            description={project.description}
            link={project.link}
            index={i}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
      <ProjectDialog 
        open={dialogOpen}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        project={project}
      />
    </PageContainer>
  );
};

export default Projects;

