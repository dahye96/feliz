'use strict';

var map = null;
var marker = null;

var Template = new Vue({
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
    currentDisplay: 'gallery-controller',
    functions: [{
      name: "스킨 선택",
      display: "skin-controller",
      selected: true
    }, {
      name: "초대장 정보",
      display: "front-controller",
      selected: false
    }, {
      name: "세부 정보",
      display: "detail-controller",
      selected: false
    }, {
      name: "갤러리",
      display: "gallery-controller",
      selected: false
    }, {
      name: "방명록",
      display: "share-controller",
      selected: false
    }],
    currentSkin: 'wedding1',

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
          fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
          fontSize: 20,
          color: '#8d8d8d',
          textAlign: 'center'
        },
        detail: {}
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
          fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
          fontSize: 18,
          color: '#1d3131',
          textAlign: 'center'
        },
        detail: {}
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
        detail: {}
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
        subtitle: {
          top: 520,
          text: '강남 아나바다 호텔',
          fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
          fontSize: 23,
          color: '#3c4b1c',
          textAlign: 'center'
        },
        date: {
          top: 560,
          text: '2018년 02월 21일',
          fontFamily: '"TTRabendeoR", "210RabendeoR", "Rabendeo"',
          fontSize: 20,
          color: '#3c4b1c',
          textAlign: 'center'
        },
        detail: {}
      }
    },
    detail: {
      date: "",
      time: "",
      place: "",
      invitation: "",
      placeCall: "",
      location: "",
      transport: ""

    },
    galleryUse: !false,
    commentUse: false,

    controller: {
      frontController: {
        title: false,
        subtitle: false,
        date: false
      }
    },
    model: {
      date: '2018-02-21',
      time: '14:30',
      locationName: '',
      locationAddress: ''
    },
    map: null,
    gallery: {
      files: []
    }
  },
  methods: {
    fontSize: function fontSize(args) {
      this.skins[this.currentSkin][args.target].fontSize = this.skins[this.currentSkin][args.target].fontSize * 1 + args.delta * 1;
    },
    textAlign: function textAlign(args) {
      this.skins[this.currentSkin][args.target].textAlign = args.dir;
    },
    galleryUseCheck: function galleryUseCheck() {
      this.galleryUse = !this.galleryUse;
    },
    commentUseCheck: function commentUseCheck() {
      this.commentUse = !this.commentUse;
    },
    tabClick: function tabClick(d) {
      _.forEach(this.functions, function (func) {
        func.selected = false;
      });
      d.selected = true;
      this.currentDisplay = d.display;
    },
    skinChange: function skinChange(d) {
      this.currentSkin = d.name;
    },
    mounted: function mounted() {
      console.log('call mounted');
      var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
      };
      map = new naver.maps.Map('map', mapOptions);

      marker = new naver.maps.Marker({
        position: new naver.maps.Point(37, 128),
        map: map
      });

      naver.maps.Event.addListener(map, 'click', function (e) {
        console.log(e.coord);
        marker.setPosition(e.coord);
      });
    },
    switchController: function switchController(arg1, arg2) {
      this.controller[arg1][arg2] = !this.controller[arg1][arg2];
    },
    getCurrentDate: function getCurrentDate() {
      var ds = this.model.date.split('-');
      console.log(this.model.time);

      return ds[0] + '년 ' + ds[1] + '월 ' + ds[2] + '일';
    },
    dateChange: function dateChange() {},
    removeImage: function removeImage(idx) {
      console.log(idx);
      this.gallery.files.splice(idx, 1);
      swiper.removeSlide(idx);
    },
    fileUpload: function fileUpload() {
      var $imageUploader = $('#imageUploader');

      $imageUploader.trigger('click');
      $imageUploader.unbind('change');
      $imageUploader.change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
          var data = {
            name: file.name,
            data: reader.result
          };
          Template.gallery.files.push(data);

          console.log(swiper);
          console.log('add slide!!!!!!!!!!!');
          swiper.appendSlide('<div class="swiper-slide" style="background-image: url(' + reader.result + ')"></div>');
          console.log('complete');
          swiper.update();
        };
        if (file) {
          reader.readAsDataURL(file);
        } else {}
      });
    },
    searchLocation: function searchLocation() {
      naver.maps.Service.geocode({ address: this.model.locationAddress }, function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert(this.model.locationAddress + '의 검색 결과가 없거나 기타 네트워크 에러');
        }
        var result = response.result;
        var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
        marker.setPosition(myaddr);
        map.setCenter(myaddr); // 검색된 좌표로 지도 이동
      });
    }
  }
});

Template.mounted();

var swiper = new Swiper('.gallery-images.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});