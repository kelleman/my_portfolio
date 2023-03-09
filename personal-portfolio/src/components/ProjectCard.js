import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br/>
                
        </div>
      </div>
      <a className="links"  href="#"> Live View</a>
        <a className="links" href="#"> Source</a>
        
    </Col>
    
  )
}
