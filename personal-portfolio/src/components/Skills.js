import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have worked with Technologies in the world of web development.<br></br> ranging from Front-end to Back-end.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Front-End</h5>
                                    <l1>React.js</l1><br />
                                    <l1>Bootstrap</l1> <br/>
                                    <l1>HTML</l1><br/>
                                    <l1>CSS</l1>
                  
                                
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                  <h5>Back-End</h5>
                                    <l1>Node.js</l1><br />
                                    <l1>Express.js</l1> <br/>
                                    <l1>SQL</l1><br/>
                                    <l1>NoSQL</l1><br/>
                                    <l1>JavaScript</l1><br />
                                    <l1>Python</l1><br/>
                            </div>
                                   

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
