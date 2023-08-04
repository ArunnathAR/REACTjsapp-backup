import styled from 'styled-components';
const Login = (props) =>{
    return(
        <Container>
            <Content>
                <Pat>
                    <Patlog src="/images/p100.png" alt=""/>
                    <Signup>GET HERE EVERYTHING</Signup>
                    <Desc>Here is the disney + hotstar for you  guys
                         hope you
                        like this platform for spending your
                         valueable time on this
                         entertainmental occassion 
                         Just tap on the button to start.</Desc>
                    <Patlogt src="" alt=""/>
                </Pat>
                <BgImage/>
            </Content>
        </Container>
    );
};
const Container = styled.section`
    overflow:hiodeen;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;
const Content = styled.div`
    margin-bottom:10em;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    dsiplay:flex;
    justify-content:center;
    alignitems:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`;
const BgImage = styled.div`
    height:100%;
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;

    background-image:url("/images/login.jpg");
    position:absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`;
const Pat=styled.div`
    margin-bottom:2em;
    max-width:650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:0;
    align-items:center;
    text-align:center;
    margin-right:auto;
    margin-left:auto;
    transition-timing-function:ease-out;
    transition:opacity;

`;
const Patlog = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`;
const Signup = styled.a`
    font-weight:bold;
    color:#f9f9f9;
    background-color:#004299;
    margin-bottom:14px;
    width:70%;
    letter-spacing:1.5px;
    font-size:20px;
    padding:17px 0;
    border:1px solid transparent;
    boder-radius:5px;

    &:hover{
        background-color:#0483e5;

    }
`;
const Desc= styled.p`
  color:hsla(0,0%,95.3%,1);
  font-size:17px;
  margin:0 0 24px;
  line-height:1.5;
  letter-spacing:1.5px;
`;
const Patlogt = styled.img`
    width:100%;
    height:auto;
    max-width:600px;
    margin-bottom:20px;
    vertical-align:bottom;
    display:inline-block;
    
`;
export default Login;