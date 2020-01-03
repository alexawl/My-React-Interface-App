import React, {Component} from 'react';

class ListAppointmnents extends Component {
    render() {
        const ListItems = this.props.appointments.map(item => (
        <div>
            <div>{item.petName}</div>
            <div>{item.ownerName}</div>
        </div>
    ))
        return <div>{ListItems}</div>;
    }
}

export default ListAppointmnents;