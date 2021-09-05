export const random = (x: number, y?: number) => (y ? Math.floor(Math.random() * (y - x) + x) : Math.floor(Math.random() * x))
export const randomElements = <T>(array: T[]): T => array[random(array.length - 1)]
