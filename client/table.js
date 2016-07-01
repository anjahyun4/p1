Template.table.helpers(
  {
    boards: function() {
      return Boards.find().fetch();
    },
      isAqua1 : function () {
          //1번 td의 배경 값이 aqa인지 아닌지 결정한다.

          //1. db에서 1번 좌석이 1개라도 있는지 확인한다.

          //2. if 1번 좌석이 1개라도 있으면 retrn 'aqua'

          //3. else 1번 좌석이 1개도 없으면 retrn ''

          var tmp = Boards.find({inpSeat: "1"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua2 : function () {
          var tmp = Boards.find({inpSeat: "2"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua3 : function () {
          var tmp = Boards.find({inpSeat: "3"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua4 : function () {
          var tmp = Boards.find({inpSeat: "4"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua5 : function () {
          var tmp = Boards.find({inpSeat: "5"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua6 : function () {
          var tmp = Boards.find({inpSeat: "6"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua7 : function () {
          var tmp = Boards.find({inpSeat: "7"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua8 : function () {
          var tmp = Boards.find({inpSeat: "8"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua9 : function () {
      var tmp = Boards.find({inpSeat: "9"}).fetch();
      console.log(tmp);
      if (tmp.length > 0) {
          return 'aqua';
      }
      else {
          return '';
      }
  },
      isAqua10 : function () {
          var tmp = Boards.find({inpSeat: "10"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua11 : function () {
      var tmp = Boards.find({inpSeat: "11"}).fetch();
      console.log(tmp);
      if (tmp.length > 0) {
          return 'aqua';
      }
      else {
          return '';
      }
  },
      isAqua12 : function () {
          var tmp = Boards.find({inpSeat: "12"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua13 : function () {
          var tmp = Boards.find({inpSeat: "13"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua14 : function () {
          var tmp = Boards.find({inpSeat: "14"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua15 : function () {
          var tmp = Boards.find({inpSeat: "15"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua16 : function () {
          var tmp = Boards.find({inpSeat: "16"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua17 : function () {
          var tmp = Boards.find({inpSeat: "17"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua18 : function () {
          var tmp = Boards.find({inpSeat: "18"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua19 : function () {
          var tmp = Boards.find({inpSeat: "19"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      isAqua20 : function () {
          var tmp = Boards.find({inpSeat: "20"}).fetch();
          console.log(tmp);
          if (tmp.length > 0) {
              return 'aqua';
          }
          else {
              return '';
          }
      },
      prbar1 : function () {
          var tmp=Boards.find({inpSelect: "리그오브레전드"}).fetch();
          if(tmp.length>0){
              return tmp.length*10;
          }
          else{
              return 0;
          }
      },
      prbar2 : function () {
          var tmp=Boards.find({inpSelect: "오버워치"}).fetch();
          if(tmp.length>0){
              return tmp.length*10;
          }
          else{
              return 0;
          }
      },
      prbar3 : function () {
          var tmp=Boards.find({inpSelect: "서든어택"}).fetch();
          if(tmp.length>0){
              return tmp.length*10;
          }
          else{
              return 0;
          }
      },
      prbar4 : function () {
          var tmp=Boards.find({inpSelect: "기타"}).fetch();
          if(tmp.length>0){
              return tmp.length*10;
          }
          else{
              return 0;
          }
      },
      dd : function () {
          return prbar1()/(prbar1()+prbar2()+prbar3()+prbar4());
      }



  }
);

Template.table.events(
  {
    "click tr": function(evt, tmpl) {
      Session.set('selectedData', this);
      //console.log('tr clicked');
      //console.log($(this)[0].inpTextarea);
      //$('#targetModal').text($(this)[0].inpTextarea);
      //$('#myModalLabel').text($(this)[0].inpName)
      ////console.log($(evt).find('tr').attr('dataId'));
    }
  }
);
template.table.onRendered=function () {

}