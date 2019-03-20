import React, { Component } from 'react';
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {

    render() { 
        const {count, incrementCount} = this.props
        return ( 
            <React.Fragment>
                <h1 onMouseOver={incrementCount}> Hovered {count} time</h1>
            </React.Fragment>
         );
    }
}
 
export default UpdatedComponent(HoverCounter)