describe('Routes product', () => {
  const defaultProduct = {
    name: 'Default Name',
    description: 'new product',
    price: 100
  }

  describe('GET /products', () => {
    it('shoud return a list of product', done => {

      request
        .get('/products')
        .end((err, res) => {
          expect(res.body[0]).to.eql(defaultProduct)
          done(err)
        })
    })
  })
})
