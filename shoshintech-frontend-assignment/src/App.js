import logo from './logo.svg';
import './App.css';
import Menu from './Components/SideNavBarComponents/Menu';
import SideNavBar from './Components/SideNavBarComponents/SideNavBar';
import Navbar from './Components/TopNavBarComponents/Navbar';
import InfoCardContainer from './Components/DashBoardComponents/InfoCardContainer';
import RecentActivity from './Components/DashBoardComponents/RecentActivity';
import Dashboard from './Components/DashBoardComponents/DashBoard';


function App() {
  return (
    <div className="App">
      <div className='container'>
                  
        <SideNavBar />
        <div>
          <InfoCardContainer />
          
        </div>
        <div>
          <RecentActivity/>
        </div>
            </div>
    </div>
  );
}

export default App;
