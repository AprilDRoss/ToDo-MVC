const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/todomvc");

const tasks = new Schema({
  id:{type: Number},
  title:{type: String, required: true},
  order:{type: Number},
  completed:{type: Boolean}
});

const todos = mongoose.model("todos", tasks);
c
router.get('/api/todos', function(req, res){
  todos.find({}).then(function(data){
    res.json(data);
  })
});

router.post('/api/todos',function(req, res){
  var todo = req.body.task;
  });
  todos.save().then(function(data){
    res.redirect('api/todos');
  })
});

router.get('api/todos/:id', function(req, res){
  var todo_id = req.params.id;
  todos.find({_id}).then(function(data){
    res.json(data);
  });
});

router.put('api/todos/:id', function(req, res){
  var todoEdit = req.params.id;
  todos.findOne({_id:todoEdit}).then(function(data){
    res.json(data)
  })
});

router.patch('api/todos/:id', function(req, res){
  var todo_patch = req.params.id;
  todos.findOne({_id:todo_patch}).then(function(data){
    res.json(data)
  })
});

router.delete('api/todos/:id', function(req, res){
  var todo_delete = req.params.id;
  todos.findOne({_id:req.body.deletekey}).then(function(data){
    res.json(data)
  })
});

module.exports = router;
