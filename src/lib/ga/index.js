import ReactGA from "react-ga4"

// log the pageview with URL w/o react-GA
// export const pageview = (url) => {
//     window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
//         page_path: url,
//     })
// }
// log the pageview with URL and react-GA
// export const pageview = (url) => {
//     ReactGA.set({ page:url })
//     ReactGA.pageview(url)
// }

// log specific events w/o react-GA
// export const event = ({ action, params }) => {
//     window.gtag("event", action, params)
// }

// log specific events w/ react-GA
export const event = ({ action, params }) => {
    ReactGA.event({
        category: "Event", // Can update with other event categories
        action,
        ...params
    })
}

// Initialize Google Analytics
export const initGA = () => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
}

//  Track initial page view
export const logPageView = () => {
    ReactGA.pageview(window.location.pathname)
}