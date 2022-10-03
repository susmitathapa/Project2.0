import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
//import { useNavigate } from "react-router-dom";

export default function EarnScreen() {
  return (
    <div>
      <Helmet>
        <title>Earning </title>
      </Helmet>
      <h1>Hi there.....</h1>
      <Row>
        <Col md={8}>
          <MessageBox>
            This feature is coming soon..... <Link to="/">Thank you</Link>
          </MessageBox>
        </Col>
      </Row>
    </div>
  );
}
