import { DECREMENT, INCREMENT } from "../Action"

 const initialState={
    count:[{
       title:"title is here",
       description:"here the description",
       index:1
    }]
}

export const myReducer=(state=initialState,Action)=>{
    switch(Action.type){
        case INCREMENT:
            return {...state,count:[...state.count,{...Action.payload}]}
        case DECREMENT:
         
            return  {...state, count: [ ...state.count.filter((e)=>e.index!=Action.payload.index)]}
        default:
            return state;
    }
}