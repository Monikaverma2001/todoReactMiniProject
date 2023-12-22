import { DECREMENT, INCREMENT } from "../Action"

 const initialState={
    count:JSON.parse(localStorage.getItem("list"))==null?[]:JSON.parse(localStorage.getItem("list"))
}

export const myReducer=(state=initialState,Action)=>{
    switch(Action.type){
        case INCREMENT:
            
            var newvar=[...state.count,{...Action.payload}]
            localStorage.setItem("list",JSON.stringify(newvar))
            return {...state,count:[...state.count,{...Action.payload}]}
        case DECREMENT:
        
            newvar=[ ...state.count.filter((e)=>e.index!=Action.payload.index)];
            localStorage.setItem("list",JSON.stringify(newvar))
            return  {...state, count: [ ...state.count.filter((e)=>e.index!=Action.payload.index)]}
        default:
            return state;
    }
}