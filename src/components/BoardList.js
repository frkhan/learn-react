import React from 'react';
import TaskBoard from './TaskBoard';
import NameForm from "./NameForm";


class BoardList extends React.Component {

    constructor(props){
        super(props);
        this.state =  { boardItems : ['Thinking of doing','Will Do next','Working on it','Done wright','Done long time ago']};
        this.addBoard = this.addBoard.bind(this);
    }
    addBoard($boardName){
        //alert('Add a board!');

        let temp = this.state.boardItems;
        //temp.push("Another Entry");
        temp.push($boardName);
        this.setState({boardItems: temp });

    }

    render() {

        //let boardItems = ['Thinking of doing','Will Do next','Working on it','Done wright','Done long time ago','Sixth Entry'];
        const listItems = this.state.boardItems.map(
            (boardName) =>
                <TaskBoard boardName={boardName}/>
        );

       //


        return (
            <div>
                <div className="flex-row">
                    {listItems}
                </div>
                <button onClick={this.addBoard} id="add-board" type="button">+</button>
                <hr/>
                <NameForm name="Enter Board Name " onNewBoardSubmitted={this.addBoard}/>
            </div>



    );
    }
}

export default BoardList;