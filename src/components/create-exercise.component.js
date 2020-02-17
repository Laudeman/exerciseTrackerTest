import React, {Component} from 'react';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    
    OnChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    
    OnChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    OnChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    OnChangeDate(date) {
        this.setState({
            date: date
        })
    }

    OnSubmit(e) {
        e.preventDefault();
        
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)
    }



    render() {
        return (
            <div>
                <p>You are on the Create Exercise Component!</p>
            </div>
        )
    }
}