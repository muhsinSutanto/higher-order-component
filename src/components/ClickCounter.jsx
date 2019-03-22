import React, { Component } from 'react';
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {


    render() { 
        const {count, incrementCount, name} = this.props
        return ( 
            <React.Fragment>
                <button onClick={incrementCount}> {name} Clicked {count} time  </button>
            </React.Fragment>
         );
    }
}
 
export default UpdatedComponent(ClickCounter)