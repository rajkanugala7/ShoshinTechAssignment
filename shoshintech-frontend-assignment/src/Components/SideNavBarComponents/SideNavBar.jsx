import Menu from "./Menu";
import { FaTachometerAlt, FaUserTie, FaCalendarAlt, FaUsers, FaBuilding, FaLifeRing, FaCog } from 'react-icons/fa'; // Importing icons

const items1 = [
  { icon: <FaTachometerAlt />, name: "Dashboard" },
  { icon: <FaUserTie />, name: "Recruitment" },
  { icon: <FaCalendarAlt />, name: "Schedule" },
  { icon: <FaUsers />, name: "Employees" },
  { icon: <FaBuilding />, name: "Department" }
];

const items2 = [
    { icon: <FaLifeRing />, name: "Support" },
    { icon: <FaCog />, name: "Settings" }
]
export default function SideNavBar() {
    return (
        <div className="sidenavbar">
            <h1 className="menuname">Vasitum</h1>

            <Menu title={"MAIN MENU"} items={items1} />

            <Menu title={"Others"} items={items2}/>
             
        </div>
    )
}