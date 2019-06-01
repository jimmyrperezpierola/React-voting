import React, { Component } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap';

const divStyle = {
    width: `800px`,
    marginTop: `100px`,
    marginLeft: `1000px`
}

const imgStyle = {
    height: `700px`
}

class Slider extends Component {
    render() {
        return (
            <div>
                <div className="he">
                    <h1>Slider</h1>
                </div>
                <div style={divStyle}>
                    <Carousel interval={3000} fade={true} controls={false}>
                        <Carousel.Item>
                            <img style={imgStyle}
                                className="d-block w-100"
                                src="https://www.aclufl.org/sites/default/files/styles/featured_image_mobile_480x268/public/field_image/letmevote2018.png?itok=M_42W6yP"
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img style={imgStyle}
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ViKXCOEIYC_ZcMDdlVP3KC91ZVYjl2Y-L7JN0wK5yAw9peVO"
                                alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img style={imgStyle}
                                className="d-block w-100"
                                src="https://image.shutterstock.com/image-vector/vote-opinion-poll-concept-vector-260nw-758596648.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default Slider;
