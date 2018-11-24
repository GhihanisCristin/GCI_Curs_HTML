/*function setupHelp() {
    var helpText = [
        {'id': 'email', 'message': 'Your e-mail address'},
        {'id': 'name', 'message': 'Your full name'},
        {'id': 'age', 'message': 'Your age (you must be over 16)'}
      ];
  
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function() {
        document.getElementById('help').innerHTML = item.message;
      }
    }
  }
  
  setupHelp();*/


function makeHelpCallback(help){ 
    return function() {
        document.getElementById('help').innerHTML = help;
    };
  }
  
  function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
      ];
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
  }
  
  setupHelp();