import {useState, useEffect} from 'react'
import UserCardPlusBackground from '../../components/UserCardPlusBackground.tsx'
import backgroundImage from '../../assets/background1.jpg'
import {fetchUser} from '../dashboard/dummyData'


function UserProfile() {
    const [user, setUser] = useState({})
    useEffect(()=>{
        fetchUser(setUser)
        .catch(err => console.log(err))
    },[])

    return( 
        <>
          {
            user? 
            <UserCardPlusBackground
            avatar={user.avatar}
            image={backgroundImage}
            name={user.name}
            job={user.job}
            stats={user.stats} 
             /> : null
          }
        </>
    )
}
export default UserProfile