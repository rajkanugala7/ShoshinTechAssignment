export default function InfoCard({ title, number, info, color1,color2 }) {
    return (
        <div className="info-card" style={{ backgroundColor: color1 }}>
            <h4>{title}</h4>
            <h1>{number}</h1>
            <span style={{color: color2}}>{info}</span>
        </div>
    );
}
