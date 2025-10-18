
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const expect = chai.expect;

chai.use(chaiHttp);

chai.use(chaiHttp);

describe('Users', () => {
  it('should get all users', (done) => {
    chai.request(server)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });
});
