import { Helmet } from 'react-helmet-async';

export default function AboutUsScreen() {
  return (
    <div
      className="about"
      style={{ backgroundImage: 'url(images/ourMission.jpg)' }}
    >
      <Helmet>
        <title>Information </title>
      </Helmet>
      <h1>About Us</h1>
      <div className="aboutUs">
        <h2>Our Mission</h2>
        <p>
          <b>
            Our mission is to provide economic opportunity to every women out
            there who are artistically talented{' '}
          </b>
        </p>
      </div>
      <div className="aboutUs">
        <h2>Our Vision</h2>
        <p>
          <b>
            To mould a society of equality, justice and peace through
            opportunity and socio-economic development{' '}
          </b>
        </p>
      </div>
    </div>
  );
}
