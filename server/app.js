var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');
app.use(bodyParser.json());

var AM = require('./ServerApplicationModule');

app.get('/getPhotoPost', (req, res) => {
    let post = AM.getPhotoPost(req.query.id.toString());
    if (post) {
        res.send(post).end();
    } else {
        res.send(404).end();
    }
});

app.post('/getPhotoPosts', (req, res) => {
    let gotPhotoPosts = AM.getPhotoPosts(req.query.skip, req.query.top, req.body);
    if(gotPhotoPosts && gotPhotoPosts.length !== 0){
        res.send(gotPhotoPosts).end();
    } else {
        res.send(404).end();
    }
});

app.post('/addPhotoPost', (req, res)=>{
    let addingPost = req.body;
    if(addingPost){
        if(AM.addPhotoPost(addingPost)){
            res.status(200).send(addingPost).end();
        } else {
            res.send(404).end();
        }
    } else {
        res.send(404).end();
    }
});

app.put('/editPhotoPost', (req, res) => {
   let edittingPost = AM.editPost(req.query.id, req.body);
   if(edittingPost){
       res.status(200).send(edittingPost).end();
   } else {
       res.send(404).end();
   }
});

app.delete('/removePhotoPost', (req, res)=>{
    if(AM.removePhotoPost(req.query.id)){
        res.status(200).send("Post with id " + req.query.id + " is deleted\n");
    } else {
        res.send(404).end();
    }
});

app.listen(3000, function () {
    console.log('Server is running');
});