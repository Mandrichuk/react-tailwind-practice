import SideBar from './components/SideBar';
import Channels from './components/Channels';
import HeaderMain from './components/headerMain.jsx';
import Main from './components/Main';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channels />
      <div>
        <HeaderMain />
        <Main />
      </div>
    </div>
  );
}

export default App;