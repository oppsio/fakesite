/**
 * Generates fake job data
 */

const faker = require('faker');
const _ = require('lodash');

let jobs = [];
const numJobs = Math.floor(Math.random() * (800 - 200) + 200);

const getJobs = () => {
  return jobs;
};

const findJob = (slug) => {
  return _.find(jobs, {
    'slug': slug
  });
};

const generate = () => {
  // Generating random jobs
  for (var i = numJobs; i >= 0; i--) {
    const title = faker.name.jobTitle();
    const slug = faker.helpers.slugify(title).toLowerCase();
    const travel = Math.floor(Math.random() * (100 - 0) + 0);
    jobs.push({
      code: faker.finance.account(),
      slug: slug,
      url: `/job/${slug}`,
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
};

module.exports = {
  generate,
  getJobs,
  findJob
}
