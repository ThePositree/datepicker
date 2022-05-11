class Datepicker{
  constructor($el,$el2,date = new Date(),date2 = new Date()){
    function f_addZero(p_num) {
      if (p_num >= 0 && p_num <= 9) {
        return '0' + p_num;
      } else {
        return p_num;
      }
    }

    let choiceDate = new Date(date)
    let choiceDate2 = new Date(date2)


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
    function getFullNameMounth(m) {
      if (m === 'ЯНВ') {
        return 'Январь'
      } else if (m === 'ФЕВ') {
        return 'Февраль'
      } else if (m === 'МАР') {
        return 'Март'
      } else if (m === 'АПР') {
        return 'Апрель'
      } else if (m === 'МАЙ') {
        return 'Май'
      } else if (m === 'ИЮН') {
        return 'Июнь'
      } else if (m === 'ИЮЛ') {
        return 'Июль'
      } else if (m === 'АВГ') {
        return 'Август'
      } else if (m === 'СЕН') {
        return 'Сентябрь'
      } else if (m === 'ОКТ') {
        return 'Октябрь'
      } else if (m === 'НОЯ') {
        return 'Ноябрь'
      } else if (m === 'ДЕК') {
        return 'Декабрь'
      }
    }
    function getNameMounthReduction(m) {
      if (m === 1) {
        return 'Янв'
      } else if (m === 2) {
        return 'Фев'
      } else if (m === 3) {
        return 'Мар'
      } else if (m === 4) {
        return 'Апр'
      } else if (m === 5) {
        return 'Май'
      } else if (m === 6) {
        return 'Июн'
      } else if (m === 7) {
        return 'Июл'
      } else if (m === 8) {
        return 'Авг'
      } else if (m === 9) {
        return 'Сен'
      } else if (m === 10) {
        return 'Окт'
      } else if (m === 11) {
        return 'Ноя'
      } else if (m === 12) {
        return 'Дек'
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


    let mounth = getNameMounth(choiceDate.getMonth() + 1)
    let year = choiceDate.getFullYear()
    let currentYear = year
    let day = choiceDate.getDate()
    let currentMounth = mounth
    $el.value = `${year}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(day)}`
    let mounth2 = getNameMounth(choiceDate2.getMonth() + 1)
    let year2 = choiceDate2.getFullYear()
    let currentYear2 = year2
    let day2 = choiceDate2.getDate()
    let currentMounth2 = mounth2
    $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(day2)}`
    function getIndexMounth(m) {
      return allM.indexOf(m) + 1
    }
    function getFirstDayOfWeek(m, y) {
      return new Date(`${y}-${getIndexMounth(m)}-1`).getDay();
    }
    function getLastDayofMounth(m, y) {
      return new Date(y, getIndexMounth(m), 0).getDate()
    }


    function drowBtn(m = getNameMounth(choiceDate.getMonth() + 1), y = choiceDate.getFullYear(), d = choiceDate.getDate()) {
      let result = '';
      let amountDaysOfLastMounth = new Date(y, getIndexMounth(m) - 1, 0).getDate()
      let amountDaysOfcurrentMounth = getLastDayofMounth(m, y)
      let amountForDrowAllRow;
      let counter = 0;
      let counter2 = 0;
      if (getFirstDayOfWeek(m, y)) {
        amountDaysOfLastMounth = amountDaysOfLastMounth - (getFirstDayOfWeek(m, y) - 2)
        for (let index = 0; index < getFirstDayOfWeek(m, y) - 1; index++) {
          result += `<button class="dp-btn-day dp-btn-last-mounth"><div>${amountDaysOfLastMounth}</div></button>`;
          counter++
          amountDaysOfLastMounth++
          counter2++
        }
      } else {
        amountDaysOfLastMounth = amountDaysOfLastMounth - 5
        for (let index = 0; index < 6; index++) {
          result += `<button class="dp-btn-day dp-btn-last-mounth"><div>${amountDaysOfLastMounth}</div></button>`;
          counter++
          counter2++
          amountDaysOfLastMounth++
        }
      }
      let amountForDrowOneRow = amountDaysOfcurrentMounth - amountDaysOfcurrentMounth + 1
      if (counter !== 7) {
        let amountForDrow = 7 - counter
        for (let index = 0; index < amountForDrow; index++) {
          if (d - 1 === index && mounth.trim() === currentMounth.trim() && currentYear === year) {
            result += `<button class="dp-btn-day dp-current-day"><div>${amountForDrowOneRow}</div></button>`
            amountForDrowOneRow++
            counter2++
          } else {
            result += `<button class="dp-btn-day"><div>${amountForDrowOneRow}</div></button>`
            amountForDrowOneRow++
            counter2++
          }
        }
        amountForDrowAllRow = amountDaysOfcurrentMounth - amountForDrowOneRow
      }
      let amountForDrowRestRow = amountForDrowOneRow;
      for (let index = 0; index <= amountForDrowAllRow; index++) {
        if (d === amountForDrowRestRow && mounth.trim() === currentMounth.trim() && currentYear === year) {
          result += `<button class="dp-btn-day dp-current-day"><div>${amountForDrowRestRow}</div></button>`
          amountForDrowRestRow++
          counter2++
        } else {
          result += `<button class="dp-btn-day"><div>${amountForDrowRestRow}</div></button>`
          amountForDrowRestRow++
          counter2++
        }
      }
      let amountNextMountRestRow = 42 - counter2;
      for (let index = 0; index < amountNextMountRestRow; index++) {
        result += `<button class="dp-btn-day dp-btn-next-mounth"><div>${index + 1}</div></button>`
      }
      return result
    }

    function drowBtn2(m = getNameMounth(choiceDate2.getMonth() + 1), y = choiceDate2.getFullYear(), d = choiceDate2.getDate()) {
      let result = '';
      let amountDaysOfLastMounth = new Date(y, getIndexMounth(m) - 1, 0).getDate()
      let amountDaysOfcurrentMounth = getLastDayofMounth(m, y)
      let amountForDrowAllRow;
      let counter = 0;
      let counter2 = 0;
      if (getFirstDayOfWeek(m, y)) {
        amountDaysOfLastMounth = amountDaysOfLastMounth - (getFirstDayOfWeek(m, y) - 2)
        for (let index = 0; index < getFirstDayOfWeek(m, y) - 1; index++) {
          result += `<button class="dp-btn-day2 dp-btn-last-mounth2"><div>${amountDaysOfLastMounth}</div></button>`;
          counter++
          amountDaysOfLastMounth++
          counter2++
        }
      } else {
        amountDaysOfLastMounth = amountDaysOfLastMounth - 5
        for (let index = 0; index < 6; index++) {
          result += `<button class="dp-btn-day2 dp-btn-last-mounth2"><div>${amountDaysOfLastMounth}</div></button>`;
          counter++
          counter2++
          amountDaysOfLastMounth++
        }
      }
      let amountForDrowOneRow = amountDaysOfcurrentMounth - amountDaysOfcurrentMounth + 1
      if (counter !== 7) {
        let amountForDrow = 7 - counter
        for (let index = 0; index < amountForDrow; index++) {
          if (d - 1 === index && mounth2.trim() === currentMounth2.trim() && currentYear2 === year2) {
            result += `<button class="dp-btn-day2 dp-current-day2"><div>${amountForDrowOneRow}</div></button>`
            amountForDrowOneRow++
            counter2++
          } else {
            result += `<button class="dp-btn-day2"><div>${amountForDrowOneRow}</div></button>`
            amountForDrowOneRow++
            counter2++
          }
        }
        amountForDrowAllRow = amountDaysOfcurrentMounth - amountForDrowOneRow
      }
      let amountForDrowRestRow = amountForDrowOneRow;
      for (let index = 0; index <= amountForDrowAllRow; index++) {
        if (d === amountForDrowRestRow && mounth2.trim() === currentMounth2.trim() && currentYear2 === year2) {
          result += `<button class="dp-btn-day2 dp-current-day2"><div>${amountForDrowRestRow}</div></button>`
          amountForDrowRestRow++
          counter2++
        } else {
          result += `<button class="dp-btn-day2"><div>${amountForDrowRestRow}</div></button>`
          amountForDrowRestRow++
          counter2++
        }
      }
      let amountNextMountRestRow = 42 - counter2;
      for (let index = 0; index < amountNextMountRestRow; index++) {
        result += `<button class="dp-btn-day2 dp-btn-next-mounth2"><div>${index + 1}</div></button>`
      }
      return result
    }
    function drowMounthBtn(m = mounth) {
      let result = '';
      let indexCurrentMounth = getIndexMounth(m)
      let counter = 0;
      let mounthForDrow = 1;
      let mounthForGreyDrow = 9;
      let mounthForGreyDrow2 = 1;
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-mounth dp-grey-mounth"><div class="dp-btn-inner">${getNameMounthReduction(mounthForGreyDrow)}</div></button>`
        mounthForGreyDrow++
      }
      for (let index = 0; index < 12; index++) {
        if (mounthForDrow === indexCurrentMounth) {
          result += `<button class="dp-btn-mounth dp-current-mounth"><div class="dp-btn-inner">${getNameMounthReduction(mounthForDrow)}</div></button>`
        } else {
          result += `<button class="dp-btn-mounth"><div class="dp-btn-inner">${getNameMounthReduction(mounthForDrow)}</div></button>`
        }
        if (mounthForDrow === 12) {
          mounthForDrow = 1
        } else {
          mounthForDrow++
        }
      }
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-mounth dp-grey-mounth"><div class="dp-btn-inner">${getNameMounthReduction(mounthForGreyDrow2)}</div></button>`
        mounthForGreyDrow2++
      }
      return result
    }

    function drowMounthBtn2(m = mounth2) {
      let result = '';
      let indexCurrentMounth = getIndexMounth(m)
      let counter = 0;
      let mounthForDrow = 1;
      let mounthForGreyDrow = 9;
      let mounthForGreyDrow2 = 1;
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-mounth2 dp-grey-mounth2"><div class="dp-btn-inner2">${getNameMounthReduction(mounthForGreyDrow)}</div></button>`
        mounthForGreyDrow++
      }
      for (let index = 0; index < 12; index++) {
        if (mounthForDrow === indexCurrentMounth) {
          result += `<button class="dp-btn-mounth2 dp-current-mounth2"><div class="dp-btn-inner2">${getNameMounthReduction(mounthForDrow)}</div></button>`
        } else {
          result += `<button class="dp-btn-mounth2"><div class="dp-btn-inner2">${getNameMounthReduction(mounthForDrow)}</div></button>`
        }
        if (mounthForDrow === 12) {
          mounthForDrow = 1
        } else {
          mounthForDrow++
        }
      }
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-mounth2 dp-grey-mounth2"><div class="dp-btn-inner2">${getNameMounthReduction(mounthForGreyDrow2)}</div></button>`
        mounthForGreyDrow2++
      }
      return result
    }

    function drowYearsBtn(y = year) {
      let result = '';
      let yearForDrow = y - 4
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-year dp-grey-year"><div class="dp-btn-inner">${yearForDrow}</div></button>`
        yearForDrow++
      }
      for (let index = 0; index < 12; index++) {
        if (yearForDrow === year) {
          result += `<button class="dp-btn-year dp-current-year"><div class="dp-btn-inner">${yearForDrow}</div></button>`
        } else {
          result += `<button class="dp-btn-year"><div class="dp-btn-inner">${yearForDrow}</div></button>`
        }
        yearForDrow++
      }
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-year dp-grey-year"><div class="dp-btn-inner">${yearForDrow}</div></button>`
        yearForDrow++
      }
      return result
    }
    function drowYearsBtn2(y = year2) {
      let result = '';
      let yearForDrow = y - 4
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-year2 dp-grey-year2"><div class="dp-btn-inner2">${yearForDrow}</div></button>`
        yearForDrow++
      }
      for (let index = 0; index < 12; index++) {
        if (yearForDrow === year2) {
          result += `<button class="dp-btn-year2 dp-current-year2"><div class="dp-btn-inner2">${yearForDrow}</div></button>`
        } else {
          result += `<button class="dp-btn-year2"><div class="dp-btn-inner">${yearForDrow}</div></button>`
        }
        yearForDrow++
      }
      for (let index = 0; index < 4; index++) {
        result += `<button class="dp-btn-year2 dp-grey-year2"><div class="dp-btn-inner2">${yearForDrow}</div></button>`
        yearForDrow++
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


    this.mainDp2 = `<div class="dp-main2">
        ${drowBtn2(mounth2, year2, day2)}
        </div>`

    this.bodyDp2 = `<div class="dp-body2">
        <div class="dp-week-name2">
          <span>Пн</span>
          <span>Вт</span>
          <span>Ср</span>
          <span>Чт</span>
          <span>Пт</span>
          <span>Сб</span>
          <span>Вс</span>
        </div>
        ${this.mainDp2}
      </div>`
    this.navDp2 = `<div class="dp-nav2">
        <button class="dp-prev-y2">1</button>
        <button class="dp-prev-m2">1</button>
        <div class="dp-nav-m-y2">
          <button class="dp-nav-m2">
            ${mounth2}
          </button>
          <button class="dp-nav-y2">
            ${year2}
          </button>
        </div>
        <button class="dp-next-m2">2</button>
        <button class="dp-next-y2">2</button>
      </div>`
    this.containerDp2 = `<div class='dp-container2'>${this.navDp2}${this.bodyDp2}</div>`

    this.$el = $el

    this.containerAll = `<div class='dp-container-all'>${this.containerDp}${this.containerDp2}</div>`
    this.parentEl = this.$el.parentNode
    this.parentEl.insertAdjacentHTML('beforeend', this.containerAll)
    let myDp = document.querySelector('.dp-container-all')





    function clickNextYear() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      year = year + 1
      document.querySelector('.dp-nav-y').innerText = year
      document.querySelector('.dp-main').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
        document.querySelectorAll('.dp-main button').forEach(element => {
          element.addEventListener('click', clickСhoose)
        });
      }, 100);
    }
    function clickNextMounth() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      if (getNameMounth(getIndexMounth(mounth)) === 'Декабрь') {
        mounth = 'Январь'
        clickNextYear()
      } else {
        mounth = getNameMounth(getIndexMounth(mounth) + 1)
      }
      document.querySelector('.dp-nav-m').innerText = mounth
      document.querySelector('.dp-main').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
        document.querySelectorAll('.dp-main button').forEach(element => {
          element.addEventListener('click', clickСhoose)
        });
      }, 100);
    }
    function clickPrevYear() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      year = year - 1
      document.querySelector('.dp-nav-y').innerText = year
      document.querySelector('.dp-main').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
        document.querySelectorAll('.dp-main button').forEach(element => {
          element.addEventListener('click', clickСhoose)
        });
      }, 100);
    }
    function clickPrevMounth() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      if (getNameMounth(getIndexMounth(mounth)) === 'Январь') {
        mounth = 'Декабрь'
        clickPrevYear()
      } else {
        mounth = getNameMounth(getIndexMounth(mounth) - 1)
      }
      document.querySelector('.dp-nav-m').innerText = mounth
      document.querySelector('.dp-main').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
        document.querySelectorAll('.dp-main button').forEach(element => {
          element.addEventListener('click', clickСhoose)
        });
      }, 100);
    }



    function clickNextYear2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhoose2)
      });
      year2 = year2 + 1
      document.querySelector('.dp-nav-y2').innerText = year2
      document.querySelector('.dp-main2').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main2').innerHTML = `${drowBtn2(mounth2, year2, day2)}`
        document.querySelectorAll('.dp-main2 button').forEach(element => {
          element.addEventListener('click', clickСhoose2)
        });
      }, 100);
    }
    function clickNextMounth2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhoose2)
      });
      if (getNameMounth(getIndexMounth(mounth2)) === 'Декабрь') {
        mounth2 = 'Январь'
        clickNextYear2()
      } else {
        mounth2 = getNameMounth(getIndexMounth(mounth2) + 1)
      }
      document.querySelector('.dp-nav-m2').innerText = mounth2
      document.querySelector('.dp-main2').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main2').innerHTML = `${drowBtn2(mounth2, year2, day2)}`
        document.querySelectorAll('.dp-main2 button').forEach(element => {
          element.addEventListener('click', clickСhoose2)
        });
      }, 100);
    }
    function clickPrevYear2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhoose2)
      });
      year2 = year2 - 1
      document.querySelector('.dp-nav-y2').innerText = year2
      document.querySelector('.dp-main2').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main2').innerHTML = `${drowBtn2(mounth2, year2, day2)}`
        document.querySelectorAll('.dp-main2 button').forEach(element => {
          element.addEventListener('click', clickСhoose2)
        });
      }, 100);
    }
    function clickPrevMounth2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhoose2)
      });
      if (getNameMounth(getIndexMounth(mounth2)) === 'Январь') {
        mounth2 = 'Декабрь'
        clickPrevYear2()
      } else {
        mounth2 = getNameMounth(getIndexMounth(mounth2) - 1)
      }
      document.querySelector('.dp-nav-m2').innerText = mounth2
      document.querySelector('.dp-main2').innerHTML = ``
      setTimeout(() => {
        document.querySelector('.dp-main2').innerHTML = `${drowBtn2(mounth2, year2, day2)}`
        document.querySelectorAll('.dp-main2 button').forEach(element => {
          element.addEventListener('click', clickСhoose2)
        });
      }, 100);
    }



    function clickСhoose() {
      document.querySelectorAll('.dp-main button').forEach(elem => {
        elem.classList.remove('dp-current-day')
      })
      this.classList.add('dp-current-day')
      if (this.classList.contains('dp-btn-last-mounth')) {
        if (getIndexMounth(mounth) === 1) {
          $el.value = `${year}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        } else {
          $el.value = `${year}-${f_addZero(getIndexMounth(mounth) - 1)}-${f_addZero(parseFloat(this.innerText))}`
          clickPrevMounth()
        }
      } else if (this.classList.contains('dp-btn-next-mounth')) {
        if (getIndexMounth(mounth) + 1 === 13) {
          $el.value = `${year}-${f_addZero(1)}-${f_addZero(parseFloat(this.innerText))}`
        } else {
          $el.value = `${year}-${f_addZero(getIndexMounth(mounth) + 1)}-${f_addZero(parseFloat(this.innerText))}`
          clickNextMounth()
        }
      } else {
        $el.value = `${year}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(parseFloat(this.innerText))}`
      }
      if (document.querySelector('.dp-nav-m').innerText.trim() === 'Декабрь' && new Date($el.value).getMonth() + 1 === 1) {
        $el.value = `${year + 1}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(parseFloat(this.innerText))}`
        clickNextMounth()
      } else if (document.querySelector('.dp-nav-m').innerText.trim() === 'Январь' && new Date($el.value).getMonth() + 1 === 12) {
        $el.value = `${year - 1}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        clickPrevMounth()
      }
      day = parseFloat(this.innerText)
      currentMounth = mounth
      currentYear = year

      myDp.classList.remove('dp-container-all--active')
    }


    function clickСhoose2() {
      document.querySelectorAll('.dp-main2 button').forEach(elem => {
        elem.classList.remove('dp-current-day2')
      })
      this.classList.add('dp-current-day2')
      if (this.classList.contains('dp-btn-last-mounth2')) {
        if (getIndexMounth(mounth2) === 1) {
          $el2.value = `${year2}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        } else {
          $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2) - 1)}-${f_addZero(parseFloat(this.innerText))}`
          clickPrevMounth2()
        }
      } else if (this.classList.contains('dp-btn-next-mounth2')) {
        if (getIndexMounth(mounth2) + 1 === 13) {
          $el2.value = `${year2}-${f_addZero(1)}-${f_addZero(parseFloat(this.innerText))}`
        } else {
          $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2) + 1)}-${f_addZero(parseFloat(this.innerText))}`
          clickNextMounth2()
        }
      } else {
        $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(parseFloat(this.innerText))}`
      }
      if (document.querySelector('.dp-nav-m2').innerText.trim() === 'Декабрь' && new Date($el2.value).getMonth() + 1 === 1) {
        $el2.value = `${year2 + 1}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(parseFloat(this.innerText))}`
        clickNextMounth2()
      } else if (document.querySelector('.dp-nav-m2').innerText.trim() === 'Январь' && new Date($el2.value).getMonth() + 1 === 12) {
        $el2.value = `${year2 - 1}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        clickPrevMounth2()
      }
      day2 = parseFloat(this.innerText)
      currentMounth2 = mounth2
      currentYear2 = year2

      myDp.classList.remove('dp-container-all--active')
    }

    let counterForClickYear = year;
    let counterForClickYear2 = year2;

    function clickNextMounthForMounth() {
      document.querySelector('.dp-current-mounth').nextElementSibling.classList.add('dp-current-mounth')
      let prevDpCurrentMounth = document.querySelectorAll('.dp-current-mounth')[0]
      prevDpCurrentMounth.classList.remove('dp-current-mounth')
      mounth = getFullNameMounth(document.querySelector('.dp-current-mounth').innerText.trim())
      document.querySelector('.dp-nav-m').innerText = mounth
    }
    function clickNextYearForYear() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhooseYear)
      });
      counterForClickYear += 20
      document.querySelector('.dp-main').innerHTML = `${drowYearsBtn(counterForClickYear)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhooseYear)
      });
    }
    function clickPrevMounthForMounth() {
      document.querySelector('.dp-current-mounth').previousElementSibling.classList.add('dp-current-mounth')
      let prevDpCurrentMounth = document.querySelectorAll('.dp-current-mounth')[1]
      prevDpCurrentMounth.classList.remove('dp-current-mounth')
      mounth = getFullNameMounth(document.querySelector('.dp-current-mounth').innerText.trim())
      document.querySelector('.dp-nav-m').innerText = mounth
    }
    function clickPrevYearForYear() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhooseYear)
      });
      counterForClickYear -= 20
      document.querySelector('.dp-main').innerHTML = `${drowYearsBtn(counterForClickYear)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhooseYear)
      });
    }
    function clickNextMounthForMounth2() {
      document.querySelector('.dp-current-mounth2').nextElementSibling.classList.add('dp-current-mounth2')
      let prevDpCurrentMounth2 = document.querySelectorAll('.dp-current-mounth2')[0]
      prevDpCurrentMounth2.classList.remove('dp-current-mounth2')
      mounth2 = getFullNameMounth(document.querySelector('.dp-current-mounth2').innerText.trim())
      document.querySelector('.dp-nav-m2').innerText = mounth2
    }
    function clickNextYearForYear2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhooseYear2)
      });
      counterForClickYear2 += 20
      document.querySelector('.dp-main2').innerHTML = `${drowYearsBtn2(counterForClickYear2)}`
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.addEventListener('click', clickСhooseYear2)
      });
    }
    function clickPrevMounthForMounth2() {
      document.querySelector('.dp-current-mounth2').previousElementSibling.classList.add('dp-current-mounth2')
      let prevDpCurrentMounth2 = document.querySelectorAll('.dp-current-mounth2')[1]
      prevDpCurrentMounth2.classList.remove('dp-current-mounth2')
      mounth2 = getFullNameMounth(document.querySelector('.dp-current-mounth2').innerText.trim())
      document.querySelector('.dp-nav-m2').innerText = mounth2
    }
    function clickPrevYearForYear2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhooseYear2)
      });
      counterForClickYear2 -= 20
      document.querySelector('.dp-main2').innerHTML = `${drowYearsBtn2(counterForClickYear2)}`
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.addEventListener('click', clickСhooseYear2)
      });
    }

    function clickСhooseMounth() {
      document.querySelectorAll('.dp-main button div').forEach(element => {
        element.removeEventListener('click', clickСhooseMounth)
      });
      document.querySelector('.dp-main').classList.remove('dp-main--mounth-choice')
      mounth = getFullNameMounth(this.innerText.trim())
      document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhoose)
      });
      document.querySelector('.dp-nav-m').innerText = mounth
      document.querySelector('.dp-week-name').classList.remove('dp-hide')
      document.querySelector('.dp-nav-y').classList.remove('dp-hide')
      document.querySelector('.dp-prev-y').classList.remove('dp-hide')
      document.querySelector('.dp-next-y').classList.remove('dp-hide')
      document.querySelector('.dp-next-m').removeEventListener('click', clickNextMounthForMounth)
      document.querySelector('.dp-prev-m').removeEventListener('click', clickPrevMounthForMounth)
      document.querySelector('.dp-next-m').addEventListener('click', clickNextMounth)
      document.querySelector('.dp-prev-m').addEventListener('click', clickPrevMounth)
    }
    function clickСhooseMounth2() {
      document.querySelectorAll('.dp-main2 button div').forEach(element => {
        element.removeEventListener('click', clickСhooseMounth2)
      });
      document.querySelector('.dp-main2').classList.remove('dp-main--mounth-choice2')
      mounth2 = getFullNameMounth(this.innerText.trim())
      document.querySelector('.dp-main2').innerHTML = `${drowBtn2(mounth2, year2, day2)}`
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.addEventListener('click', clickСhoose2)
      });
      document.querySelector('.dp-nav-m2').innerText = mounth2
      document.querySelector('.dp-week-name2').classList.remove('dp-hide')
      document.querySelector('.dp-nav-y2').classList.remove('dp-hide')
      document.querySelector('.dp-prev-y2').classList.remove('dp-hide')
      document.querySelector('.dp-next-y2').classList.remove('dp-hide')
      document.querySelector('.dp-next-m2').removeEventListener('click', clickNextMounthForMounth2)
      document.querySelector('.dp-prev-m2').removeEventListener('click', clickPrevMounthForMounth2)
      document.querySelector('.dp-next-m2').addEventListener('click', clickNextMounth2)
      document.querySelector('.dp-prev-m2').addEventListener('click', clickPrevMounth2)
    }
    function clickMounth() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      document.querySelector('.dp-week-name').classList.add('dp-hide')
      document.querySelector('.dp-nav-y').classList.add('dp-hide')
      document.querySelector('.dp-prev-y').classList.add('dp-hide')
      document.querySelector('.dp-next-y').classList.add('dp-hide')
      document.querySelector('.dp-main').innerHTML = `${drowMounthBtn(mounth)}`
      document.querySelector('.dp-main').classList.add('dp-main--mounth-choice')
      document.querySelectorAll('.dp-main button div').forEach(element => {
        element.addEventListener('click', clickСhooseMounth)
      });
      document.querySelector('.dp-next-m').removeEventListener('click', clickNextMounth)
      document.querySelector('.dp-prev-m').removeEventListener('click', clickPrevMounth)
      document.querySelector('.dp-next-m').addEventListener('click', clickNextMounthForMounth)
      document.querySelector('.dp-prev-m').addEventListener('click', clickPrevMounthForMounth)
    }
    function clickMounth2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhoose2)
      });
      document.querySelector('.dp-week-name2').classList.add('dp-hide')
      document.querySelector('.dp-nav-y2').classList.add('dp-hide')
      document.querySelector('.dp-prev-y2').classList.add('dp-hide')
      document.querySelector('.dp-next-y2').classList.add('dp-hide')
      document.querySelector('.dp-main2').innerHTML = `${drowMounthBtn2(mounth2)}`
      document.querySelector('.dp-main2').classList.add('dp-main--mounth-choice2')
      document.querySelectorAll('.dp-main2 button div').forEach(element => {
        element.addEventListener('click', clickСhooseMounth2)
      });
      document.querySelector('.dp-next-m2').removeEventListener('click', clickNextMounth2)
      document.querySelector('.dp-prev-m2').removeEventListener('click', clickPrevMounth2)
      document.querySelector('.dp-next-m2').addEventListener('click', clickNextMounthForMounth2)
      document.querySelector('.dp-prev-m2').addEventListener('click', clickPrevMounthForMounth2)
    }
    function clickСhooseYear() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhooseYear)
      });
      document.querySelector('.dp-main').classList.remove('dp-main--year-choice')
      document.querySelector('.dp-main').classList.add('dp-main--mounth-choice')
      year = parseFloat(this.innerText.trim())
      document.querySelector('.dp-main').innerHTML = `${drowMounthBtn(mounth)}`
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhooseMounth)
      });
      document.querySelector('.dp-nav-y').innerText = year
      document.querySelector('.dp-nav-m').classList.remove('dp-hide')
      document.querySelector('.dp-nav-y').classList.add('dp-hide')
      document.querySelector('.dp-next-m').removeEventListener('click', clickNextYearForYear)
      document.querySelector('.dp-prev-m').removeEventListener('click', clickPrevYearForYear)
      document.querySelector('.dp-next-m').addEventListener('click', clickNextMounthForMounth)
      document.querySelector('.dp-prev-m').addEventListener('click', clickPrevMounthForMounth)
    }
    function clickYears() {
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.removeEventListener('click', clickСhoose)
      });
      document.querySelector('.dp-week-name').classList.add('dp-hide')
      document.querySelector('.dp-nav-m').classList.add('dp-hide')
      document.querySelector('.dp-prev-y').classList.add('dp-hide')
      document.querySelector('.dp-next-y').classList.add('dp-hide')
      document.querySelector('.dp-main').innerHTML = `${drowYearsBtn(year)}`
      document.querySelector('.dp-main').classList.add('dp-main--year-choice')
      document.querySelectorAll('.dp-main button').forEach(element => {
        element.addEventListener('click', clickСhooseYear)
      });
      document.querySelector('.dp-next-m').removeEventListener('click', clickNextMounth)
      document.querySelector('.dp-prev-m').removeEventListener('click', clickPrevMounth)
      document.querySelector('.dp-next-m').addEventListener('click', clickNextYearForYear)
      document.querySelector('.dp-prev-m').addEventListener('click', clickPrevYearForYear)
    }
    function clickСhooseYear2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhooseYear2)
      });
      document.querySelector('.dp-main2').classList.remove('dp-main--year-choice2')
      document.querySelector('.dp-main2').classList.add('dp-main--mounth-choice2')
      year2 = parseFloat(this.innerText.trim())
      document.querySelector('.dp-main2').innerHTML = `${drowMounthBtn2(mounth2)}`
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.addEventListener('click', clickСhooseMounth2)
      });
      document.querySelector('.dp-nav-y2').innerText = year2
      document.querySelector('.dp-nav-m2').classList.remove('dp-hide')
      document.querySelector('.dp-nav-y2').classList.add('dp-hide')
      document.querySelector('.dp-next-m2').removeEventListener('click', clickNextYearForYear2)
      document.querySelector('.dp-prev-m2').removeEventListener('click', clickPrevYearForYear2)
      document.querySelector('.dp-next-m2').addEventListener('click', clickNextMounthForMounth2)
      document.querySelector('.dp-prev-m2').addEventListener('click', clickPrevMounthForMounth2)
    }
    function clickYears2() {
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.removeEventListener('click', clickСhoose2)
      });
      document.querySelector('.dp-week-name2').classList.add('dp-hide')
      document.querySelector('.dp-nav-m2').classList.add('dp-hide')
      document.querySelector('.dp-prev-y2').classList.add('dp-hide')
      document.querySelector('.dp-next-y2').classList.add('dp-hide')
      document.querySelector('.dp-main2').innerHTML = `${drowYearsBtn2(year2)}`
      document.querySelector('.dp-main2').classList.add('dp-main--year-choice2')
      document.querySelectorAll('.dp-main2 button').forEach(element => {
        element.addEventListener('click', clickСhooseYear2)
      });
      document.querySelector('.dp-next-m2').removeEventListener('click', clickNextMounth2)
      document.querySelector('.dp-prev-m2').removeEventListener('click', clickPrevMounth2)
      document.querySelector('.dp-next-m2').addEventListener('click', clickNextYearForYear2)
      document.querySelector('.dp-prev-m2').addEventListener('click', clickPrevYearForYear2)
    }
    $el.addEventListener('click', function () {
      myDp.classList.add('dp-container-all--active')
    })
    $el2.addEventListener('click', function () {
      myDp.classList.add('dp-container-all--active')
    })
    document.querySelectorAll('.dp-main button').forEach(element => {
      element.addEventListener('click', clickСhoose)
    });
    document.querySelector('.dp-prev-y').addEventListener('click', clickPrevYear)
    document.querySelector('.dp-prev-m').addEventListener('click', clickPrevMounth)
    document.querySelector('.dp-next-y').addEventListener('click', clickNextYear)
    document.querySelector('.dp-next-m').addEventListener('click', clickNextMounth)
    document.querySelector('.dp-nav-m').addEventListener('click', clickMounth)
    document.querySelector('.dp-nav-y').addEventListener('click', clickYears)
    document.querySelectorAll('.dp-main2 button').forEach(element => {
      element.addEventListener('click', clickСhoose2)
    });
    document.querySelector('.dp-prev-y2').addEventListener('click', clickPrevYear2)
    document.querySelector('.dp-prev-m2').addEventListener('click', clickPrevMounth2)
    document.querySelector('.dp-next-y2').addEventListener('click', clickNextYear2)
    document.querySelector('.dp-next-m2').addEventListener('click', clickNextMounth2)
    document.querySelector('.dp-nav-m2').addEventListener('click', clickMounth2)
    document.querySelector('.dp-nav-y2').addEventListener('click', clickYears2)
  
    document.addEventListener('click', function (e) {
      if (!e.target.classList.contains('dp-btn-inner') && !e.target.classList.contains('dp-btn-inner2')) {
        if (!e.target.classList.contains('dp-btn-year') && !e.target.classList.contains('dp-btn-year2')) {
          if (!e.target.classList.contains('dp-btn-mounth') && !e.target.classList.contains('dp-btn-mounth2')) {
            if (myDp.classList.contains('dp-container-all--active')) {
              if (!e.target.closest(`.${$el.parentNode.classList[0]}`)) {
                myDp.classList.remove('dp-container-all--active')
              }
            }
          }
        }
      }
    })


    $el.addEventListener('input', function (e) {
      if (!isNaN(Date.parse(e.target.value.trim()))) {
        document.querySelectorAll('.dp-main button').forEach(element => {
          element.removeEventListener('click', clickСhoose)
        });
        mounth = getNameMounth(new Date(e.target.value.trim()).getMonth() + 1)
        currentMounth = mounth
        year = new Date(e.target.value.trim()).getFullYear()
        currentYear = year
        day = new Date(e.target.value.trim()).getDate()
        document.querySelector('.dp-nav-y').innerText = year
        document.querySelector('.dp-nav-m').innerText = mounth
        document.querySelector('.dp-main').innerHTML = `${drowBtn(mounth, year, day)}`
        document.querySelectorAll('.dp-main button').forEach(element => {
          element.addEventListener('click', clickСhoose)
        });
      }
    })
    $el2.addEventListener('input', function (e) {
      if (!isNaN(Date.parse(e.target.value.trim()))) {
        document.querySelectorAll('.dp-main2 button').forEach(element => {
          element.removeEventListener('click', clickСhoose2)
        });
        mounth2 = getNameMounth(new Date(e.target.value.trim()).getMonth() + 1)
        currentMounth2 = mounth2
        year2 = new Date(e.target.value.trim()).getFullYear()
        currentYear2 = year2
        day2 = new Date(e.target.value.trim()).getDate()
        document.querySelector('.dp-nav-y2').innerText = year2
        document.querySelector('.dp-nav-m2').innerText = mounth2
        document.querySelector('.dp-main2').innerHTML = `${drowBtn2(mounth2, year2, day2)}`
        document.querySelectorAll('.dp-main2 button').forEach(element => {
          element.addEventListener('click', clickСhoose2)
        });
      }
    })
  }
}