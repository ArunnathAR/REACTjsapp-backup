import {createSlice} from '@reduxjs/toolkit';
const initialsTate = {
    name: '',
    email:'',
    photo: " ",

};
const user = createSlice({
    name:'user',
    initialsTate,
    reducers:{
        setUserLoginDetails:(state,action) =>{
            state.name= action.payload.name;
            state.email=action.payload.email;
            state.photo = action.paylaod.photo;



        },
        setSignOutState:(state) =>{
            state.name = null;
            state.email=null;
            state.photo=null;
        },
    },
});
export const {setUserLoginDetails,setSignOutState}=user.actions;

export const selectUsername=(state) =>state.user.name;
export const selectUserEmail=(state) => state.user.email;
export const selectUserphoto = (state)=> state.user.photo;
