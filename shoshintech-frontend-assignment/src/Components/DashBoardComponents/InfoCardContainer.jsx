import InfoCard from "./InfoCard";

export default function InfoCardContainer() {
    return (
        <div className="info-card-container">
            <InfoCard title="Available Positions" number="216" info="All active employees" color1="#FFEFE7" color2="#FF5151" />
            <InfoCard title="Job Open" number="10" info="Positions open for hire" color1="#E8F0FB" color2="#3786F1" />
            <InfoCard title="New Employees" number="24" info="Recently hired employees" color1="#FDEBF9" color2="#EE61CF" />
           
        </div>
    )
}