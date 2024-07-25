import { useEffect, useRef, useState } from "react"
import UserCard from "./UserCard"

export default function UserList(props) {  
    console.log(props.children)
    const { data, error, isLoading } = useUserData()
    if(isLoading) return <Loader />
    
    if(error) return <Error />

    return data.map(user => <UserCard name={user.name} avatar={user.avatar} />)
}

export function useUserData() {
    const url = "https://66a1ab237053166bcabf762b.mockapi.io/users"
    
    const [ usersData, setUsersData] = useState([])
    const [ error, setError] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        
            fetch(url)
                .then(response => {
                    if(!response.ok) throw new Error(response.statusText)
                        return response.json()
                })
                .then(data => setUsersData(data))
                .catch(error => setError(error))
                .finally(() => {
                    setIsLoading(false)
                })
        
    }, [])

    return { data: usersData, error,isLoading}
}

function Error() {
    return (
        <div>Error</div>
    )
}

function Loader() {
    return (
        <div>Loading...</div>
    )
}