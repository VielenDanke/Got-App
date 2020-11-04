import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import HideButton from '../hideButton'

export default class App extends Component {

    state = {
        visible: true
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
        const {visible} = this.state

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
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};