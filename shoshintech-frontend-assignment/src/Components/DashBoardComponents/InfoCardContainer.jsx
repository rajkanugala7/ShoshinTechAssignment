import InfoCard from "./InfoCard";

export default function InfoCardContainer() {
    return (
        <div className="info-card-container">
             <InfoCard title="Total Employees" number="216" info="All active employees" />
            <InfoCard title="Job Open" number="10" info="Positions open for hire" />
            <InfoCard title="New Employees" number="24" info="Recently hired employees" />
            <InfoCard title="Talent Request" number="16" info="Pending talent requests" />
            <InfoCard title="Available Position" number="24" info="Current available positions" />
            <InfoCard title="Department Requests" number="8" info="New requests from departments" />
        </div>
    )
}