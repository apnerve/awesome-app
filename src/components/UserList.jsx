import { useEffect, useRef, useState } from "react"
import UserCard from "./UserCard"

export default function UserList() {  
    const { data, error, isLoading } = useUserData()
    if(isLoading) return <Loader />
    
    if(error) return <Error />

    return data.map(user => <UserCard name={user.name} avatar={user.avatar} />)
}

function useUserData() {
    const url = "https://66a1ab237053166bcabfl762b.mockapi.io/users"
    
    const [ usersData, setUsersData] = useState([])
    const [ error, setError] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    
    useEffect(async () => {
        setIsLoading(true)
        
        try {
            const response = await fetch(url)
            if(!response.ok) throw new Error(response.statusText)
            const data = await response.json()
            setUsersData(data)    
        } catch (error) {
            setError(error)
        }
        setIsLoading(false)
        
        return function cleanup() {
            console.log("CLEAN UP")
        }
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