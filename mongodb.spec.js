const {createDriver} = require('./mongodb');

const createSUT = (options={}) => createDriver(options);


describe("Mongo Driver", () => {
  it("should..fail", () => {
    return createDriver().connect().catch(err => expect(err).to.be.exist());
  });

  it("should..open connection", () => {
    return createDriver()
      .connect(url)
      .then(({db, client, close }) => {

    });
  });

  it("should..connect and disconnect properly",() => {
    return createDriver()
    .connect(url)
    .then(({db, client, close }) => {
      return close();
    })
    .then(client => {
      expect(client.isConnected()).to.be.false;
    })
  });

  it("should..open connection with options", () => {
    const options = {};

    return createDriver(options)
    .connect(url)
    .then(({db, client, close }) => {
      expect(db.database()).to.be.equal(dbNames)
    });
  });
})
