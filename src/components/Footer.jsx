import {Link} from "react-router-dom"

import {Fade} from "react-awesome-reveal"

const Footer = () => {

    const Links = [
        {
            slug: '/about',
            name: 'About'
        },
        {
            slug: '/work',
            name: 'Work'
        },
        {
            slug: '/contact',
            name: 'Contact'
        }
    ]

    const Social = [
        {
            name: "Linkedin",
            link: import.meta.env.VITE_SOCIAL_LINKEDIN
        },
        {
            name: 'X',
            link: import.meta.env.VITE_SOCIAL_X
        },
        {
            name: 'Github',
            link: import.meta.env.VITE_SOCIAL_GITHUB
        },
        {
            name: 'Instagram',
            link: import.meta.env.VITE_SOCIAL_INSTAGRAM
        },
    ]

  return (
    <Fade>
        <div className="max-w-5xl mx-auto py-10 relative px-5 lg:px-0">
            <div className="absolute left-0 lg:-left-10 top-0 right-0 lg:-right-10 bottom-0 bg-gradient-to-r from-grColor1/10 via-grColor2/40 to-grColor3/20 rounded-t-3xl blur-3xl"></div>
            <div className="grid md:grid-cols-2 gap-5 relative z-10">
                <div className="text-center md:text-left">
                    <Link to="/" className="font-bold text-2xl text-white">FS</Link>
                    <p className="text-gray-500 mt-2">© 2023 {import.meta.env.VITE_SITE_TITLE}. All Rights Reserved.</p>
                </div>
                <div className="flex justify-center md:justify-end gap-28 mt-5 md:mt-0">
                    <div>
                        <div className="font-bold text-white mb-8">Links</div>
                        <nav className="flex flex-col gap-y-4">
                            {Links.map((item, index) => (
                                <Link key={index} to={item.slug} className="text-gray-500 hover:text-white transition-all">{item.name}</Link>
                            ))}
                        </nav>
                    </div>
                    <div>
                        <div className="font-bold text-white mb-8">Social</div>
                        <nav className="flex flex-col gap-y-4">
                            {Social.map((item, index) => (
                                <Link key={index} target="_blank" rel="nofollow" to={item.slug} className="text-gray-500 hover:text-white transition-all">{item.name}</Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default Footer