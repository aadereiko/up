"use strict";
let ApplicationModule = function () {
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    // function writeInLocalStoragePhotoPosts(){
    //     localStorage.setItem('photoPosts', JSON.stringify(ApplicationModule.photoPosts));
    // }

    const fs = require('fs');
    const jsonUsers = fs.readFileSync('F:/learning/up/server/data/users.json');
    const jsonPosts = fs.readFileSync('F:/learning/up/server/data/posts.json');

    return {
        userAuthorized: null,
        mapHash: [],
        users: [],
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
            }).indexOf(name);
            if (index === -1) {
                return 0
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
            if (typeof post.createdAt === "string") {
                post.createdAt = new Date(post.createdAt);
            }
            if (ApplicationModule.validatePhotoPost(post)) {
                ApplicationModule.photoPosts.push(post);
                ApplicationModule.addHashTagsInMapHash(post);
                ApplicationModule.writeInTheFilePosts();
                // writeInLocalStoragePhotoPosts();
                return true;
            }
            return false;
        },

        removePhotoPost: function (id) {
            let post = ApplicationModule.getPhotoPost(id);
            if (post) {
                post.deleted = true;
            }
            ApplicationModule.writeInTheFilePosts();
            // writeInLocalStoragePhotoPosts();
            return !!post;
        },

        editPost: function (id, post) {
            if (post.description && post.description.length > 200) {
                return false;
            }

            let getTemp = ApplicationModule.getPhotoPost(id);
            if(!getTemp)
                return null;
            if (post.description) {
                getTemp.description = post.description;
            }
            if (post.photoLink) {
                getTemp.photoLink = post.photoLink;
            }
            if (post.hashtags) {
                getTemp.hashtags = post.hashtags.slice();
            }
            ApplicationModule.writeInTheFilePosts();
            return getTemp;
        },

        fillMapHash: function () {
            for (let i = 0; i < ApplicationModule.photoPosts.length; i++) {
                ApplicationModule.addHashTagsInMapHash(ApplicationModule.photoPosts[i]);
            }
        },

        initializeFromFiles: function(){
        ApplicationModule.photoPosts = JSON.parse(jsonPosts, (key, value) => {
            if(key === 'createdAt'){
                return new Date(value);
            }
            return value;
        }) || [];
        ApplicationModule.users = JSON.parse(jsonUsers) || [];
    },
        writeInTheFilePosts: function(){
        fs.writeFile('./data/posts.json', JSON.stringify(ApplicationModule.photoPosts), (error) => {
            if(error){
                console.log("Error");
            }
        });
    }
        // fillInformation: function(){
        //     ApplicationModule.photoPosts = JSON.parse(localStorage.getItem('photoPosts'), (key, value)=>{
        //         if(key === 'createdAt'){
        //             return new Date(value);
        //         }
        //         return value;
        //     }) || [];
        //     // we have array of users for authorization
        //     // ApplicationModule.users = JSON.parse(localStorage.getItem('users')) || [];
        //
        //     ApplicationModule.userAuthorized = JSON.parse(localStorage.getItem('userAuthorized'));
        // },

        // this function has added our posts and users in LocalStorage
        // putPostsAnsUsersInLocalStorage(){
        //     let str = JSON.stringify(ApplicationModule.photoPosts);
        //     localStorage.setItem('photoPosts', str);
        //     localStorage.setItem('users', JSON.stringify(ApplicationModule.users));
        // }
    }
}();
ApplicationModule.initializeFromFiles();
module.exports = ApplicationModule;
