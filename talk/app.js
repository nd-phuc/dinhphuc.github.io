var app = new Vue({
  el: '#app',
  data: {
    isDisabledButton: false,
    recognition: null,
    userName: 'Sauanla',
    messages: [],
  },
  methods: {
    say: function (event) {
      console.log('say');
      this.isDisabledButton = true;
      this.recognition.start();
    },
    botSay: function (msg) {
      if (msg && msg !== '') {
        responsiveVoice.speak(msg, 'Vietnamese Female');
      } else {
        responsiveVoice.speak('Tôi không hiểu bạn nói gì', 'Vietnamese Female');
      }
      let message = {
        name: 'BOT',
        msg: msg,
        bot: true,
      };
      console.log(message);
      this.messages.push(message);

      const els = this.$el.getElementsByClassName('chatbox__messages__user-message');
      console.log(els);
      const el = els[els.length-1];
      console.log(el);
      if (el) {
        el.scrollIntoView();
      }
    },

    handleAction: function (msg) {
      if (msg.toLowerCase().includes('xin chào')) {
        this.botSay(msg);
      } else if (msg.toLowerCase().includes('tab mới')) {
        this.botSay('đã mở tab mới');
        var win = window.open('https://www.google.com/', '_blank');
        win.focus();
      } else if (msg.toLowerCase().includes('ngày')) {
        var today = new Date();
        var date =
          today.getDate() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getFullYear();
        this.botSay(date);
      } else if (msg.toLowerCase().includes('giờ')) {
        var today = new Date();
        var time =
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds();
        this.botSay(time);
      } else {
        this.botSay('Tôi không hiểu bạn nói gì');
      }
    },
    scroll(arg) {
        let el = document.querySelector(arg.to),
            offset = parseInt(arg.offset) || 0,
            duration = arg.duration || 800,
            easing = arg.easing || 'easeOutExpo',
            callback = arg.callback || null;

        if ( el ) {
            anime({
                targets: ['html', 'body'],
                scrollTop: (el.offsetTop - offset),
                duration: duration,
                easing: easing,
                complete: callback
            })
            .finished.then(() => {
                bus.$emit('scroll:finished', true);
            });
        }
    }
  },
  created() {
    console.log('a');
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'vi-VN';

    this.recognition.onstart = () => {
      console.log('void');
    };
    this.recognition.onaudioend = () => {
      if (this.isDisabledButton) {
        this.isDisabledButton = false;
        this.botSay('Tôi không hiểu bạn nói gì');
      }
    };
    this.recognition.onresult = (event) => {
      console.log(event);
      const current = event.resultIndex;
      let message = {
        name: this.userName,
        msg: event.results[current][0].transcript,
        bot: false,
      };
      console.log(message);
      this.messages.push(message);
      this.handleAction(message.msg);
      this.isDisabledButton = false;
    };
  },
});
