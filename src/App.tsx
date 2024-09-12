import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Box sx={{display : 'flex' , flexDirection: 'column', justifyContent: 'center' , alignItems: 'center'}}>
        <h1>Task Manager</h1>
        <AddTaskForm />
      </Box>
    </Provider>
  );
};

export default App;
