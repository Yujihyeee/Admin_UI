import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import {AdminPage} from 'admin/index';
import {DashBoard} from 'analysis/index';
import {UserList} from 'user/index';
import {SalesManagement} from 'sales/index';


const App = () => (
  <>
  <Switch>
    <Route exact path = '/' component = {AdminPage}/>
    <Redirect from = '/admin-page' to = {'/'}/>
    <Route exact path = '/dash-board' component = {DashBoard}/>
    <Route exact path = '/user-list' component = {UserList}/>
    <Route exact path = '/sales-management' component = {SalesManagement}/>
  </Switch>
  </>
)

export default App;

