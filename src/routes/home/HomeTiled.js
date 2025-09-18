import HomeAgeRange from '../../components/homeAgeRange/HomeAgeRange'
import HomeBlogs from '../../components/homeBlogs/HomeBlogs'
import HomeBrands from '../../components/homeBrands/HomeBrands'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import HomeDelivery from '../../components/homeDelivery/HomeDelivery'
import HomeHeroCard from '../../components/homeHeroCard/HomeHeroCard'
import HomeOffers from '../../components/homeOffers/HomeOffers'
import HomeTopPicks from '../../components/homeTopPicks/HomeTopPicks'
import HomeToyTypes from '../../components/homeToyTypes/HomeToyTypes'

const HomeTiled = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <HomeAgeRange />
      <HomeCarousel />
      <div className='flex justify-center'>
        <h3 id="offers" className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center mt-5 mb-3 md:mt-12 md:mb-5 drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Toy Types</span></h3>
      </div>
      <HomeToyTypes />
      <div className='flex justify-center'>
        <h3 id="offers" className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center mt-5 mb-3 md:mt-12 md:mb-4 drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Great Offers</span></h3>
      </div>
      <HomeOffers />
      <HomeTopPicks />
      <div className='flex justify-center'>
        <h3 id="offers" className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center mt-7 mb-4 md:mt-14 md:mb-7 drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Best Brands</span></h3>
      </div>
      <HomeBrands />
      <HomeHeroCard />
      <HomeBlogs />
      <HomeDelivery />
    </div>
  )
}

export default HomeTiled