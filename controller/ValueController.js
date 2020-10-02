export default class ValueController {
  convertToInt(number) {
    number = parseInt(number.toString().replace(new RegExp(',', 'g'), ''))

    return !isNaN(number) ? number : 0
  }

  convertToFloat(number) {
    if (number === undefined) number = 0
    number = parseFloat(number.toString().replace(new RegExp(',', 'g'), ''))

    return !isNaN(number) ? number : 0
  }

  numberFormat(number, digit) {
    return this.convertToFloat(number).toFixed(digit).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  ifUndefined(value, newValue) {
    return value !== undefined ? value : newValue
  }
}