import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Show } from './Show';





class RenderClass extends React.Component {

    render() {
        return (
            <div>
                <Show />
            </div>

        );
    }
}


ReactDOM.render(
    <RenderClass />,
    document.getElementById('root')
);


