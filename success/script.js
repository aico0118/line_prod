
var getTodoState = function(item) {
  if (item.completed) {
    return "completed";
  }
  return "active";
};
$(document).ready(function(){
  liff.init();
});
var app = new Vue({
  el: "#app",
  mounted:function(){
    
    let today=new Date();
    let currentDateTime = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;
    let param = {
      "message" : 
      `您的商店有新的訂單！
      時間：${currentDateTime}
      訂單編號：#001
      金額：${this.currentData.price}
      品項：${this.currentData.name}
      查看訂單明細>>
      line://app/1564272592-PjAdk6W1
      `
    }
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://line.bean.tw/api/LineAt/LineNotify",
      "method": "POST",
      "headers": {
        "charset": "UTF-8",
        "content-type": "application/json",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(param)
    }
    
    $.ajax(settings).done(function (response) {
          
    });
  },
  data: {
    prods: [
      {
        name: "綜合甜甜圈組合",
        desc: 
        `鬆軟麵團X精選醬料，蹦出全新滋味！<br>
        經典巧克力Ｘ１<br>
        無敵大草莓Ｘ１<br>
        甜蜜脆焦糖Ｘ１<br>
        香濃蜜肉桂Ｘ１<br>
        各一入`,
        src: "https://i.imgur.com/aT8ZxEc.jpg",
        price:120,
        score:4.9
      },
      {
        name: "鬆餅飲料組合",
        desc: "基本口味鬆餅 X 40元以下飲料",
        src: "https://i.imgur.com/RR3IKuX.jpg",
        price:79,
        score:4.3
      },
      {
        name: "傳情寫意糖霜餅乾",
        desc: 
        `可客製化文字/圖形`,
        src: "https://i.imgur.com/BW55rd9.jpg",
        price:189,
        score:4.6
      }
     
    ]
  },
  computed:{
    id(){
      let url = new URLSearchParams(window.location.search).toString();
      let id = "";
          //在此直接將各自的參數資料切割放進ary中
          let ary = url.split('&');
          for(i=0;i<=ary.length-1;i++)
          {
              if(ary[i].split('=')[0] == 'id')
                  id = ary[i].split('=')[1];
          }
      return id;
    },
    currentData(){
      return this.prods[this.id];
    }
  },
  methods:{
    goToProd(){
      window.location = 'line://app/1564272592-E8zDZG6B?id=0';
    },
    closeLIFF(){
      liff.closeWindow();
    }
  }
});