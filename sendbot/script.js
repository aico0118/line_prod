
var getTodoState = function(item) {
  if (item.completed) {
    return "completed";
  }
  return "active";
};

var app = new Vue({
  el: "#app",
  methods:{
    sendMsg(){
      eval( 'var msg = ' +$('#message').val()+';');   
      liff.sendMessages(msg);

    }
  }
});