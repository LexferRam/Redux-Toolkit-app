import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import { getTodos } from "./features/customerSlice";

function App() {

  const dispatch = useDispatch()
  const [reservationNameInput, setReservationNameInput] = useState("")

  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customer.value)
  const todos = useSelector((state: RootState) => state.customer.todos)


  const handleAddReservations = () => {
    if (!reservationNameInput) return;

    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
  }

  useEffect(() => {
    (async function():Promise<void>{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      dispatch(getTodos(data))
    })()
  },[dispatch])

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, i) => (
                <ReservationCard name={name} index={i} key={i}/>
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                key={customer.id}
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
        <div>
          {todos.map((todo,i)=> (
            <h3 key={i}>{todo.title}</h3>
          ))}
        </div>
    </div>
  );
}

export default App;