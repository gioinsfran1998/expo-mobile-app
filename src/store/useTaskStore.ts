import create from 'zustand';

export const useTaskStore = create((set) => ({
  values: {
    firstName: '',
    lastName: '',
    location: '',
    task: '',
    priority: ''
  },
  setValue: (key, value) =>
    set((state) => ({
      values: {
        ...state.values,
        [key]: value
      }
    })),
  setValues: (value) =>
    set((state) => ({
      values: {
        ...state.values,
        ...value
      }
    }))
}));
