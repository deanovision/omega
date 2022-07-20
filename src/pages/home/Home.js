import Hero from '../../components/Hero.tsx'
import NavBarZeroMargin from '../../components/NavBarZeroMargin.tsx'

function Home (){
  const tabInfo = [
    {label: 'Home', link: '/auth/dashboard'},
    {label: 'Profile', link: '/auth/user'},
    {label: 'Find People', link: '/auth/search-users'}
  ]
    return (
        <>
          <NavBarZeroMargin links={tabInfo} />
          <Hero />
        </>
    )
}
export default Home