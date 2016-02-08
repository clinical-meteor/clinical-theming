describe('clinical:csv', function () {
  var server = meteor();
  var client = browser(server);

  it('Should exist on the client', function () {
    return client.execute(function () {
      expect(Theme).to.exist;
    });
  });

  it('Should not exist on the server', function () {
    return server.execute(function () {
      expect(Theme).to.not.exist;
    });
  });

});
