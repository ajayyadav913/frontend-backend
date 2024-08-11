const asyncHendler = (requestHandler) => {
 (req,res,next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err));
    
 }
}

 export {asyncHendler}

// Another Mathod 
// Note what is higher Order Funciton ? function that accepts functions as parameters and/or returns a function is callsed Higher Order Function.   
// const asyncHendler = ()=>{}
// const asyncHendler = (func) => {}
// const asyncHendler = (func) => async() => {}

// const asyncHendler = (fn) => async (req, res, next) =>   { 
//     try {
//      await fn(req, res, next)   
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message 
//         })   
//     }

// }   
