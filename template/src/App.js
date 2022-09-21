import React,{Suspense} from 'react'
import BaseLayout from './Layout/baseLayout'
import { HashRouter ,Switch, Route} from 'react-router-dom'
import Login from './Views/Auth/login'

function App() {
  return (
    <React.Fragment>
     <HashRouter>
       <Suspense fallback = {<div>Loading....</div>} >
       <Switch>
          <Route path="/login" exact name="login" render={props => <Login {...props}/>} />
          <Route path="/" name="Home" render={props => <BaseLayout {...props}/>} />
        </Switch>
        </Suspense>
     </HashRouter>
   </React.Fragment>

  )
}

export default App
