import React, { Component } from 'react';
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {


    render() { 
        const {count, incrementCount} = this.props
        return ( 
            <React.Fragment>
                <button onClick={incrementCount}> Clicked {count} time </button>
            </React.Fragment>
         );
    }
}
 
export default UpdatedComponent(ClickCounter)