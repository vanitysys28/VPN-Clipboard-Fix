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