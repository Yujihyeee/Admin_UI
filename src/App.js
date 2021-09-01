import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import {AdminPage} from 'analysis/index';
import {UserList} from 'user/index';
import {SalesManagement} from 'sales/index';
import {HomePageSettings} from 'admin/index';


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

