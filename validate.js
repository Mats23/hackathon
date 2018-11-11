
module.exports = (req, res, next) => {
      
        const { id } = req.body;
    
        console.log(id);
    
        return next();
    }
