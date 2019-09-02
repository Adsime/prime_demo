import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Table } from 'reactstrap';

class PrimeFast extends Component {

    constructor() {
        super();
        let primes = Array(10000000).fill(1);
        primes[0] = primes[1] = 0;
        this.state = {
            current: 0,
            primes: primes
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
            if(primes[i]) {
                for(let j = i; j < primes.length; j+=i) {
                    primes[j] = 0;
                }
                this.setState({
                    current: i,
                    primes: primes
                })
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

export default PrimeFast;