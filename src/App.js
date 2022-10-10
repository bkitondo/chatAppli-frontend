import DispayUsers from './components/DisplayUsers';
import User from './components/User';
import DisplayDiscussion from './components/DisplayDiscussion';
import "./styles/App.css"

function App() {
  return (
    <div className='App' >
      <User/>
      <DispayUsers/>
      <DisplayDiscussion/>
    </div>
  );
}

export default App;
