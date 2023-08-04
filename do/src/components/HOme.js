import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import View from './View';
import Recommends from './Recommends';
import Newtohappy  from './Newtohappy';
import Actuals from './Actuals';
import Ontop from './Ontop';
const HOme = (props) =>{
    
    return (
        <Container>
            <ImageSlider/>
            <View/>
            <Recommends/>
            <Newtohappy/>
            <Actuals/>
            <Ontop/>
        </Container>
        
    );
};
const Container = styled.main`
    position:relative;
    min-height:calc(100vh - 50px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);

    &:after{
        background:url('/images/home-background.png) center center / cover no-repeat fixed ;
        content:' ';
        position:absolute;
        inset:0px;
        opacity:1;
        z-index:-1;
    }

    `;
export default HOme;