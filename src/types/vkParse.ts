export type ParseVKStatus = Readonly<{
  /**
   * Категория методов
   */
  section: string
  /**
   * Время запроса
   */
  performance: number
  /**
   * UPTIME
   */
  uptime: number

  status: string
}>
