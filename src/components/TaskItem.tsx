import React from "react";
import { Checkbox, ListItem, ListItemText } from "@mui/material";

interface TaskItemProps {
  task: { id: string; title: string; description: string; completed: boolean };
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <ListItem sx={{ px: 0 }}>
      <Checkbox checked={task.completed} onChange={onToggle} />
      <ListItemText primary={task.title} secondary={task.description} />
    </ListItem>
  );
};

export default TaskItem;
