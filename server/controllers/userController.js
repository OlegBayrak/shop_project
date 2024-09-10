const ApiError = require('../errorHandler/apiError');

class UserController {
    async registration(req,res) {

    }

    async login(req,res){
        res.json()
    }

    async check(req,res, next){
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('ID parameter is not defined!'))
        }
        res.json(id);
    }
}

module.exports = new UserController();