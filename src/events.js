import React from "react";
import { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBContainer >
      <div >
        <MDBNavbar expand="lg" light bgColor="light" className=' gradient-custom-4'>
          <MDBContainer fluid>
            <div className="d-flex align-items-start">
              <MDBNavbarBrand href="#">FUNDCARE</MDBNavbarBrand>
            </div>
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <div className="d-flex align-items-end">
              <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="./home.js">
                      Home
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="">
                      Organ Donation
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="#">
                      Blood Donation
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="#">
                      Fundraising
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="#">
                      Events
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBDropdown>
                    <MDBDropdownToggle>
                      <MDBIcon icon="user-alt" className="me-3" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>
                        <MDBIcon icon="user-alt" className="me-3" />
                        Signin
                      </MDBDropdownItem>
                      <MDBDropdownItem link>
                        <MDBIcon icon="sign-out-alt" className="me-3" />
                        Signup
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarNav>
              </MDBCollapse>
            </div>
          </MDBContainer>
        </MDBNavbar>
      </div>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Camp name </th>
            <th scope="col">Address</th>
            <th scope="col">State</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">08-Apr-2023</th>
            <td>Arya samaj Mandir </td>
            <td> Camp colony Palwal</td>
            <td>Haryana</td>
          </tr>
          <tr>
            <th scope="row">08-Apr-2023</th>
            <td>StPaul Church</td>
            <td>Theradi,Chennai</td>
            <td>Chennai</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
