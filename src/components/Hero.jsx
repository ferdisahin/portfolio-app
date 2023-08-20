import {Link, NavLink} from "react-router-dom"
import { GithubIcon, InstagramIcon, LinkedinIcon, MenuIcon, XIcon } from "../icons"

import Button from "./Button"
import { useState } from "react"
import { Fade, Slide } from "react-awesome-reveal";

import { useAutoAnimate } from '@formkit/auto-animate/react'

import Logo from "../assets/logo.svg"

const Hero = ({type}) => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const [animationParent] = useAutoAnimate()    

    const menus = [
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

    const social = [
        {
            link: import.meta.env.VITE_SOCIAL_LINKEDIN,
            icon: <LinkedinIcon className="w-6 h-6 fill-primary hover:fill-white transition-all" />
        },
        {
            link: import.meta.env.VITE_SOCIAL_X,
            icon: <XIcon className="w-6 h-6 fill-primary hover:fill-white transition-all" />
        },
        {
            link: import.meta.env.VITE_SOCIAL_GITHUB,
            icon: <GithubIcon className="w-6 h-6 fill-primary hover:fill-white transition-all" />
        },
        {
            link: import.meta.env.VITE_SOCIAL_INSTAGRAM,
            icon: <InstagramIcon className="w-6 h-6 fill-primary hover:fill-white transition-all" />
        },
    ]

  return (
    <div className='max-w-5xl mx-auto py-5 text-white relative px-5 lg:px-0'>

        <div className="absolute -top-10 left-1/2 -translate-x-1/2 hidden lg:flex">
            <div className="w-96 h-40 rounded-b bg-grColor1/20 blur-2xl"></div>
            <div className="-ml-10 w-96 h-40 rounded-b bg-grColor2/20 blur-3xl"></div>
            <div className="-ml-10 w-96 h-40 rounded-b bg-grColor3/20 blur-3xl"></div>
        </div>


            <div className="bg-primary/30 p-4 rounded relative z-50 backdrop-blur-lg">
                <div className="grid grid-cols-12 gap-5 items-center">
                    <div className="col-span-8 flex items-center gap-10">
                        <Link className="text-2xl font-semibold" to="/">
                            <img src={Logo} className="w-8 h-8" alt="" />
                        </Link>
                        <nav className="hidden md:flex gap-10">
                            {menus.map((item, index) => (
                                <NavLink key={index} to={item.slug} className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'text-white' : 'text-primary hover:text-white transition-all'}>{item.name}</NavLink>
                            ))}
                        </nav>
                    </div>
                    <div className="col-span-4 flex md:block justify-end">
                        <nav className="hidden md:flex items-center gap-5 justify-end">
                            {social.map((item, index) => (
                                <Link target="_blank" rel="nofollow" key={index} to={item.link}>{item.icon}</Link>
                            ))}
                        </nav>
                        <button onClick={() => {setMobileMenu(!mobileMenu)}} className="md:hidden"><MenuIcon /></button>
                    </div>
                    <div className={`col-span-12`} ref={animationParent}>
                        {mobileMenu && (
                            <nav className="flex flex-col gap-5">
                                {menus.map((item, index) => (
                                    <Link key={index} to={item.slug} className="text-primary hover:text-white transition-all">{item.name}</Link>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>
            </div>


        {type === false ? '' : (
            <div className="py-20 lg:py-40">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-10">
                        <Fade cascade>
                            <div className="text-4xl lg:text-6xl font-bold"><span className="text-secondary">I'm</span> Ferdi Sahin</div>
                        </Fade>
                        <Slide direction="up">
                            <div className="text-lg lg:text-2xl font-medium text-secondary mt-5 lg:mt-10">
                            I'm a front-end developer and UI/UX designer, adept at bringing startup visions to life in the digital realm. My focus lies in creating sleek web-based applications that harmonize aesthetics with seamless functionality.
                            </div>
                        </Slide>                  
                        <Slide direction="down"><Button className="mt-5" to={import.meta.env.VITE_SOCIAL_LINKEDIN} target="_blank" rel="nofollow">See My LinkedIn Profile</Button></Slide>
                    </div>
                </div>
            </div>            
        )}
    </div>
  )
}

export default Hero