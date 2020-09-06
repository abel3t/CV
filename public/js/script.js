document.addEventListener(
  'DOMContentLoaded',
  function () {
    AOS.init({
      disable: 'mobile'
    });
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
      document.body.appendChild(css);
    };
    //make typewriter

    //make tab
    const tabChanger = document.getElementsByClassName('tab');
    const allTabContent = document.querySelectorAll('.works-container ul li');
    const htmlList = document.querySelectorAll('.html');
    const reactjsList = document.querySelectorAll('.reactjs');
    const fullstackList = document.querySelectorAll('.fullstack');

    console.log(allTabContent);

    for (let i = 0; i < tabChanger.length; i++) {
      tabChanger[i].onclick = function () {
        if (this.classList.value === 'tab active') {} else {
          for (let k = 0; k < tabChanger.length; k++) {
            tabChanger[k].classList.remove('active');
          }
          this.classList.add('active');
          var contentName = this.getAttribute('data-appear');
          console.log(contentName);
          if (contentName === '.html') {
            for (let i = 0; i < htmlList.length; i++) {
              htmlList[i].classList.remove('disappear');
            }
            for (let i = 0; i < reactjsList.length; i++) {
              reactjsList[i].classList.add('disappear');
            }
            for (let i = 0; i < fullstackList.length; i++) {
              fullstackList[i].classList.add('disappear');
            }
          }
          if (contentName === '.reactjs') {
            for (let i = 0; i < reactjsList.length; i++) {
              reactjsList[i].classList.remove('disappear');
            }

            for (let i = 0; i < htmlList.length; i++) {
              htmlList[i].classList.add('disappear');
            }
            for (let i = 0; i < fullstackList.length; i++) {
              fullstackList[i].classList.add('disappear');
            }
          }
          if (contentName === '.fullstack') {
            for (let i = 0; i < reactjsList.length; i++) {
              reactjsList[i].classList.add('disappear');
            }

            for (let i = 0; i < htmlList.length; i++) {
              htmlList[i].classList.add('disappear');
            }
            for (let i = 0; i < fullstackList.length; i++) {
              fullstackList[i].classList.remove('disappear');
            }
          }

          if (contentName === '.all') {
            for (let i = 0; i < allTabContent.length; i++) {
              allTabContent[i].classList.remove('disappear');
            }
          }
        }
      };
    }
    //make tab

    //make nav-mobile
    const navMobileBtn = document.getElementById('nav-bar-btn');
    const navbar = document.getElementById('nav-bar');
    const navCloseBtn = document.getElementById('nav-mobile-btn-close');

    navMobileBtn.onclick = () => {
      navbar.classList.toggle('nav-bar-mobile-open');
    };

    navCloseBtn.onclick = () => {
      navbar.classList.remove('nav-bar-mobile-open');
    };
  },
  false
);