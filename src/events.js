import React from 'react';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer,
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
    MDBCollapse, } from 'mdb-react-ui-kit';




export default function App() {
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>Date</th>
          <th scope='col'>Camp name </th>
          <th scope='col'>Address</th>
          <th scope='col'>State</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>08-Apr-2023</th>
          <td>Arya samaj Mandir 	</td>
          <td> Camp colony Palwal</td>
          <td>Haryana</td>
        </tr>
        <tr>
          <th scope='row'>08-Apr-2023</th>
          <td>StPaul Church</td>
          <td>Theradi,Chennai</td>
          <td>Chennai</td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
  );
}