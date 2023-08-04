import React,{useState} from 'react';
import TextFiled from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SEarch= () =>{
    const [myOptions,setMyOptions]=useState([])

    const getDataFromAPI =() => {
        console.log("Options Fetched from API")

        fetch('httpss://dummy.restapiexample.com/api/v1/employess').then((response)=>{
            return response.jsom()
        }).then((res) => {
            console.log(res.data)
            for (var i=0; i<res.data.length; i++){
                myOptions.push(res.data[i].employee_name)
            }
            setMyOptions(myOptions)

        })
    }

    return (
        <div style={{marginLeft:'40%',marginTop:'0px'}}>
            <h3>Your Favourite Movie Names</h3>
            <Autocomplete
                style={{width: 500}}
                freesolo
                AutocompleteautoHighlight
                options={myOptions}
                renderInput={(params)=>(
                    <TextField {...params}
                        onChange={getDataFromAPI}
                        variant="outlined"
                        label="Search Box"
                    />

                )}

            />
            

        </div>

    );
}
export default SEarch;