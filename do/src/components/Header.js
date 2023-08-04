import styled from "styled-components";
/*import {useDispatch,  useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {auth,provider} from "../firebase";
import {selectUsername,selectUserphoto,setUserLoginDetails}from '../features/user/user'*/
import userEffect from 'react';

const Header = (props) => {
    /*const dispatch = useDispatch()
    const navigate =useNavigate()
    const username = useSelector(selectUsername)
    const userphoto = useSelector(selectUserphoto);*/

    /*useEffect(() => {
        authOrigin.onAuthStateChanged(async(user) => {
            if (user){
                setUser(user);
                Navigate.push("/home");
        
            }
        })
    },[username]);*/



    /*const handlEauth = () => {
        auth.singleInwithPopup(provider).then((result) =>{
            setUser(result.user);
        }).catch((error) =>{
            alert(error.message);

        });
    }
    const setUser = (user) =>{
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email:user.email,
                photo:user.photoURL,
            })

        );
    }*/
    return (<Nav>
        <LOgo>
            <img src="/images/l2.png" alt="Happy" />;
        </LOgo>
        
        <NavMenu>
            <a href='/home'>
                <img src="/images/home-icon.svg" alt="HOME"/>
                <span>HOME</span>
            </a>
            <a href='/search'>
                <img src="/images/search-icon.svg" alt="SEARCH"/>
                <span>SEARCH</span>
            </a>
            <a href='/watchlist'>
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
                <span>WATCHLIST</span>
            </a>
            <a href='/movies'>
                <img src="/images/movie-icon.svg" alt="MOVIES"/>
                <span>MOVIES</span>
            </a>
            <a href='/series'>
                <img src="/images/series-icon.svg" alt="SERIES"/>
                <span>SERIES</span>
            </a>
            <a href='/original'>
                <img src="/images/original-icon.svg" alt="ORIGINAL"/>
                <span>ORIGINAL</span>
            </a>
            

        </NavMenu>
        <SignOut>
            
            <DropDown>
                <span /*onclick={handleAuth}*/>Sign Out</span>

            </DropDown>
        </SignOut>
        <LOGin /*onclick={handlEauth}*/>LOGIN</LOGin>
    </Nav>
    );
};
const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:50px;
    background-color:#FFBF00;
    display:flex;
    justify-content:space-between;
    align-itmes:center;
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;

`;
const LOgo = styled.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:70px;
    font-size:0;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }



`;
const NavMenu=styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    height:100%;
    justify-content;flex-end;
    margin:0px;

    padding:0px;
    position:relative;
    margin-right:auto;
    margin-left:26px;

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        img{
            height 20px;
            min-width:20px;
            width:20px;
            z-inex:auto;
        }
        span{
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.08;
            padding:2px 0px;
            white-space:nowrap;
            position:relative;

            &:before{
            
                background-color:rgb(249,249,249);
                border-radius:0px 0px 4px 4px;
                bottom:-6px;
                content:" ";
                height:2px;
                left:0px;
                opacity:0;
                position:absolute;
                right:0px;
                transform-origin:left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                visibility:hidden;
                width:auto;
    
            }
        }
        &:hover{
            span:before{
                transform:scaleX(1);
                visibility:visible;
                
            }
        }

    }

    /* @media (max-width:768px){
        display:none;
    }*/
`;
const LOGin=styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border:1px solid #f9f9f9f;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    margin-top:10px;
    margin-bottom:7px;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }


`;

const DropDown = styled.div`
    position:absolute;
    top:48px;
    right:0px;
    background:rgb(19,19,19);
    border:1px solid rgba(151,151,151,0,34);
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding:10px;
    font-size:13px;
    letter-spacing:3px;


`;
const SignOut= styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-itmes:center;
    justify-content:center;

`;
/*&:hover{
    ${DropDown}{
        opacity:1;
        transitionduration:1s;
    }
}*/
export default Header;
