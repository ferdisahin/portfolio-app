import Footer from "./components/Footer"
import Hero from "./components/Hero"

const Layout = ({children, hero}) => {
  return (
    <div className="overflow-x-hidden">
        {hero === false ? <Hero type={false} /> : <Hero />}
        {children}
        <Footer />
    </div>
  )
}

export default Layout