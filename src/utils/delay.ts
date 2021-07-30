/**
 * Искуственная задержка
 * @param ms Время в миллисекундах
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
