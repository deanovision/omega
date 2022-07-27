import {createContext, useState} from 'react'
const PageLinksContext = createContext()

export const PageLinksProvider = ({children}) => {
    const headerLinksInfo = [
      {label: 'Home', link: '/auth/dashboard'},
      {label: 'Profile', link: `/auth/users/`},
      {label: 'Find People', link: '/auth/search-users'}
      ]
    let footerLinkInfo = [
      { label: "Contact", link: "/" },
      { label: "Privacy", link: "/" },
      { label: "Terms of Service", link: "/" }
    ]
      // let footerLinkInfo = [{
      //   title: "string",
      //   links: [{ label: "string", link: "string" }]
      // }]

  const [headerLinks] = useState(headerLinksInfo)
  const [footerLinks] = useState(footerLinkInfo)


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

export default PageLinksContext