import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  filter: 'all' | 'completed' | 'not_completed';
}

const loadTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState: TasksState = {
  tasks: loadTasksFromLocalStorage(),
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string; description: string }>) => {
      const newTask: Task = {
        id: new Date().toISOString(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.tasks.push(newTask);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'not_completed'>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTaskCompletion, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
