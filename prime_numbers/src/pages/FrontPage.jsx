import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FrontPage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div class="container">

                <div class="alert alert-primary">
                    <div class="container text-center">
                        <h1>Velkommen!</h1>
                        <p>La oss lære om primtall! :)</p>
                    </div>
                </div>

                <div class="container">
                    <div class="row">


                        <div class="col-sm-6">
                            <div class="card border-success text-success">
                                <div class="card-header">1: Hvordan brukes primtall?</div>
                                <div class="card-body">
                                    <p class="card-text">Primtall er blant annet en støttestein for alle verdens banker! Vil du vite hvorfor?</p>
                                    <Link class="btn btn-success" to={"/primtall/"}>Lær mer!</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6">
                            <div class="card border-danger text-danger">
                                <div class="card-header">2: Kan vi finne primtall?</div>
                                <div class="card-body">
                                    <p class="card-text">Nå som dere har lært litt om hvordan primtall brukes. Er det en måte vi automatisk kan finne dem på?</p>
                                    <Link class="btn btn-danger" to={"/metoder/"}>Finn ut!</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card border-dark text-dark">
                                <div class="card-header">3: Vil du se hvor fort vi kan finne primtall?</div>
                                <div class="card-body">
                                    <p class="card-text">De to metodene beskrevet <Link to="/metoder/">her</Link> kan bli brukt til å generere primtall i høy fart.</p>
                                    <Link class="btn btn-dark" to={"/generator/"}>Ja!</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card border-info text-info">
                                <div class="card-header">4: Hvordan brukes primtall?</div>
                                <div class="card-body">
                                    <p class="card-text">Primtall er blant annet en støttestein for alle verdens banker! Vil du vite hvorfor?</p>
                                    <Link class="btn btn-info" to={"/tester/"}>Finn ut!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default FrontPage