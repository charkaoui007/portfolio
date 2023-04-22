import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import rea from './certif/rea.png';
import dev from './certif/dev.png';
import p from './certif/p.png';


function CertificationCard(props) {
    const { logo, title, issuer, date, id } = props;
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <span>{issuer}</span>
                    <br />
                    <span>Date de délivrance : {date}</span>
                    <br />
                    <span>Identifiant : {id}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Certifications() {
    const certifications = [
        {
            logo: rea,
            title: 'Full Stack dev REACT',
            issuer: 'University of HONG KONG',
            date: 'déc. 2022',
            id: 'E520-1780'
        },
        {
            logo: dev,
            title: 'Dev Ops , Cloud , Agile',
            issuer: 'IBM',
            date: 'mar. 2023',
            id: 'E520-1775'
        },
        {
            logo: p,
            title: 'Python',
            issuer: 'University of MICHIGAN',
            date: 'mai. 2022',
            id: 'SR6595546'
        }
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];


    const currentCertifications = certifications

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
        
        </div>
    );
}

export default Certifications;