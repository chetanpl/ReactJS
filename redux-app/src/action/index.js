const incNumber=(num)=>{
    return {
        type:'increment',
        payload:num
    }
}

const decNumber=(num)=>{
    return {
        type:'decrement',
        payload:num
    }
}
const userdata=(usermetadata,professionalDetails)=>{
    return{
        type:'user',
        payload:usermetadata,
        payload1: professionalDetails

        
    }
}

export {incNumber,decNumber,userdata}