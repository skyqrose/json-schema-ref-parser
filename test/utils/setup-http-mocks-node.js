"use strict";

const nock = require("nock");
const { URL } = require("url");

afterEach(() => {
  nock.cleanAll();
});

module.exports = function (mocks) {
  for (const [url, body] of Object.entries(mocks)) {
    const { origin, pathname, searchParams } = new URL(url);

    const query = {};
    for (const [key, val] of searchParams.entries()) {
      query[key] = val;
    }

    let scope = nock(origin)
      .persist(true);

    if (Object.keys(query).length > 0) {
      scope = scope.get(pathname.replace(/\/$/, "") + "/").query(query);
    }
    else {
      scope = scope.get(pathname);
    }

    scope .reply(200, body);
  }
};
