import React, { useState } from "react";
import pic from "./images/bg.png";
import {
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
    <MDBContainer>
    <MDBNavbar expand="lg" light bgColor="light">
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
    <div>
          <img src={pic} width={100} height={100} />
          </div>
    </MDBContainer>

  );
}
