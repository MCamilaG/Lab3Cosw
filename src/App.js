import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Login } from './component/Login';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <br/>
                <br/>
            <React.Fragment>
                <CssBaseline />
                    <main className="layout">
                        <Paper className="paper">
                            <Avatar>
                                <AssignmentIcon />
                            </Avatar>
                            <form onSubmit={this.handleSubmit} className="form">
                            <Typography variant="headline">New TODO</Typography>
                                
                                <label htmlFor="text" className="right-margin">
                                    Text:
                                </label>

                                <input
                                    id="text"
                                    onChange={this.handleTextChange}
                                    value={this.state.text}>
                                </input>

                                <br/>
                                <br/>
                                <label htmlFor="priority" className="right-margin">
                                    Priority:
                                </label>

                                <input
                                    id="priority"
                                    type="number"
                                    onChange={this.handlePriorityChange}
                                    value={this.state.priority}>
                                </input>
                                <br/>
                                <br/>

                                <DatePicker
                                    id="due-date"
                                    selected={this.state.dueDate}
                                    placeholderText="Due date"
                                    onChange={this.handleDateChange}>
                                </DatePicker>
                                <br/>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                >  
                                    Add #{this.state.items.length + 1}
                                </Button>
                            </form>
                        </Paper>
                    </main>
            </React.Fragment>
                <Login/>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;
