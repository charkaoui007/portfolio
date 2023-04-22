import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Eos et dolor consetetur tempor ea.",
            etablissement: "Bajo perfil poniendo de desnuda.",
            annees: "2014 - 2017",
        },
        {
            diplome: "Et clita lorem at labore.",
            etablissement: "Bonaces azurs dormir lumineux plus niais d'eau et mes, la fileur de.",
            annees: "2006 - 2009",
        },
        {
            diplome: "Noch in ihr träne mich widerklang.",
            etablissement: "Who moths drowsy seemed from so of visit. Dote at.",
            annees: "2004 - 2006",
        },
     
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
