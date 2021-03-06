const ApiService = require('../../../service/ApiService')
const { OrmWrapper } = require('../../../service/orm/OrmWrapper')

const orm = new OrmWrapper()
const service = new ApiService(null, null, orm)

describe('API Service', () => {
  test('fetchOffers()', async () => {
    const q = {
      address: 'secret19398wwp6yksvthgczcw9upphsx4qnx9hnu69l3',
      type: 'SEND'
    }
    const offers = await service.fetchOffers(q)

    expect(offers.length).toBe(1)
    expect(offers[0].offerId).toBe(1)
    expect(offers[0].status).toBe('REQUEST')
    expect(offers[0].winner).toBe('')
  })

  test('fetchOffers()', async () => {
    const q = {
      address: 'secret19398wwp6yksvthgczcw9upphsx4qnx9hnu69l3',
      type: 'RECEIVE'
    }
    const offers = await service.fetchOffers(q)

    expect(offers.length).toBe(1)
    expect(offers[0].offerId).toBe(2)
    expect(offers[0].status).toBe('REQUEST')
    expect(offers[0].winner).toBe('')
  })
})
