export default function MenuElement({icon, name}) {
    return (
        <div className="nav-item">
            <span id={name}>{icon}</span>
            <span className="menuname" id={name }>{name }</span>
        </div>
    )
}