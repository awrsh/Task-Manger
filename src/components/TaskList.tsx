import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { toggleTaskCompletion, setFilter } from "../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";
import { Box, MenuItem, Select, Typography } from "@mui/material";

const TaskList: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "not_completed") return !task.completed;
    return true; 
  });

  return (
    <Box>
      <Select
        value={filter}
        onChange={(e) =>
          dispatch(
            setFilter(e.target.value as "all" | "completed" | "not_completed")
          )
        }
        displayEmpty
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="not_completed">Not Completed</MenuItem>
      </Select>

      {filteredTasks.length === 0 ? (
        <Typography variant="h6" color="textSecondary" mt={2}>
          No tasks to display
        </Typography>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => dispatch(toggleTaskCompletion(task.id))}
          />
        ))
      )}
    </Box>
  );
};

export default TaskList;
