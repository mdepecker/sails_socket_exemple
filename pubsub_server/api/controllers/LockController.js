/**
 * LockController
 *
 * @description :: Server-side logic for managing locks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getMyLocks: function(req,res){
        if(!req.isSocket)return res.json(401,{err:'is not a socket request'});
        var userId = req.param('userId');
        Lock.find({owner:userId}).populate('logs').exec(
            function(err,locks){
                if(err)return res.error()
                Lock.subscribe(req, _.pluck(locks,'id'))
                return res.json(locks)
            }
        )
    }
};

