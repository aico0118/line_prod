
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
      try
      {
       eval( 'var msg = ' +$('#message').val()+' ;');   
      liff.sendMessages(msg).catch(function(e){alert(e.message);});

      }
      catch(e){
        alert(e.message);
      }
     
    }
  }
});
