import Layout from "../Layout"

import {Slide, Fade} from "react-awesome-reveal"

const Error = () => {
  return (
    <Layout hero={false}>
        <div className="max-w-5xl mx-auto px-5 lg:px-0 relative z-10 py-20 text-center">
            <Slide direction="up" className="font-bold text-6xl text-white">404</Slide>
            <Slide direction="down" className="text-2xl text-gray-500 mt-2">Page Not Found!</Slide>
        </div>
    </Layout>
  )
}

export default Error