import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Kedua from './pages/Kedua'
import Todo from './pages/Todo'
import ListPage from './pages/ListPage'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/kedua' exact component={Kedua} />
      <Route path='/todo' exact component={Todo} />
      <Route path='/list' exact component={ListPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
