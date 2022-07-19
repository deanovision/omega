import Hero from '../../components/Hero.tsx'
import NavBar from '../../components/NavBar.tsx'

function Home (){
  const tabInfo = [
    {label: 'Home', link: '/auth/dashboard'},
    {label: 'Profile', link: '/auth/user'},
    {label: 'Find People', link: '/auth/search-users'}
  ]
    return (
        <>
          <NavBar links={tabInfo} />
          <Hero />
        </>
    )
}
export default Home