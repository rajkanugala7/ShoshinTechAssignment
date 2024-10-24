export default function InfoCard({ tittle, number, info }) {
    return (
        <div className="info-card">
            <h4>{tittle}</h4>
            <h1>{number}</h1>
            <span>{info }</span>
        </div>
    )
    
}