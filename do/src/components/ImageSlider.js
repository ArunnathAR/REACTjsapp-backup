import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const ImageSlider = (props) =>{
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true,
    };
    return (
        <div>
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src="/images/my (1).jpg" alt=""/>

                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/rrr-review-250322-1.jpg" alt=""/>

                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/KGF-chapter2 (2).jpg" alt=""/>

                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/2.0.jpg" alt=""/>

                    </a>
                </Wrap>




            </Carousel>
        </div>
    );
};
const Carousel = styled(Slider)`
    margin-top:21.4px;
    &>button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;

        }
    }
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,171,190)

        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list{
        overflow:initial;
    }
    .slick-prev{
        left: -67px;
    }
    .slick-next{
        right: -67px;
    }
`;
const Wrap = styled.div`
    border-radius:4.2px;
    cursor:pointer;
    position:relative;
    a{
        border-radius:4.2px;
        box-shadow:rgb(0 0 0/ 70%)0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px;
        cursor:pointer;
        display:block;
        position:relative;
        padding:4.2px;
    
        img{
            width:100%;
            height:100%;
        }
        &:hover{
            padding:0;
            border: 4.2px solid white;
            transition-duration: 302ms;

        }
    }

`;
export default ImageSlider;