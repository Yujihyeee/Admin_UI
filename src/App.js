import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import { AdminPage, UserList, SalesManagement, HomePageSettings } from 'pages/index';


const App = () => (
  <>
  <Switch>
    <Route exact path = '/' component = {AdminPage}/>
    <Redirect from = '/admin-page' to = {'/'}/>
    <Route exact path = '/user-list' component = {UserList}/>
    <Route exact path = '/sales-management' component = {SalesManagement}/>
    <Route exact path = '/home-page-settings' component = {HomePageSettings}/>
  </Switch>
  </>
)

export default App;

