exports.seed = (knex) => {
  return knex('walker').insert([
    {
      id: 1,
      description:
        'I have been walking dogs for over 10 years and grew up with dogs. I really like your dog and I think we would get along well!',
      auth0_id: '21',
    },
    {
      id: 2,

      description:
        'I am new to dog walking and I would like to use this platform to explore the idea of adopting a dog myself. I am looking into adopting a dog that is of a similar breed to yours and I would love to have the opportunity to spend time with your fur baby!',
      auth0_id: '12',
    },

    {
      id: 3,

      description:
        'I have 2 years of dog walking experience and I have completed a short course in dog handling. I would like to try working with your dog as I believe I have the skills to support their needs.',
      auth0_id: '32',
    },
  ])
}
