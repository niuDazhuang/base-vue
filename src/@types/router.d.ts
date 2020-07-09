interface IMeta {
}
interface IRoute {
  path: string
  /** 埋点需要 */
  name: string
  component: any
  meta?: IMeta
}
