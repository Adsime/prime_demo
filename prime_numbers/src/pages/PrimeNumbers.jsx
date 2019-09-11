import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

class PrimeNumbers extends Component {

    render() {
        return (
            <div className="container">
                <Card color="white" className="shadow p-3 mb-5 rounded">
                    <CardBody>
                        <CardTitle tag="h3">Så, hvordan brukes primtall?</CardTitle>
                        <hr></hr>
                        <CardText tag="div">
                            <p>
                                Før vi går inn på hvordan primtall brukes, må vi huske hvordan faktorisering av tall fungerer. Faktorisering av tall går
                                ut på å finne alle primtallene et gitt tall er bygd opp av. Eksempelvis er 4 bygd opp av 2 * 2, og 30 er bygd opp av 2 * 3 * 5.
                            </p>
                            <p>
                                Hvis vi prøver oss på et lite tankeeksperiment: gang sammen 7 * 11 * 13. Det er ikke lett, men det lar seg gjøre på relativt kort tid,
                                spesielt hvis man har penn og papir (eller en kalkulator!).
                            </p>
                            <p>
                                La oss nå prøve å gå andre veien. Klarer du å faktorisere 1309? Selv med penn og papir er dette en oppgave som krever mer innsats og flere
                                steg. En kalkulator hjelper heller ikke så mye i dette tilfellet. Ja, man kan prøve seg frem helt til man finner primtallene, men det tar tid
                                og ikke minst mange steg.
                            </p>
                            <p>
                                Dette prinsippet bruker man blant annet i banker, der kryptering av meldinger og informasjon er viktig for personlig sikkerhet.
                                Kryptering er det å gjøre noe uleselig ved å "låse" data ved bruk av en "nøkkel". Kort fortalt brukes to eller fler enorme primtall,
                                ganget sammen, som nøkkel til å "låse" data og "låse opp" kryptert data.
                            </p>
                            <hr></hr>
                            <div style={{ textAlign: "center" }} >
                                <h4>Her kan du se noen andre spennende fakta om primtall!</h4>
                                <iframe id="yt" title="yt" width="720" height="405" src="https://www.youtube.com/embed/qQYeYyM1k9o" frameborder="0"></iframe>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>

        )
    }
}

export default PrimeNumbers;