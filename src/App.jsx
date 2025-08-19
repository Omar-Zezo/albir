import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Brief from "./pages/About us/Brief";
import BoardOfDirectors from "./pages/About us/BoardOfDirectors";
import ServicesAlbir from "./pages/About us/ServicesAlbir";
import SeasonalProjects from "./pages/About us/SeasonalProjects";
import SeasonalProjectsDetails from "./pages/About us/SeasonalProjectsDetails";
import Events from "./pages/About us/Events";
import EventDetails from "./pages/About us/EventDetails";
import GovernanceMaterial from "./pages/About us/GovernanceMaterial";
import GovernanceMaterialDetails from "./pages/About us/GovernanceMaterialDetails";
import Branches from "./pages/About us/Branches";
import PageDetails from "./pages/About us/PageDetails";
import AlbirFriends from "./pages/About us/AlbirFriends";
import ServiceDetails from "./pages/ServiceDetails";
import NewsDetails from "./pages/NewsDetails";
import NewsSections from "./pages/Media Center/NewsSections";
import NewsSectionsDetails from "./pages/Media Center/NewsSectionsDetails";
import PhotoSections from "./pages/Media Center/PhotoSections";
import VideosSections from "./pages/Media Center/VideosSections";
import ContactUs from "./pages/ContactUs";
import OrganizationalChart from "./pages/About us/OrganizationalChart";
import ListOfMembers from "./pages/About us/ListOfMembers";
import MemberDetails from "./pages/About us/MemberDetails";
import MemberForm from "./components/About us/MemberForm";
import SaidAboutUs from "./pages/About us/SaidAboutUs";
import DonateOnlineDetails from "./pages/DonateOnlineDetails";
import ProfileLayout from "./pages/profile/ProfileLayout";
import PersonalInfo from "./pages/profile/PersonalInfo";
import DonationRecord from "./pages/profile/DonationRecord";
import ModulesDetails from "./pages/About us/ModulesDetails";
import MyBills from "./pages/profile/MyBills";
import Cart from "./pages/profile/Cart";
import Surveys from "./pages/About us/Surveys";
import OtpCode from "./pages/OtpCode";
import EmploymentApplication from "./pages/About us/EmploymentApplication";
import DonorJoin from "./pages/About us/DonorJoin";
import Gifts from "./pages/Gifts";
import BankTransfer from "./pages/BankTransfer";
import PaymentStatus from "./pages/PaymentStatus";
import StatusFaild from "./pages/StatusFaild";
import UseNotifications from "./hooks/UseNotifications";
import Reviews from "./pages/Reviews";
import Page404 from "./pages/Page404";
import Statistics from "./pages/About us/Statistics";


const router = createBrowserRouter([
  {
    Component: Layout,
    path: "/",
    children : [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'add-gift',
        element: <Gifts/>
      },
      {
        path: 'pages/:id',
        element: <PageDetails/>
      },
      {
        path: 'albir-friends',
        element: <AlbirFriends/>
      },
      {
        path: 'albir-friends/join',
        element: <MemberForm/>
      },
      {
        path: 'albir-friends/registration-form',
        element: <DonorJoin/>
      },
      {
        path: 'services-sections/show/:id',
        element: <ServiceDetails/>
      },
      {
        path: 'news-sections',
        element: <NewsSections/>
      },
      {
        path: 'news-sections/news/:id',
        element: <NewsDetails/>
      },
      {
        path: 'news-sections/:id',
        element: <NewsSectionsDetails/>
      },
      {
        path: 'photos-sections',
        element: <PhotoSections/>
      },
      {
        path: 'videos-sections',
        element: <VideosSections/>
      },
      {
        path: 'contact-us',
        element: <ContactUs/>
      },
      {
        path: 'donate-online/show/:id',
        element: <DonateOnlineDetails/>
      },
      {
        path: 'modules/details/:id',
        element: <ModulesDetails/>
      },
      {
        path: 'otp-code',
        element: <OtpCode/>
      },
      {
        path: 'bank_transfer/:donationCode',
        element: <BankTransfer/>
      }
    ]
  },
  {
    Component: ProfileLayout,
    path: "profile",
    children: [
      {
        index: true,
        element: <PersonalInfo/>
      },
      {
        path: 'donation-record',
        element: <DonationRecord/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'my-bills',
        element: <MyBills/>
      },
    ]
  },
  {
    Component: Layout,
    path: "/about-the-association",
    children : [
      {
        path: 'brief',
        element: <Brief/>
      },
      {
        path: 'list-of-members-of-the-general-assembly',
        element: <ListOfMembers/>
      },
      {
        path: 'list-of-members-of-the-general-assembly/details/:id',
        element: <MemberDetails/>
      },
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'organizational-chart',
        element: <OrganizationalChart/>
      },
      {
        path: 'board-of-directors',
        element: <BoardOfDirectors/>
      },
      {
        path: 'services-albir',
        element: <ServicesAlbir/>
      },
      {
        path: 'said-about-us',
        element: <SaidAboutUs/>
      },
      {
        path: 'seasonal-projects',
        element: <SeasonalProjects/>
      },
      {
        path: 'seasonal-projects/details/:id',
        element: <SeasonalProjectsDetails/>
      },
      {
        path: 'events',
        element: <Events/>
      },
      {
        path: 'events/details/:id',
        element: <EventDetails/>
      },
      {
        path: 'governance-material',
        element: <GovernanceMaterial/>
      },
      {
        path: 'governance-material/details/:id',
        element: <GovernanceMaterialDetails/>
      },
      {
        path: 'our-branches',
        element: <Branches/>
      },
      {
        path: 'surveys',
        element: <Surveys/>
      },
      {
        path: 'employment-application',
        element: <EmploymentApplication/>
      },
    ]
  },
  {
    path: "/payment-status/:order_id",
    element: <PaymentStatus/>
  },
  {
    path: "/status-faild",
    element: <StatusFaild/>
  },
  {
    path: "/reviews/:id",
    element: <Reviews/>
  },
  {
    path: "*",
    element: <Page404/>
  }
])


function App() {
  UseNotifications()
  return (
    <RouterProvider router={router}/>
  )
}

export default App
