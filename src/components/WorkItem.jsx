import { RightArrow } from "../icons"

import {Slide} from "react-awesome-reveal"

import {Link} from "react-router-dom"

const WorkItem = ({title, description, icon, screenshot, buttonText, url}) => {
  return (
    <Slide direction="right">
        <div className='bg-onyx rounded-xl border border-mineShaft grid grid-cols-12 gap-5'>
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-start gap-y-4 p-8 md:p-14">
        
                <div className="font-extrabold text-xl md:text-3xl text-white">
                    {title}
                </div>
        
                <div className="text-gray-500 text-sm md:text-base">{description}</div>
                <Link to={url} target="_blank" rel="nofollow" className="text-white flex items-center gap-2 font-medium md:text-lg group">
                    {buttonText}
                    <RightArrow className="group-hover:translate-x-2 transition-all w-4 h-4 md:w-5 md:h-5" />
                </Link>
            </div>
            <div className="col-span-12 md:col-span-5 hidden md:block">
                <img src={screenshot.type} alt={title} />
            </div>
        </div>
    </Slide>
  )
}

export default WorkItem