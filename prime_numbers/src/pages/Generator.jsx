import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

class Generator extends Component {

    constructor() {
        super();
        let primes = Array(10000000).fill(1);
        primes[0] = primes[1] = 0;
        this.state = {
            current: 0,
            primes: primes,
            count: 0,
            pps: 0,
            colors: false
        }
        this.test = this.test.bind(this);
    }

    componentDidMount() {
        let i = 2;
        let pps = 0;
        setInterval(() => {
            let primes = this.state.primes;
            if (primes[i]) {
                for (let j = i; j < primes.length; j += i) {
                    primes[j] = 0;
                }
                pps++;
                this.setState({
                    current: i,
                    primes: primes,
                    count: this.state.count + 1
                });
            }
            i++;
        });

        setInterval(() => {
            this.setState({ pps: pps });
            pps = 0;
        }, 1000);

        let text = document.getElementById("gen_text");
        setInterval(() => {
            text.style.color = this.state.colors ? "#"+((1<<24)*Math.random()|0).toString(16) : "black";
        }, 50)
    }

    test() {
        this.setState({colors: !this.state.colors});
    }

    render() {
        return (
            <div className="container">
                <Card color="white" className="shadow p-3 mb-5 rounded">
                    <CardBody>
                        <CardTitle tag="h3">La oss se hvor fort vi kan få dette til å gå...</CardTitle>
                        <hr></hr>
                        <CardText tag="div">
                            <div className="container">
                                <p id="gen_text" className="gen_numbers" onClick={this.test}>{this.state.current}</p>
                            </div>
                            <hr></hr>
                            <div className="container">
                                <h4>Det er ganske vanskelig å følge med! Under her kommer litt live statistikk :)</h4>
                                <ul>
                                    <li>Til nå har vi funnet {this.state.count} primtall.</li>
                                    <li>Vi finner ca {this.state.pps} primtall per sekund!</li>
                                </ul>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Generator;