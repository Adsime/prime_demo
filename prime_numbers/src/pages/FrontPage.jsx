import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FrontPage extends Component {

    render() {
        return (
            <div className="container">

                <div className="alert alert-primary">
                    <div className="container text-center">
                        <h1>Velkommen!</h1>
                        <p>La oss lære om primtall! :)</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">


                        <div className="col-sm-6">
                            <div className="card border-success text-success">
                                <div className="card-header">1: Hvordan brukes primtall?</div>
                                <div className="card-body">
                                    <p className="card-text">Primtall er blant annet en støttestein for alle verdens banker! Vil du vite hvorfor?</p>
                                    <Link className="btn btn-success" to={"/primtall/"}>Lær mer!</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="card border-danger text-danger">
                                <div className="card-header">2: Kan vi finne primtall?</div>
                                <div className="card-body">
                                    <p className="card-text">Nå som dere har lært litt om hvordan primtall brukes. Er det en måte vi automatisk kan finne dem på?</p>
                                    <Link className="btn btn-danger" to={"/metoder/"}>Finn ut!</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card border-dark text-dark">
                                <div className="card-header">3: Vil du se hvor fort vi kan finne primtall?</div>
                                <div className="card-body">
                                    <p className="card-text">De to metodene beskrevet <Link to="/metoder/">her</Link> kan bli brukt til å generere primtall i høy fart.</p>
                                    <Link className="btn btn-dark" to={"/generator/"}>Ja!</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card border-info text-info">
                                <div className="card-header">4: Hvordan brukes primtall?</div>
                                <div className="card-body">
                                    <p className="card-text">Primtall er blant annet en støttestein for alle verdens banker! Vil du vite hvorfor?</p>
                                    <Link className="btn btn-info" to={"/tester/"}>Finn ut!</Link>
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