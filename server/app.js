var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const fs = require('fs');
app.use('/', express.static('F:\\learning\\up\\public'));
app.use(bodyParser.json());

var AM = require('./ServerApplicationModule');

app.get('/getPhotoPost', (req, res) => {
    let post = AM.getPhotoPost(req.query.id.toString());
    if (post) {
        res.sstatus(200).send(post).end();
    } else {
        res.send(404).end();
    }
});

app.post('/getPhotoPosts', (req, res) => {
    let gotPhotoPosts = AM.getPhotoPosts(req.query.skip, req.query.top, req.body);
    if(gotPhotoPosts && gotPhotoPosts.length !== 0){
        res.status(200).send(gotPhotoPosts).end();
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

app.get('/getAllUsers', (req, res) => {
    let users = AM.getAllUsers();
    if(users){
        res.status(200).send(users).end();
    } else {
        res.send(404).end();
    }
})

app.get('/getAllPhotoPosts', (req, res) => {
    let posts = AM.getAllPosts(0);
    if(posts){
        res.status(200).send(posts).end();
    } else {
        res.send(404).end();
    }
})

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