import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Table } from 'reactstrap';

class PrimeSlow extends Component {

    constructor() {
        super();
        this.state = {
            current: 0,
            primes: [],
        }
    }

    async start() {
        for(let i = 2; i < 100000; i++) {
            let primes = this.state.primes;
            let prime = true;
            for(let j = 0; j < primes.length; j++) {
                if(!(i % primes[j])) {
                    prime = false;
                    break;
                }
            }
            if(prime) {
                primes.push(i)
                const newState = {
                    current: i,
                    primes: primes,
                };
                this.setState(newState);
            }
        }
    }

    componentDidMount() {
        let i = 2
        setInterval(() => {
            let primes = this.state.primes;
            let prime = true;
            for(let j = 0; j < primes.length; j++) {
                if(!(i % primes[j])) {
                    prime = false;
                    break;
                }
            }
            if(prime) {
                primes.push(i)
                const newState = {
                    current: i,
                    primes: primes,
                };
                this.setState(newState);
            }
            i++;
        });
    }

    render() {
        return (
            <div class="container">
                <p>{this.state.current}</p>
            </div>

        )
    }
}

export default PrimeSlow;