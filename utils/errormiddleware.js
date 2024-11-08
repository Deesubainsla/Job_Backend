
const errormiddleware = (err, req, res, next)=>{

    //sequence of parameter is also important in both error and normal middleware:

    //If a middleware has four parameters (i.e., err, req, res, next), Express treats it as an error-handling middleware.
    // If a middleware has three parameters (i.e., req, res, next), it’s a normal middleware (like a route handler).

    err.message ||= "Error from Server side";
    err.statuscode ||= 500;
    
    res.status(err.statuscode)
    .json({
        success: false,
        message: err.message
    })
}

class error extends Error{

    constructor(message, statuscode){
        super(message);//calling parent class constructor:
        this.statuscode = statuscode;//setting the statuscode
    }

}

export {errormiddleware, error}