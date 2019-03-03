import React, { Component } from 'react';
import { Container, Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import uuid from 'uuid';

class WorkForm extends Component {
    state = {
        entries: [
            { id: uuid(), title: 'Test 1', message: 'message 1', time: 'placeholder'},
            { id: uuid(), title: 'Test 2', message: 'message 1', time: 'placeholder'},
            { id: uuid(), title: 'Test 3', message: 'message 1', time: 'placeholder'},
            { id: uuid(), title: 'Test 4', message: 'message 1', time: 'placeholder'}
        ]
    }

    render() {
    return (
        <Container>
            <Card>
                <Form>
                    <FormGroup>
                        <Label for="exampleText">Work Log</Label>
                        <Input 
                            type="textarea" 
                            name="text" 
                            id="exampleText" 
                            placeholder="Log Title"
                            margin-bottom="2rem"
                        />
                        <Input 
                            type="textarea" 
                            name="text" 
                            id="exampleText" 
                            placeholder="Log Message"
                        />
                    </FormGroup>
                    <Button
                        margin-bottom="0.5rem"
                    >Add Log</Button>
                </Form>
            </Card>
        </Container>
    );
  }

}

export default WorkForm;