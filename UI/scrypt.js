"use strict";

let ApplicationModel  = function () {
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    return {
        user_authorized: null,
        mapHash: [],
        photoPosts: [
        {
            id: '1',
            description: 'красота!',
            createdAt: new Date(2016, 1, 29, 14, 2, 21),
            author: 'Djadka.by',
            authorPhoto: './pictures/menu/mainPhoto.png',
            photoLink: 'http://i.artfile.ru/1920x1080_663213_%5Bwww.ArtFile.ru%5D.jpg',
            hashtags: ['природа', 'пейзаж', '1', '2', '3434123413241323123213123123'],
            likes: ['aadereiko', 'taxi', 'djadka.by'],
            deleted: false
        },
        {
            id: '2',
            description: 'В горах',
            createdAt: new Date(2016, 2, 26, 15, 3, 41),
            author: 'aadereiko',
            authorPhoto: './pictures/post/post1/avaOther.png',
            photoLink: 'https://s1.1zoom.ru/big0/81/Russia_Mountains_Lake_469922.jpg',
            hashtags: ['природа', 'пейзаж', 'горы'],
            likes: ['aadereiko', 'arina'],
            deleted: false
        },
        {
            id: '3',
            description: 'Вода',
            createdAt: new Date(),
            author: 'aadereiko',

            authorPhoto: './pictures/post/post1/avaOther.png',
            photoLink: 'https://i.ytimg.com/vi/9NKyArdusj8/maxresdefault.jpg',
            hashtags: ['вода', 'горы'],
            likes: ['djadka.by'],
            deleted: false
        },
        {
            id: '4',
            description: 'Дерево',
            createdAt: new Date(),
            author: 'aadereiko',
            authorPhoto: './pictures/post/post1/avaOther.png',
            photoLink: 'http://www.fonstola.ru/download.php?file=201506/1920x1200/fonstola.ru-187130.jpg',
            hashtags: ['дерево', 'пейзаж'],
            likes: ['aadereiko', 'taxi', 'djadka.by', 'pipi'],
            deleted: false
        },
        {
            id: '5',
            description: 'Водопад',
            createdAt: new Date(),
            author: 'Djadka.by',
            authorPhoto: './pictures/menu/mainPhoto.png',
            photoLink: 'https://s1.1zoom.ru/big3/137/371625-svetik.jpg',
            hashtags: ['водопад', 'пейзаж'],
            likes: ['aadereiko', 'taxi', 'djadka.by', 'taxi', 'remember'],
            deleted: false
        },
        {
            id: '6',
            description: 'На лугу',
            createdAt: new Date(),
            author: 'Djadka.by',
            authorPhoto: './pictures/menu/mainPhoto.png',
            photoLink: 'http://desktopwallpapers.org.ua/pic/201211/2560x1600/desktopwallpapers.org.ua-21746.jpg',
            hashtags: ['луг', 'лужок'],
            likes: ['aadereiko'],
            deleted: false
        },
        {
            id: '7',
            description: 'Цветы',
            createdAt: new Date(),
            author: 'Djadka.by',
            authorPhoto: './pictures/menu/mainPhoto.png',
            photoLink: 'https://s1.1zoom.ru/big0/328/252677-svetik.jpg',
            hashtags: ['цветы'],
            likes: ['mashinka', 'autos'],
            deleted: false
        },
        {
            id: '8',
            description: 'Одуванчики',
            createdAt: new Date(),
            author: 'Djadka.by',
            authorPhoto: './pictures/menu/mainPhoto.png',
            photoLink: 'https://storge.pic2.me/c/1360x800/981/584872400b299.jpg',
            hashtags: ['Одуваны', 'Машина'],
            likes: ['bojenka'],
            deleted: false
        },
        {
            id: '9',
            description: 'F430',
            createdAt: new Date(),
            author: 'aadereiko',
            authorPhoto: './pictures/post/post1/avaOther.png',
            photoLink: 'https://mosautoshina.ru/i/auto/ferrari_f430_2008.jpg',
            hashtags: ['Ferrari', 'F430'],
            likes: ['tachki', 'chai', 'ss'],
            deleted: false
        },
        {
            id: '10',
            description: 'Ламборгини',
            createdAt: new Date(),
            author: 'cars',
            authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
            photoLink: 'https://w-dog.ru/wallpapers/1/4/497672376362454/lamborghini-aventador-lp700-4-avto-superkar-doroga-zelnyj-green-nebo.jpg',
            hashtags: ['Машины'],
            likes: ['cars', 'taxi'],
            deleted: false
        },
        {
            id: '11',
            description: '59',
            createdAt: new Date(),
            author: 'cars',
            authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
            photoLink: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
            hashtags: ['59'],
            likes: ['aadereiko', 'taxi', 'djadka.by', 'egor'],
            deleted: false
        },
        {
            id: '12',
            description: 'Lamborghini',
            createdAt: new Date(),
            author: 'Djadka.by',
            authorPhoto: './pictures/menu/mainPhoto.png',
            photoLink: 'https://autowall.ru/wallpapers/original/29402.jpg',
            hashtags: ['Одуваны', 'Детки', 'Lamborghini'],
            likes: ['pacani', 'djadka.by'],
            deleted: false
        },
        {
            id: '13',
            description: 'Тренажер',
            createdAt: new Date(),
            author: 'aadereiko',
            authorPhoto: './pictures/post/post1/avaOther.png',
            photoLink: 'http://lolopepe.kg/wp-content/uploads/2017/08/body_src_1021.jpg',
            hashtags: ['качаться', 'лето', 'Одуваны', 'Детки'],
            likes: [],
            deleted: false
        },
        {
            id: '14',
            description: 'Кач',
            createdAt: new Date(),
            author: 'trener',
            authorPhoto: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
            photoLink: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
            hashtags: ['тренажер'],
            likes: ['kekochka', 'life', 'sport'],
            deleted: false
        },
        {
            id: '15',
            description: 'Зал',
            createdAt: new Date(),
            author: 'trener',
            authorPhoto: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
            photoLink: 'https://onsport.by/upload/resize_cache/iblock/fcf/540_350_187651f930238ae42a94b52b10d934176/fcf7286441ab8fd5ed140c65282a35ec.png',
            hashtags: ['ВЗале', 'Сидим'],
            likes: ['brother', 'syster'],
            deleted: false
        },
        {
            id: '16',
            description: 'crupo7',
            createdAt: new Date(),
            author: 'films',
            authorPhoto: 'https://im0-tub-by.yandex.net/i?id=3979f00131c7422720695dcb01d2dce2&n=13',
            photoLink: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
            hashtags: ['Antonio'],
            likes: ['aadereiko'],
            deleted: false
        },
        {
            id: '17',
            description: 'Найди меня',
            createdAt: new Date(),
            author: 'films',
            authorPhoto: 'https://im0-tub-by.yandex.net/i?id=3979f00131c7422720695dcb01d2dce2&n=13',
            photoLink: 'https://www.kinocitymall.ru/images/posters/fdad9ac238d6034e.jpg',
            hashtags: ['Бумажные города'],
            likes: ['lubov', 'zhizhn'],
            deleted: false
        },
        {
            id: '18',
            description: 'Без компромиссов',
            createdAt: new Date(),
            author: 'films',
            authorPhoto: 'https://im0-tub-by.yandex.net/i?id=3979f00131c7422720695dcb01d2dce2&n=13',
            photoLink: 'http://glass-kino.ucoz.ru/_nw/15/46383748.jpg',
            hashtags: ['стэтхем'],
            likes: [],
            deleted: false
        },
        {
            id: '19',
            description: 'Смертельная гонка',
            createdAt: new Date(),
            author: 'cars',
            authorPhoto: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
            photoLink: 'https://paris-life.info/wp-content/uploads/2016/11/eifeel-tower-paris-1068x712.jpg',
            hashtags: ['гонка'],
            likes: ['shmonka', 'dashka'],
            deleted: false
        },
        {
            id: '20',
            description: 'Лучшее во мне',
            createdAt: new Date(),
            author: 'films',
            authorPhoto: 'https://im0-tub-by.yandex.net/i?id=3979f00131c7422720695dcb01d2dce2&n=13',
            photoLink: 'https://disput.azstatic.com/uploads/monthly_2017_06/596362.jpg.80fcd483cdbed4a9572f79ce745fd097.jpg',
            hashtags: ['InMe'],
            likes: ['arts', 'draws', 'films'],
            deleted: false
        }
    ],
        begOfVisiblePosts: 0,

        addHashTagsInMapHash: function (post) {
            let indexOfFoundHashtag;

            //if this adding hashtag exists in container, we just add 1 to "count", else we're pushing this hashtag.
            post.hashtags.forEach(
                (hashtag) => {
                    indexOfFoundHashtag = ApplicationModel.mapHash.map(function (elem) {
                        return elem.word;
                    }).indexOf(hashtag);
                    if (indexOfFoundHashtag === -1) {
                        ApplicationModel.mapHash.push({word: hashtag, count: 1});
                    } else {
                        ApplicationModel.mapHash[indexOfFoundHashtag].count += 1;
                    }
                })
        },

        getPhotoPosts: function (skip, top, filterConfing) {
            let result = ApplicationModel.photoPosts;

            result = result.filter(function (post) {
                return !post.deleted;
            });

            if (filterConfing) {
                if (filterConfing.author) {
                    result = result.filter(function (post) {
                        return post.author === filterConfing.author;
                    });
                }

                if (filterConfing.createdAt) {
                    result = result.filter(function (post) {
                        return post.createdAt >= filterConfing.createdAt;
                    });
                }

                if (filterConfing.hashtags && filterConfing.hashtags.length !== 0) {
                    result = result.filter(function (post) {
                        for (let i = 0; i < filterConfing.hashtags.length; i++) {
                            let condition = post.hashtags.some(function (tag) {
                                return tag === filterConfing.hashtags[i];
                            });
                            if (!condition) {
                                return false;
                            }
                        }
                        return true;
                    })
                }
            }

            if(result.length === 0){
                return [];
            }

            result.sort(compareDates);

            return result.slice(skip, skip + top);
        },

        getPhotoPost: function (id) {
            return ApplicationModel.photoPosts.find(function (elem) {
                return String(elem.id) === String(id);
            })
        },

        validatePhotoPost: function (post) {
            if (isNaN(post.id)) {
                return false;
            }

            if (String(post.id) === '0') {
                return false;
            }

            let isNotUniqueID = post.hashtags.some(function (idTemp) {
                return String(idTemp) === String(post.id);
            });

            if (!isNotUniqueID) {
                if (typeof post.description !== "string" || post.description.length > 200 || post.description.length < 0) {
                    return false;
                }

                if (typeof(post.author) !== "string") {
                    return false;
                }

                if (!(post.createdAt instanceof Date)) {
                    return false;
                }

                if (typeof(post.photoLink) !== "string") {
                    return false;
                }

                if (!(post.id && post.description && post.createdAt && post.author && post.photoLink)) {
                    return false;
                }

                return true;
            }
        },

        addPhotoPost: function (post) {
            if (ApplicationModel.validatePhotoPost(post)) {
                ApplicationModel.photoPosts.push(post);
                ApplicationModel.addHashTagsInMapHash(post);
                return true;
            }
            return false;
        },

        removePhotoPost: function (id) {
            let post = ApplicationModel.getPhotoPost(id);
            if(post) {
                post.deleted = true;
            }
            return !!post;
        },

        editPost: function (id, post) {
            if (post.description && post.description.length > 200) {
                return false;
            }

            let getTemp = ApplicationModel.getPhotoPost(id);
            if (post.description) {
                getTemp.description = post.description;
            }
            if (post.photoLink) {
                getTemp.photoLink = post.photoLink;
            }
            if (post.hashtags) {
                getTemp.hashtags = post.hashtags.slice();
            }

            return getTemp || null;
        },

        fillMapHash: function () {
            for(let i = 0; i < ApplicationModel.photoPosts.length; i++){
                ApplicationModel.addHashTagsInMapHash(ApplicationModel.photoPosts[i]);
            }
        }
    }
}();

let ViewModule = function() {
    //we're using compareHash to sort hashMap to get the most popular posts
    function compareHash(a, b) {
        return b.count - a.count;
    }

    let containerPosts = document.querySelector('.posts');

    return {
        printOnScreen: function (skip, top, filterConfing) {
            let arrPosts = document.querySelectorAll(".post");
            arrPosts.forEach((post)=>{
                post.remove();
            })
            let arrForPrint = ApplicationModel.getPhotoPosts(skip, top, filterConfing);

            arrForPrint.forEach((post)=> {
                ViewModule.addDomPhotoPost(post);
            });
        },
        makeStringForHashtags: function (hashtags) {
            if (hashtags.length !== 0) {
                let resultString = "";
                for (let i = 0; i < hashtags.length; i++) {
                    resultString += "#" + hashtags[i];
                }
                return resultString;
            }
            return 0;
        },

        addDomPhotoPost: function (post) {
            let classForLikes;
            if(ApplicationModel.user_authorized === null){
                classForLikes = "likePostUnAuth";
            } else {
                classForLikes = "likePost";
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
                    <img src="./pictures/post/NotPressed.png" alt="Лайк" class="${classForLikes}">
                    <p class="textLike">${post.likes.length.toString()}</p>
                    <p class="textComment">${post.description}</p>
                    <p class="textHashTag">${ViewModule.makeStringForHashtags(post.hashtags) || 0}</p>
            `;
            if(post.author === ApplicationModel.user_authorized){
                newDiv.innerHTML += `
                    <img src="./pictures/post/edit.png" class="editPost" alt="Изменить пост">
                    <img src="./pictures/post/delete.png" class="editPost" alt="Удалить пост">
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
            <div class="menu-block-picture"><img src="./pictures/menu/exit.png" class="menu-picture" alt="Выход"></div>
            <div class="menu-block-picture"><img src="./pictures/menu/home.png" class="menu-picture" alt="На главную"></div>
            <div class="menu-block-avatar"><img src="./pictures/menu/mainPhoto.png" class="menu-picture-margin" title="${ApplicationModel.user_authorized}" alt="Ава авторизованного пользователя"></div>
            <div class="menu-block-add"><img src="./pictures/menu/add.png" class="menu-picture-margin" alt="Добавить пост"></div>
            `
        },

        createMenuNotForUser: function () {
            let menu = document.querySelector(".menu");
            menu.innerHTML = `<img src="./pictures/menu/exit.png" class="menu-picture" alt="Войти">`
        },

        propHash: function () {
            //here we're printing the most popular hashtags (we get 4 the most popular)
            ApplicationModel.mapHash.sort(compareHash);
            let proposition = document.querySelectorAll("option");
            for (let i = 0; i < 4; i++) {
                proposition[i + 1].innerText = ApplicationModel.mapHash[i].word;
            }
        }
    }
}();

if (ApplicationModel.user_authorized === null) {
    ViewModule.createMenuNotForUser();
} else {
    ViewModule.createMenuForUser();
}

ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts + 10);


function addPhotoPost(post){
    if(ApplicationModel.addPhotoPost(post)){
        ViewModule.printOnScreen(ApplicationModel.begOfVisiblePosts, ApplicationModel.begOfVisiblePosts +  10);
    }
}

function deletePhotoPost(id){
    let post = ApplicationModel.getPhotoPost(id);
    if(ApplicationModel.removePhotoPost(post.id)){
        ViewModule.deleteDomPhotoPost(post);
    }
}

function editPhotoPost(idOLd, postNew){
    let postOld = ApplicationModel.getPhotoPost(idOLd);
    if(ApplicationModel.editPost(postOld.id, postNew)){
        ViewModule.editDomPhotoPost(postOld, postNew);
    }
}

ApplicationModel.fillMapHash();
ViewModule.propHash();
