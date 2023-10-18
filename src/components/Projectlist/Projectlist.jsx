import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../assets/Admin-Panel-Dashboard.png'
import olximage from '../../assets/olx-clone image.png'
import netfliximage from '../../assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../assets/Gridlinesbuilders.png'
import charlespizza from '../../assets/Charlestown-Pizza.png'
import todolist from '../../assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container style={{ height: "100vh" }}>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="My Portfolio"
                description="Là trang web giới thiệu về bản thân tôi. Sử dụng Reactjs, Bootstrap."
                ghLink="https://vanlq162003.vercel.app/"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="LQV Store"
                description="Là trang web bán hàng điện tử. Sử dụng Angular, json-server."
                ghLink="https://angular-projects-two.vercel.app/home"
              />
            </Col> */}

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Chat-App-FE"
                description="Là trang web chat. Sử dụng Reactjs, ChakraUI ."
                ghLink="https://github.com/Vanlq162003/FE_chat"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Chat-App-BE"
                description="Là trang web chat. Sử dụng  NodeJs, MongoDB, Socket.io ."
                ghLink="https://github.com/Vanlq162003/BE_chat"
              />
            </Col>

            

            

            
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist