import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, CardTitle, CustomInput, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class Methods extends Component {

    constructor() {
        super();

        this.state = {
            slowArray: [],
            fastArray: [],
            n: 20,
            f_key: "fast_",
            s_key: "slow_",
            f_running: false,
            s_running: false,
            f_speed: 1000,
            s_speed: 1000
        }

        this.createArray(this.state.s_key).then(x => this.setState({ slowArray: x }));
        this.createArray(this.state.f_key).then(x => this.setState({ fastArray: x }));

        this.startFast = this.startFast.bind(this);
        this.startSlow = this.startSlow.bind(this);
        this.stopFast = this.stopFast.bind(this);
        this.stopSlow = this.stopSlow.bind(this)
        this.find = this.find.bind(this);
    }

    find(name) {
        return document.getElementById(name);
    }

    async createArray(name) {
        let retVal = [];
        for (let i = 1; i < this.state.n + 1; i++) {
            retVal.push(<p id={name + i} className="prime_base" style={{ display: "inline-block", marginLeft: 5, marginRight: 5, fontSize: "2em", color: (i == 1 ? "red" : "black") }}>{i}</p>)
        }
        return retVal;
    }

    async startFast() {
        if (this.state.f_running) return
        await this.setState({ f_running: true });
        for (let i = 1; i <= this.state.n; i++) {
            if (!this.state.f_running) {
                this.reset(this.state.fastArray);
                return
            };
            let elem = this.find(this.state.f_key + i);
            if (elem.style.color === "black") {
                await this.color(elem, "green");
                elem.className = "prime_base";
                for (let j = 2 * i; j <= this.state.n; j += i) {
                    if (!this.state.f_running) {
                        this.reset(this.state.fastArray);
                        return
                    };
                    elem = this.find(this.state.f_key + j);
                    await this.color(elem, "red");
                    elem.className = "prime_base";
                }
            } else {
                await this.color(elem, elem.style.color);
                elem.className = "prime_base";
            }
        }
    }

    async startSlow() {
        if (this.state.s_running) return
        await this.setState({ s_running: true });
        let primes = [];
        for (let i = 1; i <= this.state.n; i++) {
            if (!this.state.s_running) {
                this.reset(this.state.slowArray);
                return
            };
            let elem = this.find(this.state.s_key + i);


            if (elem.style.color === "black") {
                elem.className = "prime_highlight";
                await this.sleep(this.state.s_speed);
                let prime = true;

                for (let j = 0; j < primes.length; j++) {
                    if (!this.state.s_running) {
                        this.reset(this.state.slowArray);
                        return
                    };
                    let subElem = this.find(this.state.s_key + primes[j]);
                    subElem.className = "prime_highlight";
                    if (!(i % primes[j])) {
                        subElem.className = elem.className = "prime_match";
                        prime = false;
                        await this.sleep(this.state.s_speed);
                        elem.style.color = "red";
                        subElem.className = elem.className = "prime_base";
                        break;
                    }
                    await this.sleep(this.state.s_speed);
                    subElem.className = "prime_base";
                }
                if (prime) {
                    primes.push(i);
                    elem.style.color = "green";
                }
                elem.className = "prime_base"
            } else {
                elem.className = "prime_highlight";
                await this.sleep(this.state.s_speed);
                elem.className = "prime_base";
            }
        }
    }

    stopFast() {
        this.setState({ f_running: false });
        this.reset(this.state.fastArray);
    }

    stopSlow() {
        this.setState({ s_running: false });
        this.reset(this.state.slowArray);
    }

    reset(arr) {
        arr.forEach(x => {
            let elem = document.getElementById(x.props.id)
            elem.style.color = x.props.children == "1" ? "red" : "black";
            elem.className = "prime_base";
        });
    }

    async color(elem, color) {
        elem.className = "prime_highlight";
        await this.sleep(this.state.f_speed / 2);
        elem.style.color = color;
        await this.sleep(this.state.f_speed / 2);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        return (
            <div className="container">
                <Card color="white" className="shadow p-3 mb-5 rounded">
                    <CardBody>
                        <CardTitle tag="h3">Det er flere metoder for å finne primtall på. Her skal vi se på to!</CardTitle>
                        <hr style={{ borderWidth: "5px", borderColor: "#343a40" }}></hr>
                        <CardText tag="div">
                            <div>
                                <h5>Simpel, men treg tilnærming</h5>
                                <p>
                                    Den første metoden vi skal se på er den de fleste gjerne ser på først når det kommer til å finne primtall.
                                    I all hovedsak baserer den seg på faktorisering av tall, som vil si å finne primtallene et gitt tall er bygd opp av
                                    (også nevnt <Link to="/primtall/">her</Link>).
                                    Eksempelvis kan vi se at tallet 30 er bygd opp av tallene 2, 3 og 5 (2 * 3 * 5 = 30).
                                </p>
                                <p>
                                    Dette kan vi bruke til vår fordel. La oss si vi har en tom liste, der vi skriver ned primtall etterhvert som vi finner dem.
                                    La oss anta at vi har funnet 2, 3 og 5 allerede. Hvis vi nå skal sjekke om 7 er et primtall: først deler vi 7 på 2, så 3 og til sist 5.
                                    Vi ser at alle de tidligere primtallene produserer en restverdi etter vi har delt. Derved kan vi si at vi har funnet et nytt primtall.
                                    Eksempelvis kan vi dele 6 på 2 uten å få noen rest, og vi kan derved konkludere med at det ikke er et primtall.
                                </p>
                                <p>
                                    Under vil du finne en demo hvordan maskinen jobber basert på det vi har snakket om til nå. Under finner du
                                    skal forstå de ulike stegene i demoen.
                                </p>
                                <img style={{ display: "block", margin: "auto" }} src="https://i.imgur.com/7lnU4bP.png"></img>
                                <hr></hr>
                                <h5>Demo 1</h5>
                                {this.state.slowArray}
                            </div>
                            <div>
                                <Button style={{ marginRight: "5px" }} className="btn btn-success" onClick={this.startSlow}>Start</Button>
                                <Button style={{ marginRight: "5px" }} className="btn btn-danger" onClick={this.stopSlow}>Reset</Button>
                                <CustomInput style={{ display: "inline-block", width: "20%", marginRight: "5px" }} type="range" min="0.1" max="5" step="0.1"
                                    onInput={e => {
                                        this.setState({ s_speed: e.target.value * 1000 })

                                    }}
                                    id="exampleCustomRange" name="customRange" defaultValue={this.state.s_speed / 1000} />
                                <Label style={{ marginRight: "5px" }}>{this.state.s_speed / 1000 + " sekund(er) per steg"}</Label>
                            </div>

                            <hr style={{ borderWidth: "5px", borderColor: "#343a40" }}></hr>

                            <div>
                                <h4>Verdens raskeste metode?</h4>
                                <p>
                                    Den andre metoden vi skal se på er beviselig den raskeste måten å finne primtall på. Av grunner vi ikke skal gå inn på her,
                                    så er ikke dette måten man finner enorme primtall. Skal du til gjengjeld for eksempel prøve å finne alle primtall mellom 0 og 100,
                                    så finnes det ikke en raskere måte å gjøre det på.
                                </p>
                                <p>
                                    Det største problemet med denne metoden er at vi må sette en øvre grense når vi skal finne primtall. Vi må for eksempel si at 100 er
                                    er det lengste vi skal gå. Det er til gjengjeld essensielt for hvordan metoden fungerer.
                                </p>
                                <p>
                                    Vi starter med en liste med tall. Vi starter med å stryke ut 1, siden det ikke er et gyldig primtall. Deretter starter vi prosessen med å
                                    gå gjennom listen 1 etter 1. Metoden gjør antakelsen om at alle tall vi møter på, som vi ikke har sjekket er et primtall. Så når vi møter 2,
                                    markerer vi det som et primtall. Deretter kommer den viktige biten. Vi må jobbe oss igjennom hele listen, og stryke ut alle tall som kan deles på
                                    2 (altså 4, 6, 8, 10, ..., 100). Når det er gjort går vi videre til 3 og reperer samme prosess med å markere alle tall som kan deles på 3.
                                    Det neste tallet, 4, har vi allerede sjekket. Derfor kan vi bare hoppe forbi til 5. Slik fortsetter vi, helt frem til vår øvre grense er nådd.
                                </p>
                                <p>
                                    De samme diagrammene gjelder, utenom diagram 3 - den bruker vi ikke her.
                                </p>

                                <hr></hr>
                                <h5>Demo 2</h5>
                                {this.state.fastArray}

                            </div>
                            <div>
                                <Button style={{ marginRight: "5px" }} className="btn btn-success" onClick={this.startFast}>Start</Button>
                                <Button style={{ marginRight: "5px" }} className="btn btn-danger" onClick={this.stopFast}>Reset</Button>
                                <CustomInput style={{ display: "inline-block", width: "20%", marginRight: "5px" }} type="range" min="0.1" max="5" step="0.1"
                                    onInput={e => {this.setState({ f_speed: e.target.value * 1000 })}}
                                    id="exampleCustomRange" name="customRange" defaultValue={this.state.f_speed / 1000} />
                                <Label style={{ marginRight: "5px" }}>{this.state.f_speed / 1000 + " sekund(er) per steg"}</Label>
                            </div>

                        </CardText>

                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Methods;