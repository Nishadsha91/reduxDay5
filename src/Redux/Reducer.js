export const FETCH_DATA_REQUESTS = "FETCH_DATA_REQUESTS";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

const initialData = {
    loading : false,
    data : [],
    error : ''
}

const fetchData = (state=initialData,action) => {

    switch(action.type){
        case FETCH_DATA_REQUESTS:
            return {
                ...state,
                loading:true
            }
        case FETCH_DATA_SUCCESS:
            return {
               
                loading:false,
                data: action.payload,
                error:''
            }
        case FETCH_DATA_ERROR:
            return{
                loading:false,
                data:[],
                error:action.payload

            }
        default:
          return   state;
    }
}

export default fetchData;