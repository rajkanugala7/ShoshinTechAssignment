import InfoCardContainer from "./InfoCardContainer";
import RecentActivity from "./RecentActivity";

export default function Dashboard()
{
    return (
        <div className="dashboard">
            <InfoCardContainer />
            <RecentActivity/>
        </div>
    )
}