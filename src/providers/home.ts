import { httpProvider } from './http'

let count = 0

export class HomeProvider {
	static async getList(params?: Object): Promise<string[]> {
		if (count >= 5) {
			// return []
		}
		count++
		return httpProvider.get('/content', { params })
	}
}