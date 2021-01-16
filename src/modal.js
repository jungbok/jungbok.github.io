import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Modal extends Component{
    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const {label, onClick} = this.props;
        onClick(label);
    }

    render(){
        const {
            onClick,
            props: {
                label,
            },
        } = this;
        let className = 'label';
        let info = ""
        if (className == "Developer"){
            info = "I am a software engineer and developer studying in University of Southern California."
        }
        return(
            <p> {info} </p>
        );
    }
}

export default modal;
