import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

function Bootfooter() {
  return (
    <MDBFooter bgColor="dark" variant={"dark"}>
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div>
          <a href="https://pt-br.facebook.com/" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/TwitterBrasil" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://www.google.com.br/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.whatsapp.com/" classname="bg-success text-white btn btn-outline-white btn-floating me-4">
            <MDBIcon fab icon="whatsapp" />
          </a>
        </div>
      </section>
    </MDBFooter>
  );
}

export default Bootfooter;