import WorkIcon1 from "../assets/Subbi.svg"
import WorkScreen1 from "../assets/cryptopnz.png"
import WorkIcon2 from "../assets/ReactDocs.svg"
import WorkScreen2 from "../assets/logosoft.png"
import WorkScreen3 from "../assets/karatay.png"

export const Works = [
    {
        title: 'CryptoPNZ',
        description: 'I completed the interface of the CryptoPNZ site with HTML5, TailwindCSS and jQuery in approximately 1 week. It has been a very fun project for me.',
        icon: <WorkIcon1 />,
        screenshot: <WorkScreen1 />,
        buttonText: 'Visit Site',
        url: 'https://cryptopnz.com/'
    },
    {
        title: 'Logosoft',
        description: 'I made all the pages of the Logosoft site using Bootstrap and jQuery. I delivered the project to my client in an average of 10 days.',
        icon: <WorkIcon2 />,
        screenshot: <WorkScreen2 />,
        buttonText: 'Visit Site',
        url: 'https://logosoft.com.tr/en'
    },
    {
        title: 'Karatay',
        description: 'I prepared the interface of Karatay Municipality using Bootstrap and jQuery. It had approximately 15 pages and I delivered all of them to my customer in 15 days.',
        icon: <WorkIcon2 />,
        screenshot: <WorkScreen3 />,
        buttonText: 'Visit Site',
        url: 'https://www.karatay.bel.tr/en/'
    },
]