export const INCREMENT="INCREMENT"
export const DECREMENT="DECREMENT"

export const increment=(i,value,value1)=>{
    return {
        type:INCREMENT,
        payload:{
            index:i,
            title:value,
            description:value1
        }
    }
}
export const decrement=(i,value,value1)=>{
    return {
        type:DECREMENT,
        payload:{
            index:i,
            title:value,
            description:value1
        }
    }
}