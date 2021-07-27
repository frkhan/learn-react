import './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import BoardList from './components/BoardList';
import NameForm from './components/NameForm';


class TheApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <BoardList/>
                </div>
                <NameForm name="Fazlur"/>
                <NameForm name="Ruku" />
                <NameForm name="Fowzia"/>
                <NameForm name="Farhan"/>
            </div>
        );
    }
}



let App = document.getElementById('app');

ReactDOM.render(<TheApp/>, App);

