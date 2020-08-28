import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header'
import Footer from "./components/Footer";
import {BacklogCard} from './components/kanban-items'
import {FinishedCard, InProgressCard, ReadyCard} from './components/kanban-items/cards'
import TasksList from "./components/TaskList";
import LocalStorageService from '../src/localStorageService'

class App extends Component {

    lsService = new LocalStorageService();

    state = {
        backlog: [],
        ready: [],
        inProgress: [],
        finished: []
    };

    componentDidMount() {
        const backlog = this.lsService.getBacklog();
        const ready = this.lsService.getReady();
        const inProgress = this.lsService.getInProgress();
        const finished = this.lsService.getFinished();

        this.setState({
            backlog,
            ready,
            inProgress,
            finished
        })
    };

    addBacklog = title => {
        this.lsService.addBacklog(title);
        const backlog = this.lsService.getBacklog();

        this.setState({
            backlog
        })
    };

    addReady = id => {
        this.lsService.updateTaskById(id, 'ready');
        const ready = this.lsService.getReady();
        const backlog = this.lsService.getBacklog();

        this.setState({
            ready,
            backlog
        })
    };

    addInProgress = id => {
        this.lsService.updateTaskById(id, 'in_progress');
        const ready = this.lsService.getReady();
        const inProgress = this.lsService.getInProgress();

        this.setState({
            ready,
            inProgress
        })
    };

    addFinished = id => {
        this.lsService.updateTaskById(id, 'finished');
        const finished = this.lsService.getFinished();
        const inProgress = this.lsService.getInProgress();

        this.setState({
            inProgress,
            finished
        })
    };

    deleteAllTasks = () => {
        localStorage.removeItem('tasks');
        this.setState({
            backlog: [],
            ready: [],
            inProgress: [],
            finished: []
        })
    };

    deleteTask = event => {
        const idElem = event.target.id;
        this.state.backlog.splice(+idElem, 1);
        this.setState({
            tasks: this.state.tasks,
        });
        localStorage.setItem('tasks', this.state.tasks);
        console.log(this.state)
    };

    render() {
        const { backlog, inProgress, ready, finished } = this.state;
        return (
            <div className='app'>
                <Router>
                    <Header/>
                    <div className='board'>
                        <Route path='/' exact>
                            <BacklogCard addTask={this.addBacklog} items={backlog} deleteTask={this.deleteTask}/>
                            <ReadyCard addTask={this.addReady} items={ready} selectItems={backlog} deleteTask={this.deleteTask}/>
                            <InProgressCard addTask={this.addInProgress} items={inProgress} selectItems={ready} deleteTask={this.deleteTask}/>
                            <FinishedCard addTask={this.addFinished} items={finished} selectItems={inProgress} deleteTask={this.deleteTask}/>
                        </Route>
                        <Route
                            path='/:type'
                            render={ ({match}) => {
                                const { type } = match.params;
                                return <TasksList type={type}/>
                            }}
                        />
                    </div>
                    <div className='refresh'>
                        <button className='delete_button' onClick={this.deleteAllTasks}>
                            Refresh
                        </button>
                    </div>
                    <Footer active={backlog.length} finished={finished.length} name='Dobriy'/>
                </Router>
            </div>
        );
    }
}

export default App;
