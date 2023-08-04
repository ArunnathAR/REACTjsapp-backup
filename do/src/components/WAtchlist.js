import styled from 'styled-components';

const WAtchlist = (props) =>{
    return(
        <Container>
            <h2>Your watchlist</h2>
            <Content>
                <Wrap>
                
                    <img src="/images/i1.jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/i2.jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/i3.jpeg" alt=""/>

                </Wrap>
                <Wrap>
                    <img src="/images/i5.jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/w1.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/w2.png" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w3.jpg" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w4.jpg" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w5.jpg" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w6.jpg" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w7.jpeg" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w8.jpg" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w9.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/w10.jpg" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w11.png" alt=""/>
                </Wrap><Wrap>
                    <img src="/images/w12.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/w13.jpg" alt=""/>
                </Wrap>
            
            </Content>

    </Container>
    );
};
const  Container= styled.div`
    padding:0 0 25px;

    
`;
const Content=styled.div`
    display:grid;
    grid-gap:24px;
    gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;
const Wrap=styled.div`
    padding-top:200px;
    padding-bottom:200px;
    margin:10px;
    border-radius:12px;
    box-shadow:rgb(0 0 0 /70%) 0px 26px 29px 10px,
    rgb(0 0 0/72%) 0px 15px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    transition: all 249ms cubic-bezier(0.25,0.46,0.44,0.94) 0s;
    border:1px solid rgba(249,249,249,0.1);
    img {
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
    &:hover{
        box-shadow:rgb(0 0 0 /79% )0px 40px 56px 16px,
        rgb(0 0 0 / 72%) 0px 30px 21px -10px;
        transform:scale(1.1);
        border-color:rgba(249,249,249,0.8);
    }
`;


export default WAtchlist;