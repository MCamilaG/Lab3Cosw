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
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export class TodoApp extends React.Component {

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
    
            <React.Fragment>
                <CssBaseline />
                    <main className="layout">
                        <Paper className="paper">
                            <Avatar>
                                <AssignmentIcon />
                            </Avatar>           
                            <Typography variant="headline">New TODO</Typography>
                            <form onSubmit={this.handleSubmit} className="form">
                                <FormControl margin="normal" required fullWidth> 
                                    <InputLabel htmlFor="text">Text:</InputLabel>
                                    <Input 
                                        id="text" 
                                        name="text" 
                                        autoComplete="text" 
                                        autoFocus 
                                        onChange={this.handleTextChange} 
                                        value={this.state.text}
                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="priority">Priority:</InputLabel>
                                    <Input 
                                        id="priority" 
                                        name="priority"
                                        type="number" 
                                        autoComplete="priority" 
                                        autoFocus 
                                        onChange={this.handlePriorityChange}
                                        value={this.state.priority}
                                    />
                                </FormControl>  
                                <DatePicker
                                    id="due-date"
                                    selected={this.state.dueDate}
                                    placeholderText="Due date"
                                    onChange={this.handleDateChange}>
                                </DatePicker>
                                <br>
                                </br>                                
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                >  
                                    Add Task Number  {this.state.items.length + 1}
                                </Button>
                            </form>
                        </Paper>
                    </main>
            </React.Fragment>
            
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