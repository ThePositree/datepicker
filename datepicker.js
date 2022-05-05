class Datepicker{
  constructor($el) {
    this.bodyDp = `<div class="dp-body">
        <div class="dp-week-name">
          <span>Пн</span>
          <span>Вт</span>
          <span>Ср</span>
          <span>Чт</span>
          <span>Пт</span>
          <span>Сб</span>
          <span>Вс</span>
        </div>
        <div class="dp-main">
          <div class="dp-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
          <div class="dp-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
          <div class="dp-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
          <div class="dp-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
          <div class="dp-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
          <div class="dp-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
        </div>
      </div>`
    this.navDp = `<div class="dp-nav">
        <button class="dp-prev-m">1</button>
        <div class="dp-nav-m-y">
          <button class="dp-nav-m">
            август
          </button>
          <button class="dp-nav-y">
            2020
          </button>
        </div>
        <button class="dp-next-m">2</button>
      </div>`
    this.containerDp = `<div class='dp-container'>${this.navDp}${this.bodyDp}</div>`
    $el.insertAdjacentHTML('afterend', this.containerDp)
    this.parentEl = $el.parentNode
    let myDp = this.parentEl.querySelector('.dp-container')



    $el.addEventListener('click',function () {
      myDp.classList.add('dp-container--active')
      document.querySelectorAll('.dp-row button').forEach(element => {
        element.addEventListener('click', function () {
          $el.value = this.innerText
          myDp.classList.remove('dp-container--active')
        })
      });
    })



    document.addEventListener('click',function (e) {
      if (myDp.classList.contains('dp-container--active')) {
        if (!e.target.closest(`.${$el.parentNode.classList[0]}`)) {
          myDp.classList.remove('dp-container--active')
        }
      }
    })
  }
}

const asdfadsf = new Datepicker(asdf)