import React from 'react';
import TaskBoard from './TaskBoard';

class BoardList extends React.Component {

    render() {

        let boardItems = ['Thinking of doing','Will Do next','Working on it','Done wright','Done long time ago'];
        const listItems = boardItems.map(
            (boardName) =>
                <TaskBoard boardName={boardName}/>
        );

       //


        return (
            <div>
                <div className="flex-row">
                    {listItems}
                </div>
                <button id="add-board" type="button">+</button>
            </div>



    );
    }
}

export default BoardList;