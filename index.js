import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';

const rooms = [
  { id: 1, status: 2, label: 'Tablet' },
  { id: 2, status: 1, label: 'Mobile Phone' },
  { id: 3, label: 'Wifi Audio' },
];
const completed =true;
const hidden=false;
class App extends Component {
  
  render() {
    return (
      
      <div className={true ? 'booking-complete'+ 'hide' : false ? 'booking-complete' : 'bookings'}>
      <span>Inspect the Element To CHECK</span>
        <List  data={rooms} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


/**
 * EXERCISES
 * 
 * 1) Add a "Room" field to each element of the array and display it near the label
 * 
 * TIPS: 
 
a) Update the rooms array:
 
 const rooms = [
  { id: 1, status: 2, label: 'Tablet', room: 'Living Room' },
  ...
  ]

b) Display the room near the label. Your list should be as the follow:

- Tablet (Living Room)
- Mobile Phone (Kitchen)
....

---------


 * 2) Display a different color in each ListItem in according with the status.
 * You can imagine it represents the battery status
 * 
 * 0: red , 1: orange, 2: green
 * 
 */