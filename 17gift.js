document.getElementsByClassName('ChatList__ChatListWrapper-jeEuyN')[0].style.backgroundColor = '#EEFFEE';

while (true) {
    var chat = document.getElementsByClassName('Chat__ChatWrapper-dhHBjd');
    if (chat[0].getElementsByClassName('GiftItem__GiftIcon-fZjCQ').length > 0){
        chat[0].style.backgroundColor = '#fffeee';
        chat[0].style.borderRadius = '15px';
        chat[0].style.padding = '10px';
    }
    chat[0].classList.remove('Chat__ChatWrapper-dhHBjd');
}
