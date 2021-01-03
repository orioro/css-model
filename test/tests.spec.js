import { cssModel } from '../src'

describe('tests', () => {
	test('test', () => {
		expect(cssModel('parameter')).toEqual('output "parameter"')
	})
})
