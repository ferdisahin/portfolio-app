import { SendIcon } from "../icons"
import Button from "./Button"

import {Fade} from "react-awesome-reveal"

const ContactCard = () => {
  return (
    <Fade>
        <div className="grid grid-cols-12 gap-5 items-center py-10 md:py-28">
            <div className="col-span-12 sm:col-span-7">
                <div className="font-bold mb-8 text-3xl md:text-5xl text-white">Let’s work together</div>
                <div className="text-lg md:text-xl text-gray-500 mt-2">
                    Want to discuss an opportunity to create something great? I’m ready when you are.
                </div>
            </div>
            <div className="col-span-12 sm:col-span-5 flex sm:justify-end items-start">
                <Button to="/contact" className="text-white">
                    <SendIcon className="w-5 h-5" />
                    Get in Touch
                </Button>
            </div>
        </div>
    </Fade>
  )
}

export default ContactCard