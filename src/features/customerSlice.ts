import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Customer{
    id: string;
    name: string;
    food: string[];
}

interface AddFoodToCustomerPayload{
    food: string;
    id: string;
}

interface Todo{
  id?: number,
  title?:string,
  useId?:number,
  completed?: boolean
}

interface CustomerState{
    value: Customer[],
    todos: Todo[]
}

const initialState: CustomerState = {
    value: [],
    todos: []
  };

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
      addCustomer: (state, action: PayloadAction<Customer>) => {
        state.value.push(action.payload);
      },
      addFoodToCustomer: (state,action:PayloadAction<AddFoodToCustomerPayload> ) => {
        state.value.forEach(customer => {
            if(customer.id === action.payload.id){
                customer.food.push(action.payload.food)
            }
        })
      },
      getTodos: (state,action:PayloadAction<Todo[]>) => {
        state.todos=action.payload;
      }
    }})

export const {addCustomer,addFoodToCustomer,getTodos} = customerSlice.actions;
export default customerSlice.reducer;