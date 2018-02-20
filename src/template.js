new Vue({
    el: '#template',
    data: {
        // title: {
        //     text: '축하해주세요',
        //     fontFamily: 'serif',
        //     fontSize: 30,
        //     textAlign: 'left'
        // },
        // subtitle: {
        //     text: 'O O 호 텔',
        //     fontFamily: 'serif',
        //     fontSize: 21,
        //     textAlign: 'left'
        // },
        // date: {
        //     text: '2 0 1 8 . 0 2 . 1 9',
        //     fontFamily: 'serif',
        //     fontSize: 20,
        //     textAlign: 'left'
        // },
        currentDisplay :'skin-controller',
        functions : [
            {
                name : "스킨 선택",
                display: "skin-controller",
                selected : true,
            },{
                name : "초대장 정보",
                display: "front-controller",
                selected : false,
            },{
                name : "세부 정보",
                display: "detail-controller",
                selected : false,
            },{
                name : "갤러리",
                display: "gallery-controller",
                selected : false,
            },{
                name : "방명록",
                display: "share-controller",
                selected : false,
            }
        ],
        currentSkin : 'wedding1',
        skins: {
            wedding1: {
                background: "/images/skin/wedding1/wedding1_1.png",
                infoBack: "/images/skin/wedding1/wedding1_2_back.png",
                infoCover: "/images/skin/wedding1/wedding1_2_cover.png",
                map: "/images/skin/wedding1/wedding1_3.png",
                gallery: "/images/skin/wedding1/wedding1_4.png",
                comments: "/images/skin/wedding1/wedding1_5.png",
                commentsReal: "/images/skin/wedding1/wedding1_5_real.png",
                title: {
                    top: 235,
                    text: '김도진 ♥ 이나영',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 30,
                    color: '#000',
                    textAlign: 'center'
                },
                subtitle: {
                    top: 275,
                    text: '강남 아나바다 웨딩홀',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 21,
                    color: '#8d8d8d',
                    textAlign: 'center'
                },
                date: {
                    top: 205,
                    text: '2018년 02월 21일',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 20,
                    color: '#8d8d8d',
                    textAlign: 'center'
                },
                detail : {

                }
            },
            wedding2: {
                background: "/images/skin/wedding2/wedding2_1.png",
                infoBack: "/images/skin/wedding1/wedding1_2_back.png",
                infoCover: "/images/skin/wedding1/wedding1_2_cover.png",
                map: "/images/skin/wedding2/wedding2_3.png",
                gallery: "/images/skin/wedding2/wedding2_4.png",
                comments: "/images/skin/wedding2/wedding2_5.png",
                commentsReal: "/images/skin/wedding2/wedding2_5_real.png",
                title: {
                    top: 550,
                    text: '김도진 ♥ 이나영',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 33,
                    color: '#1d3131',
                    textAlign: 'center'
                },
                subtitle: {
                    top: 620,
                    text: '강남 아나바다 웨딩홀',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 20,
                    color: '#1d3131',
                    textAlign: 'center'
                },
                date: {
                    top: 650,
                    text: '2018년 02월 21일',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 18,
                    color: '#1d3131',
                    textAlign: 'center'
                },
                detail : {

                }
            },
            baby: {
                background: "/images/skin/baby.png",
                infoBack: "/images/skin/wedding2.png",
                infoCover: "/images/skin/wedding1/wedding1_2_cover.png",
                map: "/images/skin/wedding2.png",
                gallery: "/images/skin/wedding2.png",
                comments: "/images/skin/wedding2.png",
                title: {
                    top: 285,
                    text: '나영이',
                    fontFamily: '꽃길, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 68,
                    color: '#000',
                    textAlign: 'center'
                },
                subtitle: {
                    top: 550,
                    text: '강남 아나바다 호텔',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 22,
                    color: '#000',
                    textAlign: 'center'
                },
                date: {
                    top: 590,
                    text: '2018년 02월 21일',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 18,
                    color: '#000',
                    textAlign: 'center'
                },
                detail : {

                }
            },
            invitation: {
                background: "/images/skin/invitation.png",
                infoBack: "/images/skin/invitation.png",
                infoCover: "/images/skin/wedding1/wedding1_2_cover.png",
                map: "/images/skin/invitation.png",
                gallery: "/images/skin/invitation.png",
                comments: "/images/skin/invitation.png",
                title: {
                    top: 305,
                    text: 'feliz cafe 2호점 오픈',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 32,
                    color: '#3c4b1c',
                    textAlign: 'center'
                },
                subtitle: {top: 520,
                    text: '강남 아나바다 호텔',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 23,
                    color: '#3c4b1c',
                    textAlign: 'center'
                },
                date: {top: 560,
                    text: '2018년 02월 21일',
                    fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
                    fontSize: 20,
                    color: '#3c4b1c',
                    textAlign: 'center'
                },
                detail : {

                }
            }
        },
        detail: {
            date : "",
            time : "",
            place : "",
            invitation : "",
            placeCall : "",
            location : "",
            transport : "",

        },
        galleryUse: false,
        commentUse: false
    },
    methods: {
        fontSize: function (args) {
            this.skins[this.currentSkin][args.target].fontSize = this.skins[this.currentSkin][args.target].fontSize * 1 + args.delta * 1;
        },
        textAlign: function (args) {
            this.skins[this.currentSkin][args.target].textAlign = args.dir;
        },
        galleryUseCheck: function () {
            this.galleryUse = !this.galleryUse;
        },
        commentUseCheck: function () {
            this.commentUse = !this.commentUse;
        },
        tabClick: function (d) {
            _.forEach(this.functions, func => {
                func.selected = false;
            });
            d.selected = true;
            this.currentDisplay = d.display;
        },
        skinChange: function (d) {
            this.currentSkin = d.name;
        }
    },
});