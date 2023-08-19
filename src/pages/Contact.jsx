import { useForm, ValidationError } from '@formspree/react';
import Layout from '../Layout';

import {Slide, Fade} from "react-awesome-reveal"
import { MailIcon } from '../icons';

function ContactForm() {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);
    if (state.succeeded) {
        return (
            <div className='h-96 flex flex-col gap-y-5 items-center justify-center'>
                <MailIcon />
                <div className="font-semibold text-4xl text-white">Message Sent!</div>
                <div className='text-gray-500 font-medium'>Thanks for taking the time to write me, I’ll reply to you as soon!</div>
            </div>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-6 gap-5 items-center p-5'>
                <label className='col-span-6 md:col-span-1 text-white' htmlFor="email">
                Email Address:
                </label>

                <div className='col-span-6 md:col-span-5'>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className='!ring-0 !outline-none bg-transparent text-white h-10 placeholder-gray-600'
                    placeholder='Enter your email address'
                    />
                    <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    />
                </div>
            </div>
            <div className='grid grid-cols-6 gap-5 items-center p-5'>
                <label className='col-span-6 md:col-span-1 text-white' htmlFor="name">
                Name:
                </label>

                <div className='col-span-6 md:col-span-5'>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    className='!ring-0 !outline-none bg-transparent text-white h-10 placeholder-gray-600'
                    placeholder='Enter your name'
                    />
                    <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    />
                </div>
            </div>
            <div className='grid grid-cols-6 gap-5 p-5'>
                <label className='col-span-6 md:col-span-1 text-white' htmlFor="message">
                    Message:
                </label>            
                <div className="col-span-6 md:col-span-5">
                    <textarea
                        id="message"
                        name="message"
                        className='h-32 bg-transparent !ring-0 !outline-none text-white placeholder-gray-600 resize-none w-full'
                        placeholder='Write your message here'
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
            </div>
        <div className='p-5'>
            <button className='py-2 px-4 rounded bg-zinc-800/80 hover:bg-zinc-800 transition-all text-white' type="submit" disabled={state.submitting}>
              Submit
            </button>
        </div>
      </form>
    );
  }

const Contact = () => {
  return (
    <Layout hero={false}>
        <div className="max-w-5xl mx-auto px-5 lg:px-0 relative z-10 py-20">
            <Slide direction="up" className="font-bold text-6xl text-white">Get in touch</Slide>
            <Slide direction="down" className="text-2xl text-gray-500 mt-2">Let’s build something awesome.</Slide>
        
            <Fade className='mt-20' delay={500}>
                <div className='bg-onyx rounded-lg'>
                    <ContactForm />
                </div>
            </Fade>
        </div>
    </Layout>
  )
}

export default Contact