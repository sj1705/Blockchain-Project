import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
    const history = useHistory();
    const redirect_to_roles = () => {
        history.push("/roles");
    };
    const redirect_to_addmed = () => {
        history.push("/addmed");
    };
    const redirect_to_supply = () => {
        history.push("/supply");
    };
    const redirect_to_track = () => {
        history.push("/track");
    };
    return (
        <div>
            <div className="text-center">
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <a className="navbar-brand" href="/">
                        <img
                            src={require("./assets/images/blockpharm-logo2.png").default}
                            width="60em"
                            height="60em"
                            className="d-inline-block mx-auto align-top"
                            alt="BlockPharm logo"
                        />
                        <strong style={{ fontSize: "1.8em" }}>
                            <span style={{ color: "#146C94" }}> Block</span>
                            <span style={{ color: "#F45050" }}>Pharm</span>
                        </strong>
                    </a>
                </nav>
            </div>
            <div className="Frontal">
                <br />
                <h4 style={{ fontStyle: "italic", color: "green" }}>
                    Blockchain technology to develop a safe and transparent supply chain
                    management solution for the pharmaceutical business
                </h4>

                <br />
            </div>

            <div style={{ width: "70%", margin: "auto" }}>
                <Table striped bordered hover variant="light" style={{ opacity: 0.9 }}>
                    <thead>
                    <tr>
                        <th>Steps</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            Owner Should Register Raw material suppliers ,Manufacturers,
                            Distributors and Retailers
                            <br />
                            <em>
                                (<b>Note: </b>This is a one time step. Skip to step 2 if
                                already done)
                            </em>
                        </td>
                        <td>
                            <button
                                onClick={redirect_to_roles}
                                className="btn btn-outline-primary btn-sm"
                            >
                                Register
                            </button>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Owner should order medicines</td>
                        <td>
                            <button
                                onClick={redirect_to_addmed}
                                className="btn btn-outline-primary btn-sm"
                            >
                                Order Medicines
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Control Supply Chain</td>
                        <td>
                            <button
                                onClick={redirect_to_supply}
                                className="btn btn-outline-primary btn-sm"
                            >
                                Control Supply Chain
                            </button>
                            <br />
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <br />

                <div style={{ width: "20%", margin: "auto" }}>
                    <Table
                        striped
                        bordered
                        hover
                        variant="light"
                        style={{ opacity: 0.9 }}
                    >
                        <tbody>
                        <tr>
                            <td style={{ width: "50%", textAlign: "center" }}>
                                {" "}
                                <button
                                    onClick={redirect_to_track}
                                    className="btn btn-outline-primary btn-sm"
                                >
                                    <strong>Track Medicines</strong>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <br />
            <footer style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About </h5>
                            <p>
                                Our motivation is to develop a safe and transparent supply chain
                                management solution for the pharmaceutical business using
                                blockchain technology.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h5>Get in Touch : </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <a
                                            href="https://github.com/Saumya-Purohit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                            Saumya-Purohit
                                        </a>{" "}
                                        <em> | </em>
                                        <a
                                            href="https://www.linkedin.com/in/saumya-purohit-a9765a240"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin />
                                            Saumya Purohit
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a
                                            href="https://github.com/sj1705"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                            sj1705
                                        </a>{" "}
                                        <em> | </em>
                                        <a
                                            href="https://www.linkedin.com/in/sj1705"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin />
                                            Shrestha Jaiswal
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <img
                                src={require("./assets/images/blockpharm-logo.png").default}
                                alt="Logo"
                                style={{ width: "100%", height: "80%" }}
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;