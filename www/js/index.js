var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var events = {
  addEntry: function() {
      var textInput = document.getElementById('text-input').value;
      var d = new Date();
      var n = d.getDate();
      console.log(d, n);
      if(localStorage["entries"].length !== 0) {
        var entries = JSON.parse(localStorage["entries"]);
      } else {
        var entries = [];
      }
      entries.push(n+' '+textInput);
      console.log(entries);
      localStorage["entries"] = JSON.stringify(entries);
      var schatkist = JSON.parse(localStorage["entries"]);
      console.log('schatkist', schatkist);
  }
};
