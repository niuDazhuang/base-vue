declare namespace res {
  interface IRes {
    errorCode: string
    errorMessage: string
    success: boolean
    date: number
    obj?: any
  }
  /** 概览页 */
  interface IQuery extends IRes {
    obj: obj.IQuery
  }
}

