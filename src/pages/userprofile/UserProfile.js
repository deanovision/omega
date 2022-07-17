import {useState, useEffect} from 'react'
import UserCardPlusBackground from '../../components/UserCardPlusBackground.tsx'
import backgroundImage from '../../assets/background1.jpg'
import CommentListSimple from '../../components/CommentListSimple'
import {fetchUser, fetchComments} from '../dashboard/dummyData'
import NavBarZeroMargin from '../../components/NavBarZeroMargin.tsx'

function UserProfile() {
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetchUser(setUser)
        .catch(err => console.log(err))
    },[])
    useEffect(()=> {
        fetchComments(setComments)
        .catch(err => console.log(err))
    }, [])
    
    const tabInfo = [
        {label: 'Home', link: '/dashboard'},
        {label: 'Profile', link: '/auth/user'},
        {label: 'Login', link: '/auth/login'}
      ]

    return( 
        <>
        <NavBarZeroMargin links={tabInfo} />
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
          <CommentListSimple comments={comments} />
        </>
    )
}
export default UserProfile