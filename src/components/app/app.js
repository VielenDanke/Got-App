import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import HideButton from '../hideButton'
import ErrorMessage from "../errorMessage"

export default class App extends Component {

    state = {
        visible: true,
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        console.log("Error")
        this.setState({error: true})
    }

    onClickHide = () => {
        this.setState(({visible}) => {
            const newVisibility = !visible
            return {
                visible: newVisibility
            }
        })
    }

    onCharSelected = (id) => {
        this.setState({selectedChar: id})
    }

    render() {
        const {visible, selectedChar, error} = this.state

        if (error) {
            return <ErrorMessage/>
        }

        const component = visible ? <RandomChar/> : null

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {component}
                        </Col>
                    </Row>
                    <HideButton onClickHide={this.onClickHide}/>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};