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
                name : "세부사항",
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
                background: "/images/skin/wedding2.png",
                title: {top: 550,
                    text: '축하해주세요',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 30,
                    textAlign: 'left'
                },
                subtitle: {top: 550,
                    text: 'O O 호 텔',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 21,
                    textAlign: 'left'
                },
                date: {top: 550,
                    text: '2 0 1 8 . 0 2 . 1 9',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 20,
                    textAlign: 'left'
                }
            },
            wedding2: {
                background: "/images/skin/wedding3.png",
                title: {top: 550,
                    text: '축하해주세요',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 30,
                    textAlign: 'left'
                },
                subtitle: {top: 550,
                    text: 'O O 호 텔',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 21,
                    textAlign: 'left'
                },
                date: {top: 550,
                    text: '2 0 1 8 . 0 2 . 1 9',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 20,
                    textAlign: 'left'
                }
            },
            baby: {
                background: "/images/skin/baby1.png",
                title: {
                    top: 550,
                    text: '축하해주세요',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 30,
                    textAlign: 'left'
                },
                subtitle: {
                    top: 550,
                    text: 'O O 호 텔',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 25,
                    textAlign: 'left'
                },
                date: {
                    top: 600,
                    text: '2 0 1 8 . 0 2 . 1 9',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 23,
                    textAlign: 'left'
                }
            },
            invitation: {
                background: "/images/skin/invitation.png",
                title: {top: 550,
                    text: '축하해주세요',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 30,
                    textAlign: 'left'
                },
                subtitle: {top: 550,
                    text: 'O O 호 텔',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 21,
                    textAlign: 'left'
                },
                date: {top: 550,
                    text: '2 0 1 8 . 0 2 . 1 9',
                    fontFamily: '꽃길체, SangSangFlowerRoad, FlowerRoad',
                    fontSize: 20,
                    textAlign: 'left'
                }
            }
        }
    },
    methods: {
        fontSize: function (args) {
            console.log(args);
            this[args.target].fontSize = this[args.target].fontSize * 1 + args.delta * 1;
            console.log(this[args.target].fontSize);
        },
        textAlign: function (args) {
            this[args.target].textAlign = args.dir;
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