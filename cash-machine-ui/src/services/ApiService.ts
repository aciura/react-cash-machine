import { ApiResult } from '../../../common/ApiResults'

const apiPort = 3001

export default class ApiService {
  static async withdrawCash(amount: number): Promise<ApiResult> {
    console.log('ApiService.withdrawCash', amount)

    const url = `http://localhost:${apiPort}/withdraw/${amount}`
    const result: ApiResult = await fetch(url).then(res => res.json())
    return result
  }
}
