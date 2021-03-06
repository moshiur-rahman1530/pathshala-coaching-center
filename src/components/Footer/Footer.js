import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useServices from '../Hooks/FetchServices';

const Footer = () => {
    const [services] = useServices([]);
    return (
        <>
            <div className="text-white bg-dark px-1 py-4">
                <Container>
                    <div className="row text-center text-md-start">
                        <div className="col-md-3">
                            {/* show all navlink in footer as quick link */}
                            <h4 className="my-4">QUICK LINKS</h4>
                            <div className="ms-2">
                                <NavLink
                                    style={{
                                        marginRight: '20px',
                                        color: "white",
                                        textDecoration: 'none',
                                    }}
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                                <br />
                                <NavLink
                                    style={{
                                        marginRight: '20px',
                                        color: "white",
                                        textDecoration: 'none',
                                    }}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                                <br />
                                <NavLink
                                    style={{
                                        marginRight: '20px',
                                        color: "white",
                                        textDecoration: 'none',
                                    }}
                                    to="/service"
                                >
                                    Services
                                </NavLink>
                                <br />
                                <NavLink
                                    style={{
                                        marginRight: '20px',
                                        color: "white",
                                        textDecoration: 'none',
                                    }}
                                    to="/news"
                                >
                                    News
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-3">
                            {/* show contact details in footer ui */}
                            <h4 className="my-4">CONTACT US</h4>
                            <small>Location: Kasba, Brahmanbaria</small>
                            <p>Mobile: +880-1713167969</p>
                            <p>Email: moshiur@gmail.com</p>
                            <p>website: www.pecedu.com</p>
                        </div>
                        <div className="col-md-3">
                            {/* 4 services name show in footer services section */}
                            <h4 className="my-4">SERVICES</h4>
                            {
                                services.slice(0, 4).map(service => (
                                    <p key={service.id}>{service.name}</p>
                                ))
                            }
                        </div>
                        <div className=" col-md-3">
                            {/* explain our office time */}
                            <h4 className="my-4">OFFICE HOURS</h4>
                            <p>Sunday to Wednesday: 10:00-7:00</p>
                            <p>SThusday: 10:00-5:00</p>
                            <p>Saturday: 10:00-2:00</p>
                            <p>Friday: <span className="bg-danger text-white p-1 rounded"> Closed</span></p>
                        </div>
                    </div>
                </Container>
            </div>
            {/* copyright section */}
            <div className="bg-secondary p-3 text-white">
                <h5>&copy; Copyright 2021 <span className="my-2 text-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Pathshala Coaching Center">PCC</span> Education Consultants. All rights reserved</h5>
            </div>
        </>
    );
};

export default Footer;