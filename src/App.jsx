import './App.css'
import Header from './assets/components/header/header'
import UserLoginContext from './assets/components/context/userLoginContext'

function App() {

  return (
    <UserLoginContext>
      <Header/>
    </UserLoginContext>
  )
}

export default App
