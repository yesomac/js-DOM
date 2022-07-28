const showDate = new Date()
const infoMonth = showDate.getMonth()
console.log(infoMonth)

class showCurrentDate {
  static returnMont(infoMonth) {
    switch (infoMonth) {
      case 1:
        return 'January'
      case 2:
        return 'February'
      case 3:
        return 'March'
      case 4:
        return 'May'
      case 5:
        return 'April'
      case 6:
        return 'June'
      case 7:
        return 'July'
      case 8:
        return 'August'
      case 9:
        return 'September'
      case 10:
        return 'October'
      case 11:
        return 'November'
      case 12:
        return 'December'
    }
  }
}

export const spanShowDate = `${showCurrentDate.returnMont(infoMonth)} ${showDate.getDate()}`
console.log(spanShowDate)