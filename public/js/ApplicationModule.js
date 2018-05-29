"use strict";
let ApplicationModule = function () {
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }
    function writeInLocalStoragePhotoPosts(){
        localStorage.setItem('photoPosts', JSON.stringify(ApplicationModule.photoPosts));
    }

    return {
        userAuthorized: null,
        mapHash: [],
        users: [
            {
                author: "Djadka.by",
                authorPhoto: "./pictures/menu/mainPhoto.png",
                password: "12345678"
            },
            {
                author: "cars",
                authorPhoto: "http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg",
                password: "12345"
            },
            {
                author: "aadereiko",
                authorPhoto: "./pictures/post/post1/avaOther.png",
                password: "90a12345"
            },
            {
                author: "films",
                authorPhoto: "https://im0-tub-by.yandex.net/i?id=3979f00131c7422720695dcb01d2dce2&n=13",
                password: "90a12",
            }
        ],
        photoPosts: [],
        begOfVisiblePosts: 0,

        //we're using compareHash to sort hashMap to get the most popular posts

        compareHash: function (a, b) {
            return b.count - a.count;
        },

        addHashTagsInMapHash: function (post) {
            let indexOfFoundHashtag;

            //if this adding hashtag exists in container, we just add 1 to "count", else we're pushing this hashtag.
            post.hashtags.forEach(
                (hashtag) => {
                    indexOfFoundHashtag = ApplicationModule.mapHash.map(function (elem) {
                        return elem.word;
                    }).indexOf(hashtag);
                    if (indexOfFoundHashtag === -1) {
                        ApplicationModule.mapHash.push({word: hashtag, count: 1});
                    } else {
                        ApplicationModule.mapHash[indexOfFoundHashtag].count += 1;
                    }
                })
        },

        getPhotoPosts: function (skip, top, filterConfing) {
            let result = ApplicationModule.photoPosts;

            if(!result)
                return [];
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
                    let date = new Date(filterConfing.createdAt.replace(/(\d+)[-.,;: ](\d+)[-.,;: ](\d+)/, '$3/$2/$1'))
                    result = result.filter(function (post) {
                        return post.createdAt >= date;
                    });
                }

                if (filterConfing.hashtags && filterConfing.hashtags.length !== 0) {
                    let hashtags = filterConfing.hashtags;
                    result = result.filter((post) =>
                        hashtags.every((tag) => (post.hashtags || []).includes(tag))
                    );
                }
            }

            if (result.length === 0) {
                return [];
            }

            result.sort(compareDates);

            return result.slice(skip, skip + top);
        },

        getUrlAva: function (name) {
            let index = ApplicationModule.users.map((elem) => {
                return elem.author;
            }).indexOf(name); //findIndex
            if (index === -1) {
                return '';
            } else {
                return ApplicationModule.users[index].authorPhoto;
            }
        },

        getPhotoPost: function (id) {
            return ApplicationModule.photoPosts.find(function (elem) {
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
            if (ApplicationModule.validatePhotoPost(post)) {
                ApplicationModule.photoPosts.push(post);
                ApplicationModule.addHashTagsInMapHash(post);

                ViewModule.propHash('selectFilter');
                writeInLocalStoragePhotoPosts();
                return true;
            }
            return false;
        },

        removePhotoPost: function (id) {
            let post = ApplicationModule.getPhotoPost(id);
            if (post) {
                post.deleted = true;
            }
            writeInLocalStoragePhotoPosts();
            return !!post;
        },

        editPost: function (id, post) {
            if (post.description && post.description.length > 200) {
                return false;
            }

            let getTemp = ApplicationModule.getPhotoPost(id);
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
            for (let i = 0; i < ApplicationModule.photoPosts.length; i++) {// forEach
                ApplicationModule.addHashTagsInMapHash(ApplicationModule.photoPosts[i]);
            }
        },

        fillInformation: function(){
            fs.writeFile('./data/posts.json', localStorage.getItem('photoPosts'));
            ApplicationModule.photoPosts = JSON.parse(localStorage.getItem('photoPosts'), (key, value)=>{
                if(key === 'createdAt'){
                    return new Date(value);
                }
                return value;
            }) || [];
            // we have array of users for authorization
            // ApplicationModule.users = JSON.parse(localStorage.getItem('users')) || [];

            ApplicationModule.userAuthorized = JSON.parse(localStorage.getItem('userAuthorized'));
        },

        // this function has added our posts and users in LocalStorage
        putPostsAnsUsersInLocalStorage(){
            let str = JSON.stringify(ApplicationModule.photoPosts);
            localStorage.setItem('photoPosts', str);
            localStorage.setItem('users', JSON.stringify(ApplicationModule.users));
        }
    }
}();
