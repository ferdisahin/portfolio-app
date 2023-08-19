import Layout from '../Layout'
import WorkItem from '../components/WorkItem'
import ContactCard from "../components/ContactCard"

import { Works } from '../lib/works'

const Home = () => {

  return (
    <Layout>
        <div className="max-w-5xl mx-auto space-y-5 md:space-y-40 px-5 lg:px-0">
            <div>
                <div className="font-bold mb-4 lg:mb-8 text-xl md:text-3xl lg:text-5xl text-white">Selected Work</div>
                <div className="space-y-8">
                    {Works.map((item, index) => (
                        <WorkItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            screenshot={item?.screenshot}
                            buttonText={item?.buttonText}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>

            <ContactCard />
        </div>
    </Layout>
  )
}

export default Home