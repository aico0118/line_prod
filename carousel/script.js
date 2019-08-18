
var getTodoState = function(item) {
  if (item.completed) {
    return "completed";
  }
  return "active";
};
var app = new Vue({
  el: "#app",
  data: {
    cards: [
      {
        title: "綜合甜甜圈組合",
        text: "鬆軟麵團X精選醬料，蹦出全新滋味！",
        src: "https://i.imgur.com/aT8ZxEc.jpg"
      },
      {
        title: "鬆餅飲料組合",
        text: "基本口味鬆餅 X 40元以下飲料",
        src: "https://i.imgur.com/RR3IKuX.jpg"
      }
    ],
    currentTab: "all",
    todos: [
      {
        id: 123,
        title: "測試",
        completed: false
      }
    ],
    title: "",
    text: "",
    src: "",
    cacheToDo: {},
    cacheTitle: "",
    currentSrc: "",
    imgCss:{
      "color": "gray"
    }
  },
  methods: {
    addCard() {
      let vm = this;
      vm.cards.push({
        text: vm.text,
        title: vm.title,
        src: vm.currentSrc
      });
      this.text = "";
      this.title = "";
      $('.scroll-area').animate({scrollLeft:'+=380'}, 600, "swing");
      Vue.set(vm.imgCss, "backgroundImage", "");
      Vue.set(vm.imgCss, "color", "gray");
      Vue.set(vm.imgCss, "textShadow", "");
    },
    readFile(e) {
      let vm = this;
      if (e.currentTarget.files && e.currentTarget.files[0]) {
        var FR= new FileReader();
        FR.addEventListener("load", function(e) {
          vm.currentSrc = e.target.result;
          Vue.set(vm.imgCss, "backgroundImage", "url('"+e.target.result+"')");
          Vue.set(vm.imgCss, "color", "white");
          Vue.set(vm.imgCss, "textShadow", "1px 1px 7px black");
        }); 
        
        FR.readAsDataURL( e.currentTarget.files[0] );
      }
    }
    
  }
});