export class Utils {
  static bytesToSize(bytes: number): string {
    if (bytes === 0) {
      return "0 Bytes"
    }
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i]
  }
  /**
   * @description Разделяет число по 3 символа
   * @param number Число
   * @param separator Разделитель
   * @param  dotSymbol Разделитель между целой и дробной частью числа
   * @returns Итоговую строку
   * @example
   * number.separator(100000, "."); // => 100.000
   * number.separator(100000.50, ".", ","); // => 100.000,50
   */
  static separator(number: number, separator: string, dotSymbol: string | undefined = "."): string {
    const splittedNumber = Math.abs(number).toString().split(".")
    splittedNumber[0] = splittedNumber[0]
      .split("")
      .reverse()
      .map((value, index, arr) => (index > 0 && index < arr.length && index % 3 == 0 ? value + separator : value))
      .reverse()
      .join("")
    return (Math.sign(number) < 0 ? "-" : "") + splittedNumber.join(dotSymbol)
  }

  /**
   * Функция для корректного склонения чисел
   *
   * @param inputNumber Число
   * @param titlesArray Строки для склонения
   * @returns корректное название
   * @example
   * // => помидора
   * string.declOfNum(3, ["помидор", "помидора", "помидоров"]);
   */
  static declOfNum(inputNumber: number, titlesArray: [string, string, string]): string {
    return titlesArray[
      inputNumber % 10 === 1 && inputNumber % 100 !== 11
        ? 0
        : inputNumber % 10 >= 2 && inputNumber % 10 <= 4 && (inputNumber % 100 < 10 || inputNumber % 100 >= 20)
        ? 1
        : 2
    ]
  }

  static total(inputArray: number[]) {
    return inputArray.reduce((totalPrice, tempPrice) => totalPrice + tempPrice, 0)
  }

  static splitTo<T>(inputArray: T[], elementsInChunk: number) {
    const outputArray: T[][] = []

    for (let i = 0; i < inputArray.length; i += elementsInChunk) {
      outputArray.push(inputArray.slice(i, i + elementsInChunk))
    }

    return outputArray
  }
}

export const chunkArray = <T>(arr: T[], size: number): T[][] =>
  arr.length > size ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)] : [arr]
