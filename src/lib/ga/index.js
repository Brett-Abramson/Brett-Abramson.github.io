import ReactGA from "react-ga"

// log the pageview with URL w/o react-GA
// export const pageview = (url) => {
//     window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
//         page_path: url,
//     })
// }
// log the pageview with URL and react-GA
export const pageview = (url) => {
    ReactGA.pageview(url)
}

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