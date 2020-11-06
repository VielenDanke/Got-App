import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import HideButton from '../hideButton'
import ErrorMessage from "../errorMessage"
import CharacterPage from "../characterPage"

export default class App extends Component {

    state = {
        visible: true,
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

    render() {
        const {visible, error} = this.state

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
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};