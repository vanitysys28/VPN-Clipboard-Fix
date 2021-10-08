var commentstext = ["Awesome", "does this website actually work?", "have received several payments from them.", "Join and see for yourself, you wont be disappointed.", "Thought this was a finesse but I was wrong", "you guys rock", "I also received my payments on time, they are the best", "I just received my second payment!!!!!!!❤️❤️", "I got my first payment last week", "some of the tasks seem long but its worth it", "Give me a month, I’ll have a sports car ", "anyone know if this is legit and not a BS scam site?", "Made more than 3k$ and I have withdrawn my earnings multiple times without a problem", "just got my payment today, used paypal to receive the funds.", "How long does it take to get the $10 sign up bonus?", "once you sign up, the $10 bonus is instantly added to your account"];
var channels = ["https://www.youtube.com/signin?action_handle_signin=true&pageid=116091685551107593575&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=112489761013558958510&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=103470800552523961268&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=104385467817824517659&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=105805589431937237569&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=117738791331206959444&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=115407413909655922228&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=104534948008224356447&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=107683953117025129787&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=101023833689553589195&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=103313738155279671209&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=118308404356888995330&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=103113344542121602711&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=103451373988318942386&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=115760223203442992721&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4", "https://www.youtube.com/signin?action_handle_signin=true&pageid=113686331483927369363&authuser=0&skip_identity_prompt=False&feature=channel_switcher&next=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLD9UXSKzIB4"];
var youtubeprefix = "https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D"
var vidurl = "LD9UXSKzIB4"

function $x(path) {
    var xpath = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var temp = [];
    for (var i = xpath.snapshotLength - 1; i >= 0; i--) {
        temp.push(xpath.snapshotItem(i));
    }
    return temp;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function comment() {
    shuffle(channels)
    for (let i = 0; i < channels.length; i++) {
        window.location.href = channels[i]
            if ($x("/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[1]/span/yt-sort-filter-sub-menu-renderer/yt-dropdown-menu/paper-menu-button/div/paper-button")[0] != null) {
                $x("/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[1]/span/yt-sort-filter-sub-menu-renderer/yt-dropdown-menu/paper-menu-button/div/paper-button")[0].click()
                document.querySelector("#menu > a:nth-child(2) > paper-item").click()
                if (i === 2 || i === 3 || i === 12 || i === 13 || i === 15) {
                    $x("/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[3]/ytd-comment-thread-renderer[1]/ytd-comment-renderer/div[1]/div[2]/ytd-comment-action-buttons-renderer/div[1]/div[4]/ytd-button-renderer/a/paper-button/yt-formatted-string")[0].click()
                    $x("/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[3]/ytd-comment-thread-renderer[1]/ytd-comment-renderer/div[1]/div[2]/ytd-comment-action-buttons-renderer/div[2]/ytd-comment-reply-dialog-renderer/ytd-commentbox/div/div[2]/paper-input-container/div[2]/div/div[1]/ytd-emoji-input/yt-user-mention-autosuggest-input/yt-formatted-string/div")[0].innerText = commentstext[i]
                    document.querySelector("#submit-button").removeAttribute("disabled")
                    document.querySelector("#submit-button").click()
                } else {
                    document.querySelector("#placeholder-area").click()
                    document.querySelector("#contenteditable-root").innerText = commentstext[i]
                    document.querySelector("#submit-button").removeAttribute("disabled")
                    document.querySelector("#submit-button").click()
                }
          }
    }
}

comment()


// function commentreply() {
//     $x('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[3]/ytd-comment-thread-renderer[1]/ytd-comment-renderer/div[1]/div[2]/ytd-comment-action-buttons-renderer/div[1]/div[4]/ytd-button-renderer/a/paper-button/yt-formatted-string')[0].click()
//     $x('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[3]/ytd-comment-thread-renderer[1]/ytd-comment-renderer/div[1]/div[2]/ytd-comment-action-buttons-renderer/div[2]/ytd-comment-reply-dialog-renderer/ytd-commentbox/div/div[2]/paper-input-container/div[2]/div/div[1]/ytd-emoji-input/yt-user-mention-autosuggest-input/yt-formatted-string/div')[0].innerText = "coucou"
//     document.querySelector("#submit-button").removeAttribute("disabled")
//     document.querySelector("#submit-button").click()
// }


// function comment () {
//     setInterval(function() {
//         if ($x('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[1]/span/yt-sort-filter-sub-menu-renderer/yt-dropdown-menu/paper-menu-button/div/paper-button')[0] != null) {
//             $x('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[1]/span/yt-sort-filter-sub-menu-renderer/yt-dropdown-menu/paper-menu-button/div/paper-button')[0].click()
//             document.querySelector("#menu > a:nth-child(2) > paper-item").click()
//                 document.querySelector("#placeholder-area").click()
//                 document.querySelector("#contenteditable-root").innerHTML = "Awesome vid"
//                 document.querySelector("#submit-button").removeAttribute("disabled")
//                 document.querySelector("#submit-button").click()
//         }
//      }, 100); // check every 100ms
// }

// function scrollIntoView() {
//     window.location.href = channels[i]
//     document.querySelector("#comments").scrollIntoView(false)
//     return
// }

// function launchscript() {
//     for (var i = 0; i < channels.length; i++) {
//         scrollIntoView();
//         if (i == 2 || i == 3 || i == 12 || i == 13 || i == 15) {
//             commentreply()
//         } else {
//             comment()
//         }
// }
// }

// launchscript()