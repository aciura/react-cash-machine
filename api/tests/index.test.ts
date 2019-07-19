import app from '../src/index'
import * as supertest from 'supertest'

describe('app', () => {
  let request: any

  beforeEach(() => {
    request = supertest(app)
  })

  it('should return a successful response for GET /', done => {
    request.get('/').expect(200, done)
  })

  it('should return a succesful response for POST /withdraw/100', done => {
    request.post('/withdraw/100').expect(200, done)
  })

  it('should return error status 400 for POST /withdraw/181', done => {
    request.post('/withdraw/181').expect(400, done)
  })

  it('should return error status 400 for POST /withdraw/-181', done => {
    request.post('/withdraw/-181').expect(400, done)
  })

  it('should return error status 404 for POST /withdraw', done => {
    request.post('/withdraw').expect(404, done)
  })
})
