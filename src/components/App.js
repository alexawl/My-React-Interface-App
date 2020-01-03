import React, { Component } from 'react';

import '../css/App.css';

import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointmnents from './ListAppointments';


class App extends Component {
  render() {
    return (
       <main className="page bg-white" id="petratings">
        <div className="container">
          <div class="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />
                <SearchAppointments />
                <ListAppointmnents />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
