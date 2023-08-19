import Layout from "../Layout"

import {Slide, Fade} from "react-awesome-reveal"

const About = () => {
  return (
    <Layout hero={false}>
        <div className="max-w-5xl mx-auto px-5 lg:px-0 relative z-10 py-20">
            <Slide direction="up" className="font-bold text-6xl text-white">A little bit about me</Slide>
            <Slide direction="down" className="text-2xl text-gray-500 mt-2">Who I am and what I do.</Slide>
        
            <Fade delay={500}>
                <div className="text-gray-500 space-y-3 text-lg mt-20">
                    <p>Hello there! I'm Ferdi Sahin, a passionate Frontend Developer with a love for creating captivating and user-centric web experiences. With a strong foundation in web technologies and a keen eye for design, I thrive on turning complex ideas into elegant, functional, and responsive interfaces.</p>
                    <p>My journey in the world of web development began with a fascination for crafting pixel-perfect designs during my early years. As I delved deeper, I realized that the real magic happens when design seamlessly meets functionality. This realization led me to dive headfirst into the world of HTML, CSS, and JavaScript, where I honed my skills in building dynamic and visually appealing websites.</p>
                    <p>What sets me apart is my commitment to staying up-to-date with the latest industry trends and emerging technologies. I take pride in my ability to transform design mockups into interactive prototypes and, ultimately, into fully functional web applications. My toolkit includes a deep understanding of modern frontend frameworks like React and Vue.js, enabling me to create seamless single-page applications that provide users with an immersive online experience.</p>
                    <p>As a Frontend Developer, I don't just stop at writing code. I'm a firm believer in the importance of usability and accessibility. Crafting interfaces that are not only visually appealing but also easy to navigate and accessible to all users is a fundamental aspect of my work philosophy. I find joy in optimizing performance and ensuring compatibility across various browsers and devices, because a great user experience knows no bounds.</p>
                    <p>When I'm not immersed in lines of code, you'll likely find me exploring new design trends, experimenting with creative coding projects, or enjoying a cup of coffee while sketching out wireframes for my next exciting endeavor.</p>
                    <p>Join me on this journey of innovation and creativity as we work together to shape the digital landscape, one exceptional user interface at a time.</p>
                    <p>Let's build experiences that leave a lasting impression.</p>
                </div>
            </Fade>
        </div>
    </Layout>
  )
}

export default About