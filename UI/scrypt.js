(function(){
    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    var photoPosts = [
        {
            id: '1',
            description: 'красота!',
            createdAt: new Date(),
            author: 'Djadka.by',
            photoLink: 'http://i.artfile.ru/1920x1080_663213_%5Bwww.ArtFile.ru%5D.jpg',
            hashtags:  ['природа', 'пейзаж'],
            likes: ['aadereiko', 'taxi', 'djadka.by']
        },
        {
            id: '2',
            description: 'В горах',
            createdAt: new Date(),
            author: 'aadereiko',
            photoLink: 'https://s1.1zoom.ru/big0/81/Russia_Mountains_Lake_469922.jpg',
            hashtags: ['природа', 'пейзаж', 'горы'],
            likes: ['aadereiko', 'arina']

        },
        {
            id: '3',
            description: 'Вода',
            createdAt: new Date(),
            author: 'aadereiko',
            photoLink: 'https://i.ytimg.com/vi/9NKyArdusj8/maxresdefault.jpg',
            hashtags: ['вода', 'горы'],
            likes: ['djadka.by']

        },
        {
            id: '4',
            description: 'Дерево',
            createdAt: new Date(),
            author: 'aadereiko',
            photoLink: 'http://www.fonstola.ru/download.php?file=201506/1920x1200/fonstola.ru-187130.jpg',
            hashtags: ['дерево', 'пейзаж'],
            likes: ['aadereiko', 'taxi', 'djadka.by', 'pipi']

        },
        {
            id: '5',
            description: 'Водопад',
            createdAt: new Date(),
            author: 'Djadka.by',
            photoLink: 'https://s1.1zoom.ru/big3/137/371625-svetik.jpg',
            hashtags: ['водопад', 'пейзаж'],
            likes: ['aadereiko', 'taxi', 'djadka.by', 'taxi', 'remember']
        },
        {
            id: '6',
            description: 'На лугу',
            createdAt: new Date(),
            author: 'Djadka.by',
            photoLink: 'http://desktopwallpapers.org.ua/pic/201211/2560x1600/desktopwallpapers.org.ua-21746.jpg',
            hashtags: ['луг', 'лужок'],
            likes: ['aadereiko']

        },
        {
            id: '7',
            description: 'Цветы',
            createdAt: new Date(),
            author: 'Djadka.by',
            photoLink: 'https://s1.1zoom.ru/big0/328/252677-svetik.jpg',
            hashtags: ['цветы'],
            likes: ['mashinka', 'autos']
        },
        {
            id: '8',
            description: 'Одуванчики',
            createdAt: new Date(),
            author: 'Djadka.by',
            photoLink: 'https://storge.pic2.me/c/1360x800/981/584872400b299.jpg',
            hashtags: ['Одуваны', 'Машина'],
            likes: ['bojenka']
        },
        {
            id: '9',
            description: 'F430',
            createdAt: new Date(),
            author: 'aadereiko',
            photoLink: 'http://oboi-na-stol.com/pub/original_images/oboi-na-stol.com-98967-mashiny-ferrari-f430-avto-mashiny-avtomobili.jpg',
            hashtags: ['Ferrari', 'F430'],
            likes: ['tachki', 'chai', 'ss']
        },
        {
            id: '10',
            description: 'Ламборгини',
            createdAt: new Date(),
            author: 'cars',
            photoLink: 'https://w-dog.ru/wallpapers/1/4/497672376362454/lamborghini-aventador-lp700-4-avto-superkar-doroga-zelnyj-green-nebo.jpg',
            hashtags: ['Машины'],
            likes: ['cars', 'taxi']
        },
        {
            id: '11',
            description: '59',
            createdAt: new Date(),
            author: 'cars',
            photoLink: 'http://skachat-kartinki.ru/img/picture/Oct/04/417e63b46e74be245aca2a969133b567/4.jpg',
            hashtags: ['59'],
            likes: ['aadereiko', 'taxi', 'djadka.by', 'egor']
        },
        {
            id: '12',
            description: 'Lamborghini',
            createdAt: new Date(),
            author: 'Djadka.by',
            photoLink: 'https://autowall.ru/wallpapers/original/29402.jpg',
            hashtags: ['Одуваны', 'Детки', 'Lamborghini'],
            likes: ['pacani', 'djadka.by']

        },
        {
            id: '13',
            description: 'Тренажер',
            createdAt: new Date(),
            author: 'aadereiko',
            photoLink: 'http://lolopepe.kg/wp-content/uploads/2017/08/body_src_1021.jpg',
            hashtags: ['качаться', 'лето', 'Одуваны', 'Детки'],
            likes: []
        },
        {
            id: '14',
            description: 'Кач',
            createdAt: new Date(),
            author: 'trener',
            photoLink: 'https://onsport.by/upload/resize_cache/iblock/23a/540_350_187651f930238ae42a94b52b10d934176/23a8370963af42ff33de0d9ef78f6c60.jpg',
            hashtags: ['тренажер'],
            likes: ['kekochka', 'life', 'sport']

        },
        {
            id: '15',
            description: 'Зал',
            createdAt: new Date(),
            author: 'trener',
            photoLink: 'https://onsport.by/upload/resize_cache/iblock/fcf/540_350_187651f930238ae42a94b52b10d934176/fcf7286441ab8fd5ed140c65282a35ec.png',
            hashtags: ['ВЗале', 'Сидим'],
            likes: ['brother', 'syster']
        },
        {
            id: '16',
            description: 'crupo7',
            createdAt: new Date(),
            author: 'films',
            photoLink: 'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/8/9/8143987/804fe6d00e2cfb98841de815d5a3fce0.jpg',
            hashtags: ['Antonio'],
            likes: ['aadereiko']
        },
        {
            id: '17',
            description: 'Найди меня',
            createdAt: new Date(),
            author: 'films',
            photoLink: 'https://www.kinocitymall.ru/images/posters/fdad9ac238d6034e.jpg',
            hashtags: ['Бумажные города'],
            likes: ['lubov', 'zhizhn']
        },
        {
            id: '18',
            description: 'Без компромиссов',
            createdAt: new Date(),
            author: 'films',
            photoLink: 'http://glass-kino.ucoz.ru/_nw/15/46383748.jpg',
            hashtags: ['стэтхем'],
            likes: []
        },
        {
            id: '19',
            description: 'Смертельная гонка',
            createdAt: new Date(),
            author: 'cars',
            photoLink: 'http://hdrezka.me/i/2014/5/6/x3a2391d33a7fry78q63d.jpg',
            hashtags: ['гонка'],
            likes:['shmonka', 'dashka']
        },
        {
            id: '20',
            description: 'Лучшее во мне',
            createdAt: new Date(),
            author: 'films',
            photoLink: 'https://disput.azstatic.com/uploads/monthly_2017_06/596362.jpg.80fcd483cdbed4a9572f79ce745fd097.jpg',
            hashtags: ['InMe'],
            likes: ['arts', 'draws', 'films']
        }
    ]

    var Filter = {
        author: 0,
        hashtags: ['mama', 'papa'],
        data: 0
    };

    function getPhotoPosts(skip, top, filterConfig){
        photoPosts.sort(compareDates);
        var authTemp = filterConfig.author || 0;
        var dataTemp = filterConfig.data || 0;
        var hashTemp = filterConfig.hashtags || 0;
        var newPosts = photoPosts.slice(skip, top + skip);

        if(authTemp == 0){
            if(dataTemp == 0){
                if(hashTemp == 0){
                    return newPosts
                } else {
                    return newPosts.filter(function(photoPost) {
                        for (i = 0; i < filterConfig.hashtags.length; i++) {
                            if((newPosts.hashtags.some(function(tag){
                                return tag == filterConfig.hashtags[i]})) == false) {
                                return false;
                            }
                        }
                        return true;
                    });
                }
            } else {
                if (hashTemp == 0) {
                    return newPosts.filter(function (photoPost) {
                        return photoPost.data == filterConfig.data
                    });
                } else {
                    return newPosts.filter(function (photoPost) {
                        if(photoPost.data == filterConfig.data) {
                            for (i = 0; i < filterConfig.hashtags.length; i++) {
                                if ((photoPost.hashtags.some(function (tag) {
                                        return tag == filterConfig.hashtags[i]
                                    })) == false) {
                                    return false;
                                }
                            }
                            return true;
                        } else
                            return false;
                    });
                }
            }
        } else {
            if(dataTemp == 0){
                if(hashTemp == 0) {
                    return newPosts.filter(function (photoPost) {
                        return photoPost.author == filterConfig.author;
                    });
                } else {
                    return newPosts.filter(function (photoPost) {
                        if(photoPost.author == filterConfig.author) {
                            for (i = 0; i < filterConfig.hashtags.length; i++) {
                                if ((photoPost.hashtags.some(function (tag) {
                                        return tag == filterConfig.hashtags[i]
                                    })) == false) {
                                    return false;
                                }
                            }
                            return true;
                        } else {
                            return false;
                        }
                    });
                }
            } else {
                if(hashTemp == 0) {
                    return newPosts.filter(function (photoPost) {
                        return photoPost.author == filterConfig.author && photoPost.data == filterConfig.data ;
                    });
                } else {
                   return newPosts.filter(function (photoPost) {
                        if(photoPost.author == filterConfig.author && photoPost.data == filterConfig.data){
                        for (i = 0; i < filterConfig.hashtags.length; i++) {
                            if ((photoPost.hashtags.some(function (tag) {
                                    return tag == filterConfig.hashtags[i]
                                })) == false) {
                                return false;
                            }
                        }
                        return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
            }
        }
    }

    function getPhotoPost(id){
        for(i = 0; i < photoPosts.length; i++){
            if(id == photoPosts[i].id){
                return photoPosts[i];
            }
        }
    }

    function validatePhotoPost(post){
        tempID = post.id || 0;
        if(tempID != 0) {
            if (photoPosts.some(function (elem) {
                    return post.id == elem.id
                }) == false) {
                tempDescription = post.description || 0;
                if (tempDescription != 0 && (tempDescription.length > 200 || tempDescription < 0)) {
                    return false;
                }
                tempCreatedAt = post.createdAt || 0;
                tempAuthor = post.author || 0;
                tempPhotoLink = post.photoLink || 0;
                if ((tempID && tempDescription && tempCreatedAt && tempAuthor && tempPhotoLink) == 0)
                    return false;
                else
                    return true;
            }
            return false;
        }
        return false;
    }

    function addPhotoPost(post){
        if(validatePhotoPost(post) == true) {
            photoPosts.push(post);
            return true;
        } else {
            return false;
        }
    }

    function removePhotoPost(id){
        if(photoPosts.some(function(post){return post.id == id})) {
            for (i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id == id) {
                    photoPosts.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }


    function editPost(id, post){
        if(photoPosts.some(function(post){return post.id == id})) {
            tempDescr = post.description || 0;
            tempPhoto = post.photoLink || 0;
            tempTags = post.hashtags || 0;

            if (tempDescr != 0 && tempDescr.length > 200) {
                return false;
            }

            for(i = 0; i < photoPosts.length; i++){
                if(photoPosts[i].id == id){
                    if(tempDescr != 0){
                        photoPosts[i].description = tempDescr;
                    }
                    if(tempPhoto != 0){
                        photoPosts[i].photoLink = tempPhoto;
                    }
                    if(tempTags != 0){
                        for(j = 0; j < post.hashtags.length; j++) {
                            photoPosts[i].hashtags[j] = post.hashtags[j];
                        }
                    }
                    break;
                }
            }
        } else {
            return false;
        }
    }

    var filerFound = {
        author: 'Djadka.by',
        hashtags: ['Одуваны', 'Детки'],


    }

    var pp = getPhotoPost(20);
    console.log(pp);
    validatePhotoPost(filerFound);
    var OnePost = {
        id: '22',
            description: '1',
        createdAt: new Date(),
        author: '1',
        photoLink: '2',
        hashtags: ['3'],
        likes: ['4', '5', '6']
    }
    editPost(20, OnePost);
})();