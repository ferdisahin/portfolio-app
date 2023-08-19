import Layout from "../Layout"

import {Slide} from "react-awesome-reveal"

import WorkItem from '../components/WorkItem'
import { Works } from "../lib/works"

const Work = () => {
  return (
    <Layout hero={false}>
        <div className="max-w-5xl mx-auto px-5 lg:px-0 relative z-10 py-20">
            <Slide direction="up" className="font-bold text-6xl text-white">Works</Slide>
            <Slide direction="down" className="text-2xl text-gray-500 mt-2">Works I've done</Slide>
        
            <div className="space-y-8 mt-20">
                {Works.map((item, index) => (
                    <WorkItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        screenshot={item.screenshot}
                        buttonText={item.buttonText}
                        url={item.url}
                    />
                ))}
            </div>            
        </div>
    </Layout>
  )
}

export default Work