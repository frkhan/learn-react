import React from 'react';

class TaskBoard extends React.Component {
    render() {
        return (
                <div className="col-4"> {this.props.boardName}</div>
            );
    }
}

export default TaskBoard;