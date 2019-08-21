
var getTodoState = function(item) {
  if (item.completed) {
    return "completed";
  }
  return "active";
};

var app = new Vue({
  el: "#app",
  mounted:function(){
    liff.init();
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
    sendMsg(){
      let msg = JSON.parse($('#msg').val());
      liff.sendMessages(msg);
    }
  }
});