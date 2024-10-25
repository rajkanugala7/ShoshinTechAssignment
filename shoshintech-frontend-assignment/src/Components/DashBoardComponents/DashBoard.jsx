import Event from "../Schedules/Event";
import Schedule from "../Schedules/Schedule";
import Navbar from "../TopNavBarComponents/Navbar";
import InfoCardContainer from "./InfoCardContainer";
import RecentActivity from "./RecentActivity";
import StatsCardContainer from "./StatsCardContainer";
import statsCardContainer from "./StatsCardContainer";

export default function Dashboard()
{



    const events = [
        {
            name: "outing schedule for every department",
            time:"5 minutes ago"
        },
        {
            name: "Meeting HR  Department",
            time:"yesterday  9:54pm"
        },
        {
            name: "IT Department needs two more UI/UX Designer position ",
            time:"Yesterday  12:30pm"
        }
  ]

    return (
        
        <div className="dashboard">
           <div> <InfoCardContainer />
                <StatsCardContainer />
                 <Schedule events={events} pin="1"/>
            </div>
            <div className="recentDiv">
                <RecentActivity />
                <Schedule events={events}  />
                </div>
        </div>
    )
}