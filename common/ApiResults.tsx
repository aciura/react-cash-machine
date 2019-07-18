export type ApiError = {
  name: string
  message: string
}

export type ApiResult = ApiCashWithdrawResult | ApiErrorResult
interface ApiCashWithdrawResult {
  data: Object
}

export interface ApiErrorResult {
  error: ApiError
}
