/*
 * GET jobs listing.
 */
const faker = require('faker');

exports.list = function(req, res) {
  let jobs = [];
  const numJobs = Math.floor(Math.random() * (800 - 200) + 200);

  for (var i = numJobs; i >= 0; i--) {
    const title = faker.name.jobTitle();
    const travel = Math.floor(Math.random() * (100 - 0) + 0);
    jobs.push({
      code: faker.finance.account(),
      url: `/job/${faker.helpers.slugify(title).toLowerCase()}`,
      title: title,
      description: faker.lorem.paragraphs(),
      type: faker.name.jobType(),
      travel: `${travel}%`,
      salary: `$${faker.finance.amount()}`,
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      country: faker.address.country(),
    });
  }
  res.send(jobs);
};
