import {createSlice} from '@redux/toolkit';

const initialState={
    Recommend:null,
    Newtohappy:null,
    Actuals:null,
    ontop:null,

};
const Movieslice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.Recommend=action.payload.Recommend;
            state.Newtohappy=action.payload.Newtohappy;
            state.Actuals=action.payload.Actuals;
            state.ontop=action.payload.ontop;
        },
    },
});

export const {setMovies}=Movieslice.actions;

export const selectrEcommend=state => state.movie.Recommend;
export const selectEwtohappy=state => state.movie.Newtohappy;
export const selectaCtual= state => state.movie.Actuals;
export const slectoNtop = stae => state.movie.ontop;

export default Movieslice.reducers;