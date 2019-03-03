import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import WorkLog from "./components/WorkLog";
import WorkForm from "./components/WorkForm";
import uuid from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    // this.deactivateSeats = this.deactivateSeats.bind(this);
    this.state = {
        entries: [
            { id: uuid(), title: 'Alarm high energy consumpton is triggered', message: 'Energy consumption of this asset is high. Please resolve this issue ASAP', time: 'time 1'},
            { id: uuid(), title: 'New alarm created', message: 'A new alarm \'Low Apparent Power\' has been created.', time: 'time 2'},
        ]
    }
  }

  render() {
    return (
      <div className="App">
        <AppNavBar />
        <WorkForm />
        <WorkLog />
      </div>
    );
  }
}

export default App;
