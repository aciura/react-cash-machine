import { ApiResult } from '../../../common/ApiResults'

// TODO: Move url & port to a config file
const apiPort = 3001

export default class ApiService {
  static async withdrawCash(amount: number): Promise<ApiResult> {
    console.log('ApiService.withdrawCash', amount)

    const url = `http://localhost:${apiPort}/withdraw/${amount}`
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const result: ApiResult = await fetch(url, options).then(res => res.json())
    return result
  }
}
