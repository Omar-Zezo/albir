import { useEffect, useState } from 'react'
import AboutHome from '../components/Home/AboutHome'
import Events from '../components/Home/Events'
import GallerySlider from '../components/Home/GallerySlider'
import HeroSlider from '../components/Home/HeroSlider'
import LastNews from '../components/Home/LastNews'
import OurPartners from '../components/Home/OurPartners'
import Projects from '../components/Home/Projects'
import Services from '../components/Home/Services'
import DonateNowPopup from '../utils/DonateNowPopup'
import { getSlides } from '../store/slices/Home/slider'
import { useDispatch, useSelector } from 'react-redux'
import PageLoader from '../utils/PageLoader'
import ScrollToTop from '../utils/ScrollToTop'


const Home = () => {
  const [showDonatePopUp, setShowDonatePopUp] = useState(false)
  const [donationDetails, setDonationDetails] = useState(null)
  const [multiPrice, setMultiPrice] = useState(null)

  const getDonation = (data, price)=>{
    setDonationDetails(data)
    setMultiPrice(price)
  }

  //slider
  const [slides, setSlides] = useState(null);
  const { data } = useSelector((state) => state.slider);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlides());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setSlides(data.data.data);
        }
      }
    }
  }, [data]);



  return (
    !slides ? (
      <PageLoader/>
    ):(
      <ScrollToTop>
      <div className='max-xl:pt-16'>
      <HeroSlider slides={slides} showDonatePopUp={showDonatePopUp} setShowDonatePopUp={setShowDonatePopUp} getDonation={getDonation}/>
      <Services getDonation={getDonation} setShowDonatePopUp={setShowDonatePopUp}/>
      <AboutHome/>
      <Projects getDonation={getDonation} setShowDonatePopUp={setShowDonatePopUp}/>
      <GallerySlider/>
      <Events/>
      <LastNews/>
      <OurPartners/>
      <DonateNowPopup donationDetails={donationDetails} multiPrice={multiPrice} showDonatePopUp={showDonatePopUp} setShowDonatePopUp={setShowDonatePopUp}/>
      </div>
      </ScrollToTop>
    )
  )
}

export default Home