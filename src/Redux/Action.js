import axios from 'axios'


const apiCalls = ( ) => {
     return async(dispatch) => {
        dispatch({type:"FETCH_DATA_REQUESTS" })


    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({type:"FETCH_DATA_SUCCESS" , payload : res.data})
    }catch(err){
        dispatch({type:"FETCH_DATA_ERROR" , payload : err.message})

    }
}
}

export default apiCalls