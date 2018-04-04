"use strict";

let USER_AUTHORIZED = "Djadka.by";
let mapHash = [];
let photoPosts = [
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
        ];
let begOfVisiblePosts = 0;

let jsFunctions  = function () {
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    return {
        getPhotoPosts: function (skip, top, filterConfing) {
            let result = photoPosts;
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
                result.filter(function (post) {
                    return !post.deleted;
                });
            }

            result.sort(compareDates);
            if (result.length < top) {
                return result;
            }
            return result.slice(skip, top);
        },

        getPhotoPost: function (id) {
            return photoPosts.find(function (elem) {
                return parseInt(elem.id) == id;
            })
        },

        validatePhotoPost: function (post) {
            if (parseInt(post.id) !== NaN) {
                if (post.id !== 0) {
                    let condition = post.hashtags.some(function (idTemp) {
                        return idTemp === post.id;
                    });
                    if (!condition) {
                        if (typeof post.description === "string") {
                            if (post.description && post.description.length > 200 || post.description.length < 0) {
                                return false;
                            }
                        } else {
                            return false;
                        }
                        if (post.createdAt instanceof Date && typeof(post.author) === "string" && typeof(post.photoLink) === "string") {
                            if (!(post.id && post.description && post.createdAt && post.author && post.photoLink)) {
                                return false;
                            }
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return false;
                }
                return false;
            }
            return false;
        },

        addPhotoPost: function (post) {
            if (jsFunctions.validatePhotoPost(post) === true) {
                photoPosts.push(post);
                let index;
                for(let i = 0; i < post.hashtags.length; i++){
                    index = mapHash.map(function (elem) {
                        return elem.word;
                    }).indexOf(post.hashtags[i]);
                    if(index === -1) {
                        mapHash.push({word: post.hashtags[i], count: 1});
                    } else {
                        mapHash[index].count += 1;
                    }
                }
                return true;
            }
            return false;
        },

        removePhotoPost: function (id) {
            let post = jsFunctions.getPhotoPost(id);
            if(post)
                post.deleted = true;
            return !!post;
        },

        editPost: function (id, post) {
            if (post.description && post.description.length > 200) {
                return false;
            }

            let getTemp = jsFunctions.getPhotoPost(id);
            if (post.description) {
                getTemp.description = post.description;
            }
            if (post.photoLink) {
                getTemp.photoLink = post.photoLink;
            }
            if (post.hashtags) {
                getTemp.hashtags = post.hashtags.slice();
            }

            return getTemp || 0;
        }
    }
}();

let DOMFunctions = function() {
    function compareHash(a, b) {
        return b.count - a.count;
    }

    let downloadYet = document.querySelector(".downloadYet");
    let postsHTML = document.querySelector(".posts");

    return {
        printOnScreen:  function (skip, top, filterConfing) {
            let arrPosts = document.querySelectorAll(".post");
            for(let i = 0; i < arrPosts.length; i++){
                arrPosts[i].remove();
            }
            let arrForPrint = jsFunctions.getPhotoPosts(skip, top, filterConfing);

            let br = document.createElement("br");
            let br2 = document.createElement("br");

            for (let i = 0; i < arrForPrint.length; i++) {
                if (arrForPrint[i].author === USER_AUTHORIZED) {
                    DOMFunctions.addDomPhotoPostByUser(arrForPrint[i]);
                } else {
                    DOMFunctions.addDomPhotoPostNotByUser(arrForPrint[i]);
                }
                if (i === 4) {
                    postsHTML.appendChild(br);
                }
            }
            postsHTML.insertBefore(br2, downloadYet);
        },
        makeStringForHashtags: function (hashtags) {
        if (hashtags.length != 0) {
            let resultString = "";
            for (let i = 0; i < hashtags.length; i++) {
                resultString += "#" + hashtags[i];
            }
            return resultString;
        }
        return 0;
    },

        addDomPhotoPostNotByUser: function (post) {
        let newDiv = document.createElement("div");
        let pictureAva = document.createElement("IMG");
        let pName = document.createElement("p");
        let pDate = document.createElement("p");
        let pTime = document.createElement("p");
        let pTextLike = document.createElement("p");
        let pTextComment = document.createElement("p");
        let pHashTag = document.createElement("p");
        let pForPhoto = document.createElement("p");
        let picturePhoto = document.createElement("IMG");
        let likePost = document.createElement("IMG");
        pForPhoto.className = "dataUser";
        pTextLike.className = "textLike";
        pTextLike.textContent = post.likes.length.toString();
        pTextComment.textContent = post.description;
        pTextComment.className = "textComment";
        pHashTag.textContent = DOMFunctions.makeStringForHashtags(post.hashtags) || 0;
        pHashTag.className = "textHashTag";
        likePost.src = "./pictures/post/NotPressed.png";
        likePost.alt = "Лайк";
        if (USER_AUTHORIZED !== null)
            likePost.className = "likePost";
        else
            likePost.className = "likePostUnAuth";
        pictureAva.src = post.authorPhoto;
        pictureAva.alt = "Фото пользователя";
        pictureAva.className = "avaPost";
        pName.className = "postUser";
        pName.textContent = post.author;
        pDate.className = "dataUser";
        pDate.textContent = post.createdAt.getDate() + '.' + post.createdAt.getMonth() + '.' + post.createdAt.getFullYear();
        pTime.className = "dataUser";
        pTime.textContent = post.createdAt.getHours() + ':' + post.createdAt.getUTCMinutes() + ':' + post.createdAt.getSeconds();
        picturePhoto.alt = "Фото поста";
        picturePhoto.src = post.photoLink;
        picturePhoto.className = "photoPost";
        newDiv.className = "post";
        newDiv.id = post.id;
        newDiv.appendChild(pictureAva);
        newDiv.appendChild(pName);
        newDiv.appendChild(pDate);
        newDiv.appendChild(pTime);
        newDiv.appendChild(pForPhoto);
        pForPhoto.appendChild(picturePhoto);
        newDiv.appendChild(likePost);
        newDiv.appendChild(pTextLike);
        newDiv.appendChild(pTextComment);
        newDiv.appendChild(pHashTag);
        postsHTML.insertBefore(newDiv, downloadYet);
    },

        addDomPhotoPostByUser: function (post) {
        let newDiv = document.createElement("div");
        let pictureAva = document.createElement("IMG");
        let pName = document.createElement("p");
        let pDate = document.createElement("p");
        let pTime = document.createElement("p");
        let pTextLike = document.createElement("p");
        let pTextComment = document.createElement("p");
        let pHashTag = document.createElement("p");
        let pForPhoto = document.createElement("p");
        let picturePhoto = document.createElement("IMG");
        let likePost = document.createElement("IMG");
        let editButton = document.createElement("IMG");
        let deleteButton = document.createElement("IMG");
        editButton.src = "./pictures/post/edit.png";
        editButton.className = "editPost";
        editButton.alt = "Изменить пост";
        deleteButton.src = "./pictures/post/delete.png";
        deleteButton.className = "editPost";
        deleteButton.alt = "Удалить пост";
        pForPhoto.className = "dataUser";
        pTextLike.className = "textLike";
        pTextLike.textContent = post.likes.length.toString();
        pTextComment.textContent = post.description;
        newDiv.id = post.id;
        pTextComment.className = "textComment";
        pHashTag.textContent = DOMFunctions.makeStringForHashtags(post.hashtags) || 0;
        pHashTag.className = "textHashTag";
        likePost.src = "./pictures/post/NotPressed.png";
        likePost.alt = "Лайк";
        likePost.className = "likePost";
        pictureAva.src = post.authorPhoto;
        pictureAva.alt = "Фото пользователя";
        pictureAva.className = "avaPost";
        pName.className = "postUser";
        pName.textContent = post.author;
        pDate.className = "dataUser";
        pDate.textContent = post.createdAt.getDate() + '.' + post.createdAt.getMonth() + '.' + post.createdAt.getFullYear();
        pTime.className = "dataUser";
        pTime.textContent = post.createdAt.getHours() + ':' + post.createdAt.getUTCMinutes() + ':' + post.createdAt.getSeconds();
        picturePhoto.alt = "Фото поста";
        picturePhoto.src = post.photoLink;
        picturePhoto.className = "photoPost";
        newDiv.className = "post";
        newDiv.appendChild(pictureAva);
        newDiv.appendChild(pName);
        newDiv.appendChild(pDate);
        newDiv.appendChild(pTime);
        newDiv.appendChild(pForPhoto);
        pForPhoto.appendChild(picturePhoto);
        newDiv.appendChild(likePost);
        newDiv.appendChild(pTextLike);
        newDiv.appendChild(pTextComment);
        newDiv.appendChild(pHashTag);
        newDiv.appendChild(editButton);
        newDiv.appendChild(deleteButton);
        postsHTML.insertBefore(newDiv, downloadYet);
    },

        deleteDomPhotoPost: function (post) {
        let deletedPost = document.getElementById(post.id);
        postsHTML.removeChild(deletedPost);
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
            result.querySelector(".textHashTag").textContent = DOMFunctions.makeStringForHashtags(newPost.hashtags);
        }
        postsHTML.insertBefore(result, editedPost);
        postsHTML.removeChild(editedPost);
    },

        createMenuForUser: function () {
        let menuBlockPictureExit = document.createElement("div");
        let menuPictureExit = document.createElement("img");
        let menuBlockPicture = document.createElement("div");
        let menuPicture = document.createElement("img");
        let menuBlockAvatar = document.createElement("div");
        let menuPictureMarginAvatar = document.createElement("img");
        let menuBlockAdd = document.createElement("div");
        let menuPictureMargin = document.createElement("img");

        menuBlockPictureExit.className = "menu-block-picture";
        menuPictureExit.src = "./pictures/menu/exit.png";
        menuPictureExit.className = "menu-picture";
        menuPictureExit.alt = "Выход";
        menuBlockPictureExit.appendChild(menuPictureExit);

        menuBlockPicture.className = "menu-block-picture";
        menuPicture.src = "./pictures/menu/home.png";
        menuPicture.className = "menu-picture";
        menuPicture.alt = "На главную";
        menuBlockPicture.appendChild(menuPicture);

        menuBlockAvatar.className = "menu-block-avatar";
        menuPictureMargin.src = "./pictures/menu/mainPhoto.png";
        menuPictureMargin.className = "menu-picture-margin";
        menuPictureMargin.title = USER_AUTHORIZED;
        menuPictureMargin.alt = "Ава авторизованного пользователя";
        menuBlockAvatar.appendChild(menuPictureMargin);

        menuBlockAdd.className = "menu-block-add";
        menuPictureMarginAvatar.src = "./pictures/menu/add.png";
        menuPictureMarginAvatar.className = "menu-picture-margin";
        menuPictureMarginAvatar.alt = "Добавить пост";
        menuBlockAdd.appendChild(menuPictureMarginAvatar);

        let menu = document.querySelector(".menu");
        menu.appendChild(menuBlockPictureExit);
        menu.appendChild(menuBlockPicture);
        menu.appendChild(menuBlockAvatar);
        menu.appendChild(menuBlockAdd);
    },

        createMenuNotForUser: function () {
        let menuEnter = document.createElement("div");
        let menuEnterPicture = document.createElement("img");

        menuEnter.className = "menu-block-add";
        menuEnterPicture.src = "./pictures/menu/exit.png";
        menuEnterPicture.className = "menu-picture";
        menuEnterPicture.alt = "Войти";
        menuEnter.appendChild(menuEnterPicture);

        let menu = document.querySelector(".menu");
        menu.appendChild(menuEnterPicture);
    },

        fillMapHash: function () {
        for (let i = 0; i < photoPosts.length; i++) {
            for (let j = 0; j < photoPosts[i].hashtags.length; j++) {
                let index = mapHash.map(function (elem) {
                    return elem.word;
                }).indexOf(photoPosts[i].hashtags[j]);
                if (index === -1) {
                    mapHash.push({word: photoPosts[i].hashtags[j], count: 1})
                } else {
                    mapHash[index].count += 1;
                }
            }
        }
    },

        propHash: function () {
        mapHash.sort(compareHash);
        let proposition = document.querySelectorAll("option");
        proposition[1].innerText = mapHash[0].word;
        proposition[2].innerText = mapHash[1].word;
        proposition[3].innerText = mapHash[2].word;
        proposition[4].innerText = mapHash[3].word;
    }

    }
}();

if (USER_AUTHORIZED === null) {
    DOMFunctions.createMenuNotForUser();
} else {
    DOMFunctions.createMenuForUser();
}

DOMFunctions.printOnScreen(begOfVisiblePosts, begOfVisiblePosts + 10);

function addPhotoPost(post){
    if(jsFunctions.addPhotoPost(post)){
        DOMFunctions.printOnScreen(begOfVisiblePosts, begOfVisiblePosts +  10);
    }
}

function deletePhotoPost(id){
    let post = jsFunctions.getPhotoPost(id);
    if(jsFunctions.removePhotoPost(post.id)){
        DOMFunctions.deleteDomPhotoPost(post);
    }
}

function editPhotoPost(idOLd, postNew){
    let postOld = jsFunctions.getPhotoPost(idOLd);
    if(jsFunctions.editPost(postOld.id, postNew)){
        DOMFunctions.editDomPhotoPost(postOld, postNew);
    }
}

DOMFunctions.fillMapHash();
DOMFunctions.propHash();
