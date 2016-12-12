import { parseLocation, parseAddress, parseInformalAddress } from '../index'

describe('parseLocation', () => {
    it('shoudl parse a correct location', () => {
        const actual = parseLocation('1005 Gravenstein Hwy N, Sebastopol CA 95272')
        const expected = {
            suffix: 'N',
            number: '1005',
            city: 'Sebastopol',
            street: 'Gravenstein',
            state: 'CA',
            zip: '95272',
            type: 'Hwy'
        }
        expect(actual).toEqual(expected)
    })
})

describe('parseAddress', () => {
    it('shoudl parse a correct address', () => {
        const actual = parseAddress('1005 Gravenstein Hwy N, Sebastopol CA 95272')
        const expected = {
            suffix: 'N',
            number: '1005',
            city: 'Sebastopol',
            street: 'Gravenstein',
            state: 'CA',
            zip: '95272',
            type: 'Hwy'
        }
        expect(actual).toEqual(expected)
    })
})

describe('parseInformalAddress', () => {
    it('shoudl parse a correct informal address', () => {
        const actual = parseInformalAddress('1025 Gravenstein hwy north Sebastopol CA 95272-3092')
        const expected = {
            suffix: 'N',
            number: '1025',
            city: 'Sebastopol',
            street: 'Gravenstein',
            state: 'CA',
            zip: '95272',
            type: 'Hwy'
        }
        expect(actual).toEqual(expected)
    })
})