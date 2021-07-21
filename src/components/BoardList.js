import React from 'react';
import TaskBoard from './TaskBoard';

class BoardList extends React.Component {

    render() {

        let boardItems = ['Will Do next','Working on it','Done wright'];
        const listItems = boardItems.map(
            (boardName) =>
                <TaskBoard boardName={boardName}/>
        );

       // <button id=add-board type="button">+</button>



        return (
                <div className="flex-row">{listItems}

                </div>
        );
    }
}

export default BoardList;