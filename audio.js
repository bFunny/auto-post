if (document.createElement('audio').canPlayType) {
  if (!document.createElement('audio').canPlayType('audio/mpeg') &&
      !document.createElement('audio').canPlayType('audio/ogg')) {
    swfobject.embedSWF("http://www.html5rocks.com/en/tutorials/audio/quick/player_mp3_mini.swf",
                       "default_player_fallback", "200", "20", "9.0.0", "",
                       {"mp3":"http://www.html5rocks.com/en/tutorials/audio/quick/test.mp3"},
                       {"bgcolor":"#085c68"}
                      );
    swfobject.embedSWF("http://www.html5rocks.com/en/tutorials/audio/quick/player_mp3_mini.swf",
                       "custom_player_fallback", "200", "20", "9.0.0", "",
                       {"mp3":"http://www.html5rocks.com/en/tutorials/audio/quick/test.mp3"},
                       {"bgcolor":"#085c68"}
                      );
    document.getElementById('audio_with_controls').style.display = 'none';
  } 
}

	
	chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
		
		if (message.greeting == "audioPlay"){
				document.getElementById('audio').play()
						
			  sendResponse({farewell:"audio play"});
			
		}
		
		if (message.greeting == "audioPause"){
			
				document.getElementById('audio').load()
						
			  sendResponse({farewell:"audio pause"});
			
		}

});