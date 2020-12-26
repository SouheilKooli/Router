import React from 'react'
import Last from './Compo/OldApp'
import { Route,Switch } from 'react-router-dom';
import trailer from './Compo/Trailer';
import "./App.css";

export default function App(){
  return(
    <>
    <Switch>
      <Route exact path='/' component={Last}/>
      <Route exact path="/:id" component={trailer}/>
    </Switch>
    </>
  )
}
