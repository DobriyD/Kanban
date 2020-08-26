import React, {Component} from "react";
import Card from '../Card'
import CardItem from "../Card-item";
import CardInput from "../CardInput";

class BacklogCard extends Component{
    state = {
        isShowInput: false,
        taskTitle: '',
    };

    showInput = () => {
        this.setState({
            isShowInput: true,
        })
    };

    taskInputHandler = e => {
        const taskTitle = e.target.value.trim();

        this.setState({
            taskTitle
        })
    };

    taskKeyHandler = e => {
        if (e.keyCode === 13) {
            this.saveTasks();
            return
        }

        if (e.keyCode === 27) {
            this.setState({
                taskTitle: '',
                isShowInput: false,
            })
        }
    };

    saveTasks = () => {
        const {taskTitle} = this.state;

        if (taskTitle.length < 1) {
            return;
        }

        this.props.addTask(this.state.taskTitle);
        this.setState({
            taskTitle: '',
            isShowInput: false
        })
    };

    deleteTask = () => {
        this.props.deleteTask();
    };

    render() {
        const {items} = this.props;
        const { isShowInput, taskTitle } = this.state;
        let listContent;

        if (items.length > 0) {
            listContent = items.map(({index, title}) => <CardItem key={index} id={index} title={title} deleteTask={this.deleteTask}/>);
        } else {
            listContent = <span>Task not found</span>;
        }

        const taskInput =
            <CardInput
                onChange={this.taskInputHandler}
                onBlur={this.saveTasks}
                onKeyDown={this.taskKeyHandler}
                value={taskTitle}
            />;

        return (
            <Card
                actionComponent={taskInput}
                isShowAction={isShowInput}
                showAction={this.showInput}
                title='Backlog'
                link='backlog'
                saveTasks={this.saveTasks}
            >
                { listContent }
            </Card>
        )

    }

}

export {BacklogCard};