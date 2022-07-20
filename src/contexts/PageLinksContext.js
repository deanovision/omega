import {createContext, useState} from 'react'

const AuthorizedUserContext = createContext()

export const PageLinksContext = ({children}) => {
    const headerLinksInfo = [
        {label: 'Home', link: '/auth/dashboard'},
        {label: 'Profile', link: '/auth/user'},
        {label: 'Find People', link: '/auth/search-users'}
      ]
    // const userProfileLinksInfo = [
    //     {label: 'My Posts', link: '/auth/dashboard'},
    //     {label: 'Highlights', link: '/auth/user'},
    //     {label: 'Omega', link: '/auth/login'}
    // ]    
  const [headerLinks] = useState(headerLinksInfo)
//   const [userProfileLinks] = useState(userProfileLinksInfo)
//   const [dashboardLinks] = useState(linkInfo)
  const [footerLinks] = useState(linkInfo)

    return (
        <PageLinksContext.Provider 
        value={{
          headerLinks, 
          footerLinks
          }}>
            {children}
        </PageLinksContext.Provider>
    )
}

export default AuthorizedUserContext