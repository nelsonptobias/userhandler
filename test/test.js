const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

const { app } = require('../app')

chai.use(chaiHttp)

describe('/get web sites', () => {
  it('verifica se retornou todos websites', (done) => {
    chai.request('http://localhost:8080')
      .get('/v1/websites')
      .end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        res.should.have.status(200)
        res.body.should.have.lengthOf(10)
        done()
      })
  })
})

describe('/get web sites', () => {
  it('verifica se retornou todos usuarios e se o primeiro e o que esperamos', (done) => {
    chai.request('http://localhost:8080')
      .get('/v1/info')
      .end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        res.should.have.status(200)
        res.body.should.have.lengthOf(10)
        res.body[0][0].should.equal('Chelsey Dietrich')
        done()
      })
  })
})

describe('/get suite no nome', () => {
  it('verifica se retornou todos usuarios que tem suite no nome do quarto', (done) => {
    chai.request('http://localhost:8080')
      .get('/v1/suite')
      .end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        res.should.have.status(200)
        res.body.should.have.lengthOf(7)
        res.body[0].id.should.equal(2)
        res.body[1].id.should.equal(3)
        res.body[2].id.should.equal(5)
        res.body[3].id.should.equal(7)
        res.body[4].id.should.equal(8)
        res.body[5].id.should.equal(9)
        res.body[6].id.should.equal(10)
        done()
      })
  })
})
