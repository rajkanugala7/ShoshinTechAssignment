import InfoCard from "./InfoCard";

export default function InfoCardContainer() {
    return (
        <div className="info-card-container">
             <InfoCard title="Total Employees" number="216" info="All active employees" />
            <InfoCard title="Job Open" number="10" info="Positions open for hire" />
            <InfoCard title="New Employees" number="24" info="Recently hired employees" />
           
        </div>
    )
}