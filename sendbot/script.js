
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
      alert('a');
      alert(liff);
      liff.sendMessages([
        {
          type:'text',
          text:'Hello, World!1'
        }
      ]);
      eval( 'let msg = ' +$('#message').val()+';');
      liff.sendMessages(msg);

    }
  }
});