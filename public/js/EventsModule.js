"use strict";
const EventsModule = function () {
    //по частям
    //то, что один раз
    let inputLogin = document.getElementById('login');
    let inputData = document.getElementById('date');
    let inputHashtag = document.getElementById('hash');
    let inputLoginAuth = document.getElementById('logAuth');
    let inputPassword = document.getElementById('passAuth');
    let grayBackground = document.getElementById('grayBckd');
    let formAuth = document.getElementById('formAuth');
    let formAdding = document.getElementById('formAddPost');
    let dropArea = document.getElementById('addPhotoDrop');
    let dropAreaEdit = document.getElementById('editPhotoDrop');
    let userAdd = document.getElementById('userAdding');
    let dataAdd = document.getElementById('dataAdding');
    let hashAdd = document.getElementById('inputHashtags');
    let selectFilter = document.getElementById('selectFilter');
    let selectAdd = document.getElementById('selectAdd');
    let gallery = document.getElementById('gallery');
    let inputDescription = document.getElementById('inputDescription');
    let formEdit = document.getElementById('editFormPostId');
    let userEdit = document.getElementById('userEdit');
    let dataEdit = document.getElementById('dataEdit');
    let hashEdit = document.getElementById('inputHashtagsEdit');
    let selectEdit = document.getElementById('selectEdit');
    let inputHastagsEdit = document.getElementById('inputHashtagsEdit');
    let inputDescriptionEdit = document.getElementById('inputDescriptionEdit');
    let galleryEdit = document.getElementById('galleryEdit');
    let error = document.getElementById('error');
    let textError = document.getElementById('textError');
    let photoLnkEdit;
    let photoLnk;
    let edittingPostId;
    let indexEditPost;

    //DOM
    //rewrite Name
    function highlight() {
        dropArea.classList.add('highlight')
    }

    //DOM
    //rewrite Name
    function unHighLight() {
        dropArea.classList.remove('highlight')
    }

    function handleFiles(files) {
        files = [...files];
        files.forEach(uploadFile);
        files.forEach(previewFile);
    }

    function handleFilesEdit(files) {
        files = [...files];
        files.forEach(uploadFileEdit);
        files.forEach(previewFileEdit);
    }

    function previewFileEdit(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            let img = document.createElement('img');
            img.src = reader.result;
            galleryEdit.innerHTML = '';
            galleryEdit.appendChild(img);
            photoLnkEdit = reader.result;
        }
    }

    function uploadFileEdit(file) {
        // let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
        //let formData = new FormData()
        //formData.append('file', file)
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
    }

    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;
        if(files.length === 1){
            handleFiles(files);
        }
        else{

        }
    }

    function handleDropEdit(e) {
        let dt = e.dataTransfer;
        let files = dt.files;
        if(files.length === 1){
            handleFilesEdit(files);
        }
        else{
//
        }
    }

    function uploadFile(file) {
        // let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
        //let formData = new FormData()
        //formData.append('file', file)
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
    }

    function previewFile(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            let img = document.createElement('img');
            img.src = reader.result;
            gallery.appendChild(img);
            photoLnk = reader.result;
        }
    }

    function preventDefaults (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    return {
        filterPosts: function () {
            let arrHashtags = [];
            if(inputHashtag.value) {
                arrHashtags = inputHashtag.value.replace('#', ' ').trim().split(/[#, ]+/);
            }
            //user didn't choose the empty string
            if(selectFilter.selectedIndex !== 1){
                //user didn't choose the equal hashatgs
                if(arrHashtags.indexOf(selectFilter.options[selectFilter.selectedIndex].value) === -1) {
                    arrHashtags.push(selectFilter.options[selectFilter.selectedIndex].value);
                }
            }
            EventsModule.printOnScreen(0, 30,
                {
                    createdAt: 0 || inputData.value,
                    hashtags:  arrHashtags.length === 0 ? 0 : arrHashtags,
                    author: (0 || inputLogin.value)
                });
        },

        getMorePosts: function () {
            ServerApplicationModule.begOfVisiblePosts += 10;
            EventsModule.printOnScreen(ServerApplicationModule.begOfVisiblePosts, ServerApplicationModule.begOfVisiblePosts + 10);
        },

        closeForms: function () {
            grayBackground.style.display = 'none';
            formAuth.style.display = 'none';
            formAdding.style.display = 'none';
            formEdit.style.display = 'none';
            error.style.display = 'none';
        },

        enter: function () {
            grayBackground.style.display = 'block';
            formAuth.style.display = 'block';
        },

        addPost: function () {
            inputDescription.value = '';
            hashAdd.value = '';
            userAdd.innerText = 'Пользователь: ';
            dataAdd.innerText = 'Дата: ';
            gallery.innerHTML = '';
            EventsModule.propHash('selectAdd');
            grayBackground.style.display = 'block';
            formAdding.style.display = 'block';
            userAdd.innerText += ServerApplicationModule.userAuthorized;
            dataAdd.innerText += new Date();
        },

        editPost: function(e) {
            inputDescriptionEdit.value = '';
            inputHastagsEdit.value = '';
            userEdit.innerText = 'Пользователь: ';
            dataEdit.innerText = 'Дата: ';
            galleryEdit.innerHTML = '';
            edittingPostId = e.target.id.substring(5);
            let imgEdit = document.createElement('img');
            indexEditPost = ServerApplicationModule.photoPosts.map((post)=>{
                return post.id;
            }).indexOf(edittingPostId);
            grayBackground.style.display = 'block';
            formEdit.style.display = 'block';
            //new object for edit post
            userEdit.innerText += ServerApplicationModule.userAuthorized;
            dataEdit.innerText += ServerApplicationModule.photoPosts[indexEditPost].createdAt;
            inputHastagsEdit.value = EventsModule.makeStringForHashtags(ServerApplicationModule.photoPosts[indexEditPost].hashtags);
            inputDescriptionEdit.value = ServerApplicationModule.photoPosts[indexEditPost].description;
            imgEdit.src = ServerApplicationModule.photoPosts[indexEditPost].photoLink;
            galleryEdit.appendChild(imgEdit);
        },

        pressLike: function(e){
            if(ServerApplicationModule.userAuthorized !== null) {
                let indexToAction = ServerApplicationModule.photoPosts.map((post) => {
                    return post.id;
                }).indexOf(e.target.id.substr(5));
                if (indexToAction !== -1) {
                    let indexLike =  ServerApplicationModule.photoPosts[indexToAction].likes.indexOf(ServerApplicationModule.userAuthorized);
                    if (indexLike === -1){
                        ServerApplicationModule.photoPosts[indexToAction].likes.push(ServerApplicationModule.userAuthorized);
                        localStorage.setItem('photoPosts', JSON.stringify(ServerApplicationModule.photoPosts));
                        document.getElementById(e.target.id.replace('like', 'textLike')).innerText = ServerApplicationModule.photoPosts[indexToAction].likes.length;
                        document.getElementById(e.target.id).src = './pictures/post/like.png';
                    } else {
                        ServerApplicationModule.photoPosts[indexToAction].likes.splice(indexLike, 1);
                        document.getElementById(e.target.id).src = './pictures/post/NotPressed.png';
                        document.getElementById(e.target.id.replace('like', 'textLike')).innerText = ServerApplicationModule.photoPosts[indexToAction].likes.length;
                        localStorage.setItem('photoPosts', JSON.stringify(ServerApplicationModule.photoPosts));
                    }
                }

            }
        },

        logIn: function () {
            let name = inputLoginAuth.value;
            let pass = inputPassword.value;

            if (pass && name) {
                let index = ServerApplicationModule.users.map((elem) => {
                    return elem.author;
                }).indexOf(name);
                if (index !== -1) {
                    if (ServerApplicationModule.users[index].password === pass) {
                        EventsModule.loginView(name);
                        document.getElementById('exitBtn').addEventListener('click', EventsModule.unAuthorization);
                        document.getElementById('add').addEventListener('click', EventsModule.addPost);
                        document.getElementById('home').addEventListener('click', EventsModule.homePosts);
                        localStorage.setItem('userAuthorized', JSON.stringify(ServerApplicationModule.userAuthorized));
                        EventsModule.closeForms();
                        EventsModule.printOnScreen(ServerApplicationModule.begOfVisiblePosts, ServerApplicationModule.begOfVisiblePosts + 10);
                        inputLoginAuth.value = 'Логин';
                        inputPassword.value = 'Пароль';
                        //after login we get new edit buttons
                    } else {
                        textError.innerText = 'Неправильный пароль';
                        EventsModule.closeForms();
                        grayBackground.style.display = 'block';
                        error.style.display = 'block';
                    }
                }  else {
                    textError.innerText = 'Такого пользователя не найдено';
                    EventsModule.closeForms();
                    grayBackground.style.display = 'block';
                    error.style.display = 'block';
                }
            }
        },

        homePosts: function(){
            ServerApplicationModule.begOfVisiblePosts = 0;
            EventsModule.printOnScreen(ServerApplicationModule.begOfVisiblePosts, ServerApplicationModule.begOfVisiblePosts + 10);
        },

        unAuthorization: function () {
            document.getElementById("menu").innerHTML = '';
            EventsModule.createMenuNotForUser();
            ServerApplicationModule.userAuthorized = null;
            localStorage.setItem('userAuthorized', JSON.stringify(ServerApplicationModule.userAuthorized));
            EventsModule.printOnScreen(ServerApplicationModule.begOfVisiblePosts, ServerApplicationModule.begOfVisiblePosts + 10);
            document.getElementById('enterMenu').addEventListener('click', EventsModule.enter);
        },

        addingPost: function () {
            let arrayHashtags = [];
            if(hashAdd.value){
                arrayHashtags = hashAdd.value.trim().split(/[,# ]+/);
            }
            if(selectAdd.selectedIndex !== 1){
                if(arrayHashtags.indexOf(selectAdd.options[selectAdd.selectedIndex].value) === -1) {
                    /*саша я тебя люблю :3 */
                    arrayHashtags.push(selectAdd.options[selectAdd.selectedIndex].value);
                }
            }

            ServerApplicationModule.begOfVisiblePosts = 0;
            let user = {
                id: (ServerApplicationModule.photoPosts.length + 1).toString(),
                description: inputDescription.value,
                createdAt: new Date(),
                author: ServerApplicationModule.userAuthorized,
                authorPhoto: ServerApplicationModule.users[ServerApplicationModule.users.map((user) => {
                    return user.author;
                }).indexOf(ServerApplicationModule.userAuthorized)].authorPhoto || 0,
                photoLink: photoLnk,
                hashtags:  arrayHashtags.length === 0 ? 0 : arrayHashtags,
                likes: [],
                deleted: false
            };
            if (ServerApplicationModule.addPhotoPost(user)) {
                EventsModule.printOnScreen(ServerApplicationModule.begOfVisiblePosts, ServerApplicationModule.begOfVisiblePosts + 10);
            } else {
                textError.innerText = 'Неверные данные';
                EventsModule.closeForms();
                grayBackground.style.display = 'block';
                error.style.display = 'block';

            }
            EventsModule.closeForms();
        },

        edittingPost: function() {
            let arrayHashtags = [];
            if (hashEdit.value) {
                arrayHashtags = hashEdit.value.replace('#', ' ').trim().split(/[,# ]+/);
            }
            if (selectEdit.selectedIndex !== 1) {
                if (arrayHashtags.indexOf(selectEdit.options[selectEdit.selectedIndex].value) === -1) {
                    arrayHashtags.push(selectEdit.options[selectEdit.selectedIndex].value);
                }
            }
            let user = {
                id: 1,
                description: inputDescriptionEdit.value,
                author: ServerApplicationModule.userAuthorized,
                authorPhoto: ServerApplicationModule.photoPosts[indexEditPost].authorPhoto,
                photoLink: photoLnkEdit,
                hashtags: arrayHashtags.length === 0 ? 0 : arrayHashtags,
                likes: ServerApplicationModule.photoPosts[indexEditPost].likes,
                deleted: false
            };

            let postOld = ServerApplicationModule.getPhotoPost(edittingPostId);
            if (ServerApplicationModule.editPost(postOld.id, user)) {
                EventsModule.editDomPhotoPost(postOld, user);
                document.getElementById('edit-'+edittingPostId).addEventListener('click', EventsModule.editPost);
                document.getElementById('delete-'+edittingPostId).addEventListener('click', EventsModule.delettingPost);
                document.getElementById('like-'+edittingPostId).addEventListener('click', EventsModule.pressLike);
                localStorage.setItem('photoPosts', JSON.stringify(ServerApplicationModule.photoPosts));
                EventsModule.closeForms();
            } else {
                textError.innerText = 'Неверные данные';
                EventsModule.closeForms();
                grayBackground.style.display = 'block';
                error.style.display = 'block';
            }

        },

        delettingPost: function(e) {
            let post = ServerApplicationModule.getPhotoPost(e.target.id.substring(7));
            if (ServerApplicationModule.removePhotoPost(post.id)) {
                EventsModule.deleteDomPhotoPost(post);
            } else
            {
                textError.innerText = 'Неправильный пароль';
                EventsModule.closeForms();
                grayBackground.style.display = 'block';
                error.style.display = 'block';
            }
        },

        initializeLikeButtons: function(){
            let likeButtons = document.querySelectorAll('.likePost');
            for(let i = 0; i < likeButtons.length; i++){
                likeButtons[i].addEventListener('click', EventsModule.pressLike);
            }
        },

        initializeButtonsPost: function(){
            let editButtons = document.querySelectorAll('.editPost');
            let deleteButtons = document.querySelectorAll('.deletePost');
            for(let i = 0; i < editButtons.length; i++){
                editButtons[i].addEventListener('click', EventsModule.editPost);
                deleteButtons[i].addEventListener('click', EventsModule.delettingPost);
            }
        },

        initialization: function(){
            document.getElementById('downMore').addEventListener('click', EventsModule.getMorePosts);
            document.getElementById('filtersPicture').addEventListener('click', EventsModule.filterPosts);
            document.getElementById('grayBckd').addEventListener('click', EventsModule.closeForms);
            if(ServerApplicationModule.userAuthorized === null) {
                document.getElementById('enterMenu').addEventListener('click', EventsModule.enter);
            } else {
                document.getElementById('exitBtn').addEventListener('click', EventsModule.unAuthorization);
                document.getElementById('add').addEventListener('click', EventsModule.addPost);
                document.getElementById('home').addEventListener('click', EventsModule.homePosts);
                EventsModule.initializeButtonsPost();
            }
            document.getElementById('loginBtn').addEventListener('click', EventsModule.logIn);
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, preventDefaults, false);
                dropAreaEdit.addEventListener(eventName, preventDefaults, false);
            });
            dropArea.addEventListener('drop', handleDrop, false);
            dropAreaEdit.addEventListener('drop', handleDropEdit, false);
            ['dragenter', 'dragover'].forEach(eventName => {
                dropArea.addEventListener(eventName, highlight, false);
                dropAreaEdit.addEventListener(eventName, highlight, false);
            });
            ['dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName, unHighLight, false);
                dropAreaEdit.addEventListener(eventName, unHighLight, false);
            });
            document.getElementById('addingFormAdd').addEventListener('click', EventsModule.addingPost);
            document.getElementById('editFormAdd').addEventListener('click', EventsModule.edittingPost);
        }
    }
}();