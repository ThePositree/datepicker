class Datepicker {
  constructor($el2, { date2 = new Date(), inputTwo = false }) {

    let choiceDate2 = new Date(date2)
    let mounth2 = getNameMounth(choiceDate2.getMonth() + 1)
    let year2 = choiceDate2.getFullYear()
    let currentYear2 = year2
    let day2 = choiceDate2.getDate()
    let currentMounth2 = mounth2

    $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(day2)}`
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
    $el2.insertAdjacentHTML('afterend', this.containerDp2)
    this.parentEl2 = $el2.parentNode
    this.myDp2 = this.parentEl2.querySelector('.dp-container2')
    let myDp2 = this.myDp2
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
    function clickСhoose2() {
      document.querySelectorAll('.dp-main2 button').forEach(elem => {
        elem.classList.remove('dp-current-day2')
      })
      this.classList.add('dp-current-day2')
      if (this.classList.contains('dp-btn-last-mounth2')) {
        if (getIndexMounth(mounth2) === 1) {
          $el2.value = `${year2}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year2}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
          }
        } else {
          $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2) - 1)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year2}-${f_addZero(getIndexMounth(mounth2) - 1)}-${f_addZero(parseFloat(this.innerText))}`
          }
          clickPrevMounth2()
        }
      } else if (this.classList.contains('dp-btn-next-mounth2')) {
        if (getIndexMounth(mounth2) + 1 === 13) {
          $el2.value = `${year2}-${f_addZero(1)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year2}-${f_addZero(1)}-${f_addZero(parseFloat(this.innerText))}`
          }
        } else {
          $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2) + 1)}-${f_addZero(parseFloat(this.innerText))}`
          if (inputTwo) {
            inputTwo.value = `${year2}-${f_addZero(getIndexMounth(mounth2) + 1)}-${f_addZero(parseFloat(this.innerText))}`
          }
          clickNextMounth2()
        }
      } else {
        $el2.value = `${year2}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(parseFloat(this.innerText))}`
        if (inputTwo) {
          inputTwo.value = `${year2}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(parseFloat(this.innerText))}`
        }
      }
      if (document.querySelector('.dp-nav-m2').innerText.trim() === 'Декабрь' && new Date($el2.value).getMonth() + 1 === 1) {
        $el2.value = `${year2 + 1}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(parseFloat(this.innerText))}`
        if (inputTwo) {
          inputTwo.value = `${year + 1}-${f_addZero(getIndexMounth(mounth2))}-${f_addZero(parseFloat(this.innerText))}`
        }
        clickNextMounth2()
      } else if (document.querySelector('.dp-nav-m2').innerText.trim() === 'Январь' && new Date($el2.value).getMonth() + 1 === 12) {
        $el2.value = `${year2 - 1}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        if (inputTwo) {
          inputTwo.value = `${year - 1}-${f_addZero(12)}-${f_addZero(parseFloat(this.innerText))}`
        }
        clickPrevMounth2()
      }
      day2 = parseFloat(this.innerText)
      currentMounth2 = mounth2
      currentYear2 = year2

      myDp2.classList.remove('dp-container--active2')
    }
    let counterForClickYear2 = year2;
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


    $el2.addEventListener('click', function () {
      myDp2.classList.add('dp-container--active2')
    })
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
      if (!e.target.classList.contains('dp-btn-inner2')) {
        if (!e.target.classList.contains('dp-btn-year2')) {
          if (!e.target.classList.contains('dp-btn-mounth2')) {
            if (myDp2.classList.contains('dp-container--active2')) {
              if (!e.target.closest(`.${$el2.parentNode.classList[0]}`)) {
                myDp2.classList.remove('dp-container--active2')
              }
            }
          }
        }
      }
    })
  }
}

const asdfadsf = new Datepicker(asdf, {
  date2: '2003-02-20',
})