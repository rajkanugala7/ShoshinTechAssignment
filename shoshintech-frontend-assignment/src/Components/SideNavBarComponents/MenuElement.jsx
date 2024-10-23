export default function MenuElement({icon, name}) {
    return (
        <div className="nav-item">
            <span>{icon}</span>
            <span className="menuname">{name }</span>
        </div>
    )
}