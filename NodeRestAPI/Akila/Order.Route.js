var express     = require('express');
var router      = express.Router();
var Controller  = require('./Order.Controller');

router.post('/',function (req, res)  {
    Controller.insert(req.body).then(function(data)  {
        res.status(data.status).send({message: data.message});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    })
});


router.put('/:id',function (req, res)  {
    Controller.update(req.params.id, req.body).then(function(data)  {
        res.status(data.status).send({message: data.message});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', function(req, res)  {
    Controller.searchAll().then(function(data)  {
        res.status(data.status).send({data: data.data});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:id', function(req, res)  {
    Controller.search(req.params.id).then(function(data)  {
        res.status(data.status).send({data: data.data});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    });
});

router.delete('/:id', function(req, res)  {
    Controller.delete(req.params.id).then(function(data)  {
        res.status(data.status).send({message: data.message});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    })
})
module.exports = router;

