import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { addTask } from "../features/tasks/tasksSlice";
import TaskList from "./TaskList";

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && description) {
      dispatch(addTask({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Box sx={{ border: "1px solid #efefef", width: "50%", p: 5 }}>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <TextField
          sx={{ width: "50%" }}
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          sx={{ width: "50%" }}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box sx={{marginBlock : 2, display : 'flex', justifyContent : 'center'}}>
        <Button variant="contained" onClick={handleSubmit}>
          Add Task
        </Button>
      </Box>
      <TaskList />

    </Box>
  );
};

export default AddTaskForm;
