export default function UserCard({avatar, name}) {
    return (
        <div style={{display:"flex"}}>
        <img src={avatar} style={{width:"48px",height:"48px", borderRadius:"100%"}} />
        <p>{name}</p>
        </div>
    )
}