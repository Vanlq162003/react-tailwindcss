import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>Xin chào, tôi tên là Lê Quang Văn. Sinh năm 2003 và quê ở Thanh Hóa, tôi hiện đang sống và làm việc tại Hà Nội. Hiện tại, tôi đang theo học tại trường Cao đẳng FPT Polytechnic. <br />

                            Sở thích của tôi nằm trong lĩnh vực lập trình và phát triển web. Tôi luôn hứng thú và đam mê trong việc tạo ra những trang web tuyệt đẹp và tương tác. Mục tiêu nghề nghiệp của tôi là trở thành một chuyên gia phát triển web với khả năng tạo ra những ứng dụng web có tầm ảnh hưởng lớn.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>TailwindCss/ Bootstrap 5</li>
                                    <li>MongoDB/ MySQL</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js/Angular</li>
                                    {/* <li></li> */}
                                    <li>PHP/ Nodejs</li>
                                    <li>Swagger/ Vecel</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage