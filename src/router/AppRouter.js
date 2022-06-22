import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import DatasetList from '../components/DatasetList';
import AddDataset from '../components/subcomponent/AddDataset';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Classification from '../components/Classification';
import Sidebar from '../components/Sidebar';
import LogOut from '../components/LogOut';


class AppRouter extends React.Component {
  state = {
    expiryTime: '0'
  };

  componentDidMount() {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    this.setState({ expiryTime });
  }

  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };

  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expiryTime = this.state.expiryTime;
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };

  isDashboard = () => {
    const location = useLocation();
    const dashboard = location.pathname == '/dashboard';

    return dashboard;
  };

  render() {
    return (
      <BrowserRouter>
        <Route render={({ location, history }) => (
        <React.Fragment >
          <Sidebar isValidSession={this.isValidSession} history={history} />
          <div className="main">
            <Switch>
              <Route 
                path="/" 
                exact={true}
                render={(props) => (
                  <Home isValidSession={this.isValidSession} {...props} />
                )}
              />
              <Route
                path="/redirect"
                render={(props) => (
                  <RedirectPage
                    isValidSession={this.isValidSession}
                    setExpiryTime={this.setExpiryTime}
                    {...props}
                  />
                )}
              />
              <Route
                path="/logout"
                render={(props) => (
                  <LogOut
                    isValidSession={this.isValidSession}
                    setExpiryTime={this.setExpiryTime}
                    {...props}
                  />
                )}
              />
              <Route
                path="/dashboard"
                render={(props) => (
                  <Dashboard isValidSession={this.isValidSession} isDashboard={this.isDashboard} {...props} />
                )}
              />
              <Route
                path="/selectMusic"
                render={(props) => (
                  <Dashboard isValidSession={this.isValidSession} isDashboard={this.isDashboard} {...props} />
                )}
              />
              <Route path="/dataset" exact> <DatasetList /> </Route>
              <Route 
                path="/addDataset/:id" 
                render={(props) => (
                  <AddDataset isValidSession={this.isValidSession} {...props} />
                )}
              />
              <Route 
                path="/classification/:id" 
                render={(props) => (
                  <Classification isValidSession={this.isValidSession} {...props} />
                )}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
      </React.Fragment>
        )}
      />
      
      </BrowserRouter>
    );
  }
}

export default AppRouter;
