class Datepicker {
  constructor($el) {


    function f_addZero(p_num) {
      if (p_num >= 0 && p_num <= 9) {
        return '0' + p_num;
      } else {
        return p_num;
      }
    }

    function getNameMounth(m) {
      if (m === 1) {
        return 'Январь'
      } else if (m === 2) {
        return 'Февраль'
      } else if (m === 3) {
        return 'Март'
      } else if (m === 4) {
        return 'Апрель'
      } else if (m === 5) {
        return 'Май'
      } else if (m === 6) {
        return 'Июнь'
      } else if (m === 7) {
        return 'Июль'
      } else if (m === 8) {
        return 'Август'
      } else if (m === 9) {
        return 'Сентябрь'
      } else if (m === 10) {
        return 'Октябрь'
      } else if (m === 11) {
        return 'Ноябрь'
      } else if (m === 12) {
        return 'Декабрь'
      }
    }

    let allM = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ]
    let allDays = [
      'Вс',
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
    ]
    let mounth = allM[new Date().getMonth()]
    let year = new Date().getFullYear()
    let day = new Date().getDate()
    $el.value = `${year}-${f_addZero(getIndexMounth(mounth) + 1)}-${f_addZero(day)}`
    function getIndexMounth(m) {
      return allM.indexOf(m)
    }
    function getFirstDayOfWeek(m, y) {
      return new Date(`${y}-${getIndexMounth(m) + 1}-1`).getDay();
    }
    function getLastDayofMounth(m, y) {
      return new Date(y, getIndexMounth(m) + 1, 0).getDate()
    }
    function drowBtn(m = allM[new Date().getMonth()], y = new Date().getFullYear(), d = new Date().getDate()) {
      let result = '';
      let amountDaysOfLastMounth = getLastDayofMounth(allM[getIndexMounth(m) - 1], y)
      let amountDaysOfcurrentMounth = getLastDayofMounth(m, y)
      let amountForDrowAllRow;
      let counter = 0;
      let counter2 = 0;
      if (getFirstDayOfWeek(m, y)) {
        amountDaysOfLastMounth = amountDaysOfLastMounth - (getFirstDayOfWeek(m, y) - 2)
        for (let index = 0; index < getFirstDayOfWeek(m, y) - 1; index++) {
          result += `<button class="dp-btn-last-mounth">${amountDaysOfLastMounth}</button>`;
          counter++
          amountDaysOfLastMounth++
          counter2++
        }
      } else {
        amountDaysOfLastMounth = amountDaysOfLastMounth - 5
        for (let index = 0; index < 6; index++) {
          result += `<button class="dp-btn-last-mounth">${amountDaysOfLastMounth}</button>`;
          counter++
          counter2++
          amountDaysOfLastMounth++
        }
      }
      let amountForDrowOneRow = amountDaysOfcurrentMounth - amountDaysOfcurrentMounth + 1
      if (counter !== 7) {
        let amountForDrow = 7 - counter
        for (let index = 0; index < amountForDrow; index++) {
          if (d === index) {
            result += `<button class="dp-current-day">${amountForDrowOneRow}</button>`
            amountForDrowOneRow++
            counter2++
          } else {
            result += `<button>${amountForDrowOneRow}</button>`
            amountForDrowOneRow++
            counter2++
          }
        }
        amountForDrowAllRow = amountDaysOfcurrentMounth - amountForDrowOneRow
      }
      let amountForDrowRestRow = amountForDrowOneRow;
      for (let index = 0; index <= amountForDrowAllRow; index++) {
        if (d === amountForDrowRestRow) {
          result += `<button class="dp-current-day">${amountForDrowRestRow}</button>`
          amountForDrowRestRow++
          counter2++
        } else {
          result += `<button>${amountForDrowRestRow}</button>`
          amountForDrowRestRow++
          counter2++
        }
      }
      let amountNextMountRestRow = 42 - counter2;
      for (let index = 0; index < amountNextMountRestRow; index++) {
        result += `<button class="dp-btn-next-mounth">${index + 1}</button>`
      }
      return result
    }

    this.mainDp = `<div class="dp-main">
        ${drowBtn(mounth, year, day)}
        </div>`

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
        ${this.mainDp}
      </div>`
    this.navDp = `<div class="dp-nav">
        <button class="dp-prev-y">1</button>
        <button class="dp-prev-m">1</button>
        <div class="dp-nav-m-y">
          <button class="dp-nav-m">
            ${mounth}
          </button>
          <button class="dp-nav-y">
            ${year}
          </button>
        </div>
        <button class="dp-next-m">2</button>
        <button class="dp-next-y">2</button>
      </div>`
    this.containerDp = `<div class='dp-container'>${this.navDp}${this.bodyDp}</div>`
    $el.insertAdjacentHTML('afterend', this.containerDp)
    this.parentEl = $el.parentNode
    let myDp = this.parentEl.querySelector('.dp-container')
    function clickNextYear() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      year = year + 1
      document.querySelector('.dp-nav-y').innerText = year
      document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhoose)
      });
    }
    function clickNextMounth() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      mounth = allM[getIndexMounth(mounth) + 1]
      document.querySelector('.dp-nav-m').innerText = mounth
      document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhoose)
      });
    }
    function clickPrevYear() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      year = year - 1
      document.querySelector('.dp-nav-y').innerText = year
      document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhoose)
      });
    }
    function clickPrevMounth() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      mounth = allM[getIndexMounth(mounth) - 1]
      document.querySelector('.dp-nav-m').innerText = mounth
      document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhoose)
      });
    }
    function clickСhoose() {
      document.querySelectorAll('.dp-main button').forEach(elem => {
        elem.classList.remove('dp-current-day')
      })
      this.classList.add('dp-current-day')
      if (this.classList.contains('dp-btn-last-mounth')) {
        $el.value = `${year}-${f_addZero(getIndexMounth(mounth) - 1)}-${f_addZero(parseFloat(this.innerText))}`
      } else if (this.classList.contains('dp-btn-next-mounth')) {
        $el.value = `${year}-${f_addZero(getIndexMounth(mounth) + 1)}-${f_addZero(parseFloat(this.innerText))}`
      } else {
        $el.value = `${year}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(parseFloat(this.innerText))}`
      }
      day = parseFloat(this.innerText)
      myDp.classList.remove('dp-container--active')
    }

    $el.addEventListener('click', function () {
      myDp.classList.add('dp-container--active')
    })
    document.querySelectorAll('.dp-main button').forEach(element => {
      element.addEventListener('click', clickСhoose)
    });
    document.querySelector('.dp-prev-y').addEventListener('click', clickPrevYear)
    document.querySelector('.dp-prev-m').addEventListener('click', clickPrevMounth)
    document.querySelector('.dp-next-y').addEventListener('click', clickNextYear)
    document.querySelector('.dp-next-m').addEventListener('click', clickNextMounth)

    document.addEventListener('click', function (e) {
      if (myDp.classList.contains('dp-container--active')) {
        if (!e.target.closest(`.${$el.parentNode.classList[0]}`)) {
          myDp.classList.remove('dp-container--active')
        }
      }
    })
  }
}

const asdfadsf = new Datepicker(asdf)