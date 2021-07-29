import './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import BoardList from './components/BoardList';



class TheApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <BoardList/>
                </div>
            </div>
        );
    }
}



let App = document.getElementById('app');

ReactDOM.render(<TheApp/>, App);

