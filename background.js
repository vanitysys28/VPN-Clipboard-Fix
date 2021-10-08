chrome.commands.onCommand.addListener(function(command) {
    if (command === "show") {
        frds.open_menu();
    }
    if (command === "copy") {
        document.getElementById('frds_clipboard_text').value = Module.ccall('frds_sdl_rdp_send_clipboard_req', null, ['number'], [frds_ctx_ptr]);
        frds.open_menu()
        alert("Texte prêt à être copié");
    }
    if (command === "paste") {
        frds.on_clipboard_to_remote();
        frds.close_clipboard();
        alert("Texte prêt à être collé")
    }
});


var keys;
 
    document.addEventListener("keydown", function (e) {
        keys = (Object.keys || []);
        keys[e.keyCode]=true;

         if (keys[17] && keys[18] && keys[67]){
            document.getElementById('frds_clipboard_text').value = Module.ccall('frds_sdl_rdp_send_clipboard_req', null,
			 ['number'], [frds_ctx_ptr]);
            frds.open_menu(); 
// 	      document.getElementById("frds_clipboard_ctrl").style.display = "block"
//            Module.ccall('frds_sdl_set_keyboard_event', ['boolean'],
// 		  ['0']);
     }
      if (keys[17] && keys[18] && keys[83]){
            frds.open_menu();
     }
     if (keys[17] && keys[18] && keys[86]){
            frds.on_clipboard_to_remote()
            frds.close_clipboard()
     }
    } , false);



document.addEventListener("keyup", function (e) {
keys[e.keyCode]=false;
stop();
 } , false);
