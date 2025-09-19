import HomeDelivery from '../../components/homeDelivery/HomeDelivery'
import HomeHeroCard from '../../components/homeHeroCard/HomeHeroCard'
import HomePods from '../../components/homePods/HomePods'
import HomeTopPicks from '../../components/homeTopPicks/HomeTopPicks'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <HomePods />
      <HomeTopPicks />
      <HomeHeroCard />
      <HomeDelivery />
    </div>
  )
}

export default Home