(function() {
    class Photoposts {
        constructor() {
            this.list = [];
        }

        addPhotoPost(post) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/addPhotoPost');
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.send(JSON.stringify(post));
            }).then(inform => JSON.parse(inform))
                .catch((error) => {
                    throw error;
                });
        }

        editPhotoPost(photoPost) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('PUT', `/editPost?id=${photoPost.id}`);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.send(JSON.stringify(photoPost));
            }).then(data => JSON.parse(data))
                .catch((error) => {
                    throw error;
                });
        }

        removePhotoPost(id) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('DELETE', `/removePost?id=${id}`);
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.send();
            }).then(data => JSON.parse(data))
                .catch((error) => {
                    throw error;
                });
        }

        getPhotoPost(id) {
            return this.list.find((item) => item.id === id);
        }

        getPhotoPosts(skip, top, filterConfing) {
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
        }

        getAllPosts(){
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', '/getAllPosts');
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        this.list = JSON.parse(xhr.responseText);
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.send();
            }).then(data => JSON.parse(data))
                .catch((error) => {
                    throw error;
                });
        }
    }

    class Users {
        constructor() {
            this.users = [];
        }

        findUser(name) {
            return this.users.find((element) => element.username === name);
        }

        getAllUsers() {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', '/allUsers');
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        this.users = JSON.parse(xhr.responseText);
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.send();
            }).then(data => JSON.parse(data))
                .catch((error) => {
                    throw error;
                });
        }
    }

    function compareDates(a, b){
        return new Date(b.createdAt) - new Date(a.createdAt);
    }

    window.photoPosts = photoPosts;
    window.users = users;
});


