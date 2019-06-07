import './home.css';
import './ghostRegistroCss.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert, Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

export interface IHomeProp extends StateProps, DispatchProps {}

export class Home extends React.Component<IHomeProp> {
    componentDidMount() {
        this.props.getSession();
    }
  render() {
    const { account } = this.props;
    return (
        <div>
        <Row className="justify-content-center">
            <Col md="8">
                <h1 id="home.title">
                    <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
                    <br/>
                    <br/>
                    <br/>
                </h1>
            </Col>
            <Col md="3" className="justify-content-right">
                <img
                    height="70%"
                    className="Bienvenidos a la pagina principal"
                    width="70%"
                    src="content/images/logo-jhipster.png"
                    alt="Card image cap"
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Col>
        </Row>
            <Row className="justify-content-center">
                <Col md="5">
                    <Alert color="warning">
                        <Translate contentKey="home.noaccount.messages">You do not have an account yet?</Translate>
                    </Alert>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
        </div>
    );
  }
}
const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
