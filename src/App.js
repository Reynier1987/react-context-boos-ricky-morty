import {UserProvider} from './context/userContext'
import {Parents} from './component/parents'
import {ChildOne} from './component/childone'

function App() {
  
  return (
    <>
      <UserProvider>
        <Parents />
        <ChildOne/>
      </UserProvider>
    </>
  );
}

export default App;
