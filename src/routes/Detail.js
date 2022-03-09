import { ListItemSecondaryAction } from '@material-ui/core';
import { Redirect} from 'react-router-dom';
import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state == undefined) {
            history.push('/');
        }
    }
    render(){
        return <span>Hello!</span>;
    }
}

export default Detail;