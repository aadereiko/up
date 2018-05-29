"use strict";
let ViewModule = function () {
    let containerPosts = document.querySelector('.posts');

    return {
        printOnScreen: function (skip, top, filterConfing) {
            let arrPosts = document.querySelectorAll('.post');
            arrPosts.forEach((post) => {
                post.remove();
            });

            let arrForPrint = ApplicationModule.getPhotoPosts(skip, top, filterConfing);
            arrForPrint.forEach((post) => {
                ViewModule.addDomPhotoPost(post);
            });

            if (ApplicationModule.userAuthorized !== null) {
                EventsModule.initializeLikeButtons();
                EventsModule.initializeButtonsPost();
            }
        },

        loginView: function (name) {
            ApplicationModule.userAuthorized = name || null;
            if (name) {
                document.getElementById("menu").innerHTML = '';
                ViewModule.createMenuForUser();
            }
        },

        makeStringForHashtags: function (hashtags) {
            return (hashtags || []).map((ht) => '#' + ht).join(' ');
        },

        addDomPhotoPost: function (post) {
            let imgForLike;
            if (ApplicationModule.userAuthorized !== null && post.likes.indexOf(ApplicationModule.userAuthorized) !== -1) {
                imgForLike = './pictures/post/like.png';
            } else {
                imgForLike = './pictures/post/NotPressed.png';
            }
            let newDiv = document.createElement("div");
            newDiv.className = "post";
            newDiv.id = post.id;
            newDiv.innerHTML = `
                    <img src="${post.authorPhoto}" alt="Фото пользователя" class="avaPost">
                    <p class="postUser">${post.author}</p>
                    <p class="dataUser">${post.createdAt.getDate()}.${post.createdAt.getMonth()}.${post.createdAt.getFullYear()}</p>
                    <p class="dataUser">${post.createdAt.getHours()}:${post.createdAt.getUTCMinutes()}:${post.createdAt.getSeconds()}</p>
                    <p class="dataUser"><img alt="Фото поста" src="${post.photoLink}" class="photoPost"></p>
                    <img src="${imgForLike}" alt="Лайк" class="likePost" id="like-${post.id}">
                    <p class="textLike" id="textLike-${post.id}">${post.likes.length.toString()}</p>
                    <p class="textComment">${post.description}</p>
                    <p class="textHashTag">${ViewModule.makeStringForHashtags(post.hashtags) || 0}</p>
            `;
            if (post.author === ApplicationModule.userAuthorized) {
                newDiv.innerHTML += `
                    <img src="./pictures/post/edit.png" class="editPost" alt="Изменить пост" id="edit-${post.id}">
                    <img src="./pictures/post/delete.png" class="deletePost" alt="Удалить пост" id="delete-${post.id}">
            `
            }
            containerPosts.appendChild(newDiv);
        },

        deleteDomPhotoPost: function (post) {
            let deletedPost = document.getElementById(post.id);
            containerPosts.removeChild(deletedPost);
        },

        editDomPhotoPost: function (post, newPost) {
            let editedPost = document.getElementById(post.id);
            let result = document.createElement("div");

            result.innerHTML = editedPost.innerHTML;
            result.id = post.id;
            result.className = "post";
            if (newPost.description) {
                let re = result.querySelector(".textComment");
                re.textContent = newPost.description;
            }
            if (newPost.photoLink) {
                result.querySelector(".photoPost").src = newPost.photoLink;
            }
            if (newPost.hashtags) {
                result.querySelector(".textHashTag").textContent = ViewModule.makeStringForHashtags(newPost.hashtags);
            }
            containerPosts.replaceChild(result, editedPost);
        },

        createMenuForUser: function () {
            let menu = document.querySelector(".menu");
            menu.innerHTML = `
            <div class="menu-block-picture"><img src="./pictures/menu/exit.png" class="menu-picture" alt="Выход" id="exitBtn"></div>
            <div class="menu-block-picture"><img src="./pictures/menu/home.png" class="menu-picture" alt="На главную" id="home"></div>
            <div class="menu-block-avatar"><img src="${ApplicationModule.getUrlAva(ApplicationModule.userAuthorized)}" class="menu-picture-margin" title="${ApplicationModule.userAuthorized}" alt="Ава авторизованного пользователя"></div>
            <div class="menu-block-add"><img src="./pictures/menu/add.png" id ="add" class="menu-picture-margin" alt="Добавить пост"></div> 
`
        },

        createMenuNotForUser: function () {
            let menu = document.querySelector(".menu");
            menu.innerHTML = `<img src="./pictures/menu/exit.png" class="menu-picture" alt="Войти" id="enterMenu">
           `
        },

        propHash: function (name) {
            //here we're printing the most popular hashtags (we get 4 the most popular)
            if (ApplicationModule.mapHash.length !== 0) {
                ApplicationModule.mapHash.sort(ApplicationModule.compareHash);
                let sF = document.getElementById(name);
                for (let i = 0; i < 4; i++)
                    if (ApplicationModule.mapHash[i]) {
                        sF.children[i + 2].innerText = ApplicationModule.mapHash[i].word;
                    }
            }
        }
    }
}();
ServerApplicationModule.initialize();

// let AM = require('F:\\learning\\up\\server\\ServerApplicationModule');
ServerApplicationModule.fillInformation();
EventsModule.printOnScreen(AM.begOfVisiblePosts, AM.begOfVisiblePosts + 10);
if (AM.userAuthorized === null) {
    EventsModule.createMenuNotForUser();
} else {
    EventsModule.createMenuForUser();
}
AM.fillMapHash();
EventsModule.propHash('selectFilter');
EventsModule.initialization();