class Datepicker {
  constructor($el, { date = new Date(), inputTwo = false }) {

    function f_addZero(p_num) {
      if (p_num >= 0 && p_num <= 9) {
        return '0' + p_num;
      } else {
        return p_num;
      }
    }


    let choiceDate = new Date(date)
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
    this.myDp = this.parentEl.querySelector('.dp-container')
    let myDp = this.myDp
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
    function clickСhoose() {
      document.querySelectorAll('.dp-main button').forEach(elem => {
        elem.classList.remove('dp-current-day')
      })
      this.classList.add('dp-current-day')
      if (this.classList.contains('dp-btn-last-mounth')) {
        if (getIndexMounth(mounth) === 1) {
          $el.value = `${year}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
          }
        } else {
          $el.value = `${year}-${f_addZero(getIndexMounth(mounth) - 1)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year}-${f_addZero(getIndexMounth(mounth) - 1)}-${f_addZero(parseFloat(this.innerText))}`
          }
          clickPrevMounth()
        }
      } else if (this.classList.contains('dp-btn-next-mounth')) {
        if (getIndexMounth(mounth) + 1 === 13) {
          $el.value = `${year}-${f_addZero(1)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year}-${f_addZero(1)}-${f_addZero(parseFloat(this.innerText))}`
          }
        } else {
          $el.value = `${year}-${f_addZero(getIndexMounth(mounth) + 1)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year}-${f_addZero(getIndexMounth(mounth) + 1)}-${f_addZero(parseFloat(this.innerText))}`
          }
          clickNextMounth()
        }
      } else {
        $el.value = `${year}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(parseFloat(this.innerText))}`
        if (inputTwo) {
          inputTwo.value = `${year}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(parseFloat(this.innerText))}`
        }
      }
      if (document.querySelector('.dp-nav-m').innerText.trim() === 'Декабрь' && new Date($el.value).getMonth() + 1 === 1) {
        $el.value = `${year + 1}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(parseFloat(this.innerText))}`
        if (inputTwo) {
          inputTwo.value = `${year + 1}-${f_addZero(getIndexMounth(mounth))}-${f_addZero(parseFloat(this.innerText))}`
        }
        clickNextMounth()
      } else if (document.querySelector('.dp-nav-m').innerText.trim() === 'Январь' && new Date($el.value).getMonth() + 1 === 12) {
        $el.value = `${year - 1}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        if (inputTwo) {
          inputTwo.value = `${year - 1}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        }
        clickPrevMounth()
      }
      day = parseFloat(this.innerText)
      currentMounth = mounth
      currentYear = year

      myDp.classList.remove('dp-container--active')
    }
    let counterForClickYear = year;
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
    document.querySelector('.dp-nav-m').addEventListener('click', clickMounth)
    document.querySelector('.dp-nav-y').addEventListener('click', clickYears)

    document.addEventListener('click', function (e) {
      if (!e.target.classList.contains('dp-btn-inner')) {
        if (!e.target.classList.contains('dp-btn-year')) {
          if (!e.target.classList.contains('dp-btn-mounth')) {
            if (myDp.classList.contains('dp-container--active')) {
              if (!e.target.closest(`.${$el.parentNode.classList[0]}`)) {
                myDp.classList.remove('dp-container--active')
              }
            }
          }
        }
      }
    })
  }
}