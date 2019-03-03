import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class WorkLog extends Component {
    state = {
        entries: [
            { id: uuid(), title: 'Alarm high energy consumpton is triggered', message: 'Energy consumption of this asset is high. Please resolve this issue ASAP', time: 'time 1'},
            { id: uuid(), title: 'New alarm created', message: 'A new alarm \'Low Apparent Power\' has been created.', time: 'time 2'},
        ]
    }

    render() {
        const { id, title, message, time } = this.props;
        const { entries } = this.state;
        return (
            <Container>
                <Button
                    className="add-btn"
                    color="dark"
                    style={{marginBotton: '2rem' }}
                    onClick={() => {
                        const title = prompt('Submit Log');
                        if(title) {
                            this.setState(state => ({
                                entries: [...state.entries, { id: uuid(), title }]
                            }));
                        }
                    }}
                >Add Log
                </Button>

                <ListGroup marginBotton="0.5rem">
                    <TransitionGroup className="work-log">
                        {entries.map(({ id, title, message, time}) => ( 
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <h6>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={() => {
                                                this.setState(state => ({
                                                    entries: state.entries.filter(entries => entries.id !== id)
                                                }))
                                            }}
                                        >Delete</Button>
                                    </h6>
                                    <h3>{title}</h3>
                                    <h4>{message}</h4>
                                    <h6>{time}</h6>  
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default WorkLog;
