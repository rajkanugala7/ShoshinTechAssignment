import MenuElement from "./MenuElement";

export default function Menu({ title, items }) {
    return (
        <div className="menu">
            <h3 className="tittle">{title}</h3>
            {items.map((item, index)=>(
                    <MenuElement icon={item.icon} name={item.name}/>       
           ) )}
        </div>
    )
}