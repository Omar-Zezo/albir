import {configureStore} from "@reduxjs/toolkit"
import login from "./slices/auth/login"
import otpCode from "./slices/auth/otpCode"
import loggedUser from "./slices/auth/loggedUser"
import updateProfile from "./slices/auth/updateProfile"
import logout from "./slices/auth/logout"
import contactInfo from "./slices/Home/contactInfo"
import contactus from "./slices/Home/contactus"
import slider from "./slices/Home/slider"
import events from "./slices/Home/events"
import brief from "./slices/Home/brief"
import BoardOfDirectors from "./slices/Home/BoardOfDirectors"
import ServicesAlbir from "./slices/Home/ServicesAlbir"
import seasonalProjects from "./slices/Home/seasonalProjects"
import seasonalProjectsDetails from "./slices/Home/seasonalProjectsDetails"
import eventDetails from "./slices/Home/eventDetails"
import governanceMaterial from "./slices/Home/governanceMaterial"
import governanceMaterialDetails from "./slices/Home/governanceMaterialDetails"
import branches from "./slices/Home/branches"
import pages from "./slices/pages/pages"
import page from "./slices/pages/page"
import question from "./slices/friendsOfAlbir/question"
import join from "./slices/friendsOfAlbir/join"
import donorJoin from "./slices/friendsOfAlbir/donorJoin"
import listOfMembers from "./slices/friendsOfAlbir/listOfMembers"
import memberDetails from "./slices/friendsOfAlbir/memberDetails"
import membershipType from "./slices/friendsOfAlbir/membershipType"
import quickServices from "./slices/Home/quickServices"
import projects from "./slices/Home/projects"
import gallery from "./slices/Home/gallery"
import news from "./slices/Home/news"
import serviceDetails from "./slices/Home/serviceDetails"
import newsDetails from "./slices/Home/newsDetails"
import ourPartners from "./slices/Home/ourPartners"
import newsSection from "./slices/media cnter/newsSection"
import newsSectionDetails from "./slices/media cnter/newsSectionDetails"
import photoSection from "./slices/media cnter/photoSection"
import videoSection from "./slices/media cnter/videoSection"
import viewPhotos from "./slices/media cnter/viewPhotos"
import viewVideos from "./slices/media cnter/viewVideos"
import donateOnline from "./slices/Home/donateOnline"
import donateOnlineDetails from "./slices/Home/donateOnlineDetails"
import modules from "./slices/Home/modules"
import modulesDetails from "./slices/Home/modulesDetails"
import cart from "./slices/cart/cart"
import updateCart from "./slices/cart/updateCart"
import deleteItem from "./slices/cart/deleteItem"
import addToCart from "./slices/cart/addToCart"
import removeCart from "./slices/cart/removeCart"
import surveys from "./slices/Home/surveys"
import voteForSurvey from "./slices/Home/voteForSurvey"
import donationHistory from "./slices/profile/donationHistory"
import invoices from "./slices/profile/invoices"
import donationPayment from "./slices/donation/donationPayment"
import jobs from "./slices/Home/jobs"
import applyJob from "./slices/Home/applyJob"
import giftsCategories from "./slices/gifts/giftsCategories"
import giftsCards from "./slices/gifts/giftsCards"
import giftPayment from "./slices/gifts/giftPayment"
import checkout from "./slices/cart/checkout"
import banks from "./slices/cart/banks"
import bankDonation from "./slices/cart/bankDonation"
import completeOrder from "./slices/cart/completeOrder"
import serviceReview from "./slices/utils/serviceReview"







const store = configureStore({
    reducer:{
        login,
        otpCode,
        loggedUser,
        updateProfile,
        logout,
        contactInfo,
        contactus,
        slider,
        events,
        brief,
        BoardOfDirectors,
        ServicesAlbir,
        seasonalProjects,
        seasonalProjectsDetails,
        eventDetails,
        governanceMaterial,
        governanceMaterialDetails,
        branches,
        pages,
        page,
        question,
        quickServices,
        projects,
        gallery,
        news,
        serviceDetails,
        newsDetails,
        ourPartners,
        newsSection,
        newsSectionDetails,
        photoSection,
        videoSection,
        viewPhotos,
        viewVideos,
        listOfMembers,
        memberDetails,
        membershipType,
        donateOnline,
        donateOnlineDetails,
        modules,
        modulesDetails,
        cart,
        updateCart,
        deleteItem,
        addToCart,
        removeCart,
        surveys,
        voteForSurvey,
        donationHistory,
        invoices,
        join,
        donorJoin,
        donationPayment,
        jobs,
        applyJob,
        giftsCategories,
        giftsCards,
        giftPayment,
        checkout,
        banks,
        bankDonation,
        completeOrder,
        serviceReview
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
    }),
})

export default store