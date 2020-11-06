import React, {Component} from 'react';
import './charDetails.css';
import gotService from "../../services/gotService"

export default class CharDetails extends Component {

    gotService = new gotService()

    state = {
        characetr: null
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar = () => {
        const {charId} = this.props
        
        if (!charId) {
            return
        }
        this.gotService.getCharacter(charId)
            .then(character => this.setState({character: character}))
    }

    render() {
        const {character} = this.state

        if (!character) {
            return <span className="select-error">Please select a character</span>
        }

        const {name, gender, born, died, culture} = character

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}