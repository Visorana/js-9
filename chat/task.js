const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages');
const messagesContainer = document.querySelector('.chat-widget__messages-container');
const answers = [
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать!'
    ]
let timerIsActive = false;

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getMessage();
    }
});

function getMessage() {
    if (chatInput.value.trim().length > 0) {
        date = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${`${date.getHours()}:${date.getMinutes()}`}</div>
                <div class="message__text">
                ${chatInput.value}
                </div>
            </div>
            `;
        chatInput.value = '';
        scrollToBottom(messagesContainer);
        sendMessage(answers[Math.floor(Math.random()*answers.length)]);
    } else {
        return;
    };
};

function sendMessage(answer) {
    if (timerIsActive) {
        clearTimeout(downtimeTimer);
    };
    date = new Date();
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${`${date.getHours()}:${date.getMinutes()}`}</div>
            <div class="message__text">
            ${answer}
            </div>
        </div>
        `;
    scrollToBottom(messagesContainer);
    downtime();
}

function scrollToBottom(el) {
    el.scrollTop = el.scrollHeight;
}

function downtime() {
    timerIsActive = true;
    downtimeTimer = setTimeout(function(){sendMessage('Вы ещё здесь?')}, 30000);
}