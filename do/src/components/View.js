import styled from 'styled-components';
const View= (props)=>{
    return (
    <Container>
        <Warp>
            <img src="/images/tv11.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/b1.mp4" type='video/mp4'/>
            </video>

        </Warp>
        <Warp>
            <img src="/images/tv12.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/b1.mp4" type="video/mp4"/>
            </video>
        </Warp>
        <Warp>
            <img src="/images/tv13.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/b1.mp4" type="video/mp4"/>
            </video>
            
        </Warp>
        <Warp>
            <img src="/images/tv14.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/b1.mp4" type="video/mp4"/>
            </video>
        </Warp>
        <Warp>
            <img src="/images/tv15.png" alt=""/>
            <video autoPlay={true} loop ={true} playsInline={true}>
                <source src="/videos/b1.mp4" type="video/mp4"/>
            </video>
        </Warp>
        
    </Container>
    );

};
const Container = styled.div`
    margin-top:29px;
    padding:30px 0px 25px;
    display:grid;
    grid-gap:24px;
    gap:25px;
    grid-template-columns:repeat(5,minmax(0,1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(1,minmax(0,1fr));
    }

`;
const Warp=styled.div`
    padding-top:56.25%;
    border-radius:10px;
    box-shadow:rgb(0 0 0/70%) 0px 25px 30px -10px,rgb(0 0 0 / 72%) 0px 15px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    transition: all 50ms cubic-bezier(0.25,0.45,0.47,0.95);
    border:3px solid rgba(249,49,249,0.1);
    img{
        inset:0px;
        display:block;
        height:100%;
        object-fit:cover;
        opacity:1;
        position:absolute;
        transition:opacity 500ms ease-in-out 0s;
        width:100%;
        z-index:1;
        top:0;
        
    }
    video{
        width:100%;
        height:100%;
        position:absolute;
        top:0px;
        opacity:0;
        z-index:0;

        
    }
    &:hover{
        box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
        
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);

        video{
            opacity:1;
        }
    }

`;
export default View;