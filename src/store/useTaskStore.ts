import create from 'zustand';

export const useTaskStore = create((set) => ({
  values: {
    name: '',
    mierda: ''
  },
  // setValues: (key, value) =>
  //   set((state)=>{
  //     values: {
  //       ...state.values,
  //       [key]: value
  //     }
  //   })

  setValues: (key, value) =>
    set((state) => ({
      values: {
        ...state,
        [key]: value
      }
    }))
}));
