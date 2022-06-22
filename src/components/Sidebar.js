import React from "react";
import { useLocation } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faServer, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const Sidebar = (props) => {
    const { isValidSession, history } = props;
    const location = useLocation();

    if(isValidSession()){
        return (
            <SideNav
              onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
              style={{
                position: 'fixed'
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="dashboard">
                <NavItem eventKey="dashboard">
                  <NavIcon>
                    <FontAwesomeIcon icon={ faHome } size='lg' />
                  </NavIcon>
                  <NavText>
                    Home
                  </NavText>
                  </NavItem>
                <NavItem eventKey="dataset">
                  <NavIcon>
                    <FontAwesomeIcon icon={ faServer } size='lg' />
                  </NavIcon>
                  <NavText>
                    Dataset
                  </NavText>
                </NavItem>
                <NavItem eventKey="logout">
                  <NavIcon>
                    <FontAwesomeIcon icon={ faSignOutAlt } size='lg' />
                  </NavIcon>
                  <NavText>
                    Log Out
                  </NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
        )
    } else {
        return null;
    }
    
}

export default Sidebar;