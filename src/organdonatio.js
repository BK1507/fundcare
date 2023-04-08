import React from "react";
import { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from "mdb-react-ui-kit";


export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    
    <MDBContainer>
      <div>
      <MDBContainer>
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
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
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
      
    </div>
    <br/>
    </MDBContainer>
      </div>
      <form>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="First name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example5" label="Middle name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example2" label="Last name" />
          </MDBCol>
        </MDBRow>
        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
        <MDBInput
          className="mb-4"
          type="address"
          id="form3Example3"
          label=" address"
        />
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="City" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example5" label="District" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example2" label="State" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="PIN Code" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example5" label="Mobile Number" />
          </MDBCol>
          <MDBCol>
            
            <MDBDropdown>
              <MDBDropdownToggle  >Occupation</MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Student</MDBDropdownItem>
                <MDBDropdownItem link>Bussiness</MDBDropdownItem>
                <MDBDropdownItem link>Professional</MDBDropdownItem>
                <MDBDropdownItem link>Self Employed</MDBDropdownItem>
                <MDBDropdownItem link>Government Employee</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol>
          <MDBDropdown>
              <MDBDropdownToggle  >Gender</MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Male</MDBDropdownItem>
                <MDBDropdownItem link>Female</MDBDropdownItem>
                <MDBDropdownItem link>Other</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCol>
          <MDBCol>
          <MDBDropdown>
              <MDBDropdownToggle  >Blood Group</MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>A+</MDBDropdownItem>
                <MDBDropdownItem link>A-</MDBDropdownItem>
                <MDBDropdownItem link>B+</MDBDropdownItem>
                <MDBDropdownItem link>B-</MDBDropdownItem>
                <MDBDropdownItem link>O+</MDBDropdownItem>
                <MDBDropdownItem link>O-</MDBDropdownItem>
                <MDBDropdownItem link>AB+</MDBDropdownItem>
                <MDBDropdownItem link>AB-</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCol>
          <MDBCol>
            
          <MDBInput
          className="mb-4"
         
          id="form3Example3"
          label="Emergency Contact Name"
        />
            
          </MDBCol>
        </MDBRow>
        
       <MDBRow>
        <MDBCol>
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          label=" Emergency Contact address"
        />
        </MDBCol>
        <MDBCol>
        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Emergency Contact Address"
        />
        </MDBCol>
        </MDBRow>
        <h6>Organs that I wish to donate:</h6>
         <MDBRow>
          <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="All Organs"
          
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Cornea(Eyes)"
          
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Kidney"
          
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Heart"
       
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Lungs"
          
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Liver"
          
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Pancreas"
         
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Small Intestine"
        
        />
        </MDBCol>
        <MDBCol>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Skin"
         
        />
        </MDBCol>
      </MDBRow>
      <MDBCheckbox
         
          id="form3Example5"
          label="I declare that I am a citizen of india and above 18 years of age"
         
        />
        <MDBCheckbox
          
          id="form3Example5"
          label="I agree to the privacy policy"
         
        />
        <MDBBtn type="submit" className='me-1' color='success'>
         Submit
        </MDBBtn>
      </form>
    </MDBContainer>
  );
}
