import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Table } from 'reactstrap';

class PrimeNumbers extends Component {

    render() {
        return (
            <div class="container">
                <Card color="white" className="shadow p-3 mb-5 rounded">
                    <CardBody>
                        <CardTitle tag="h3">Så, hvordan brukes primtall?</CardTitle>
                        <CardText tag="div">
                            <p>test</p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>

        )
    }
}

export default PrimeNumbers;