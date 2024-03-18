import BookingForm from "./BookingForm"
import React, { useState, useReducer } from 'react';

const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, just return the same available times regardless of the date
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      default:
        return state;
    }
  };

export default function BookingPage() {
    const initializeTimes = () => [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
      ];
      const updateTimes = (state, action) => {
        // For now, return the same available times regardless of the date
        return initializeTimes();
      };
    const [availableTimes, dispatch] = useReducer(initializeTimes,[],updateTimes);

      // Define state variables for form fields
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
      const [guests, setGuests] = useState(1);
      const [occasion, setOccasion] = useState('');
    return(
        <div className="booking-form">
           <BookingForm 
      date={date} setDate={setDate} 
      time={time} setTime={setTime} 
      guests={guests} setGuests={setGuests} 
      occasion={occasion} setOccasion={setOccasion} 
      availableTimes={availableTimes} dispatch={dispatch}
    />
        </div>
    )
}