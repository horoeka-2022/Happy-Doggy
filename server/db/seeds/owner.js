exports.seed = (knex) => {
  return knex('feedback').insert([
    {
      customer_id: 1,
      customer_name: 'Sally McEwan',
      dog_name: 'Robert',
      breed: 'Mixed',
      needs: 'Not good with kids, needs lots of exercise.',
      availibility: '10/12/22',
      description:
        'Robert is a very loving lad and enjoys cuddles. He likes long walks and sunbathing. He is bursting with energy and enjoys a game of frisbee.',
    },
    {
      customer_id: 2,
      customer_name: 'Tim Schmidt',
      dog_name: 'Lilly',
      breed: 'Staffy cross',
      needs: 'History of chasing cats and birds',
      availibility: '15/12/22',
      description:
        'Lilly likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
    },

    {
      customer_id: 3,
      customer_name: 'Kara Stewart',
      dog_name: 'Maisie',
      breed: 'Border collie cross',
      needs:
        'Rescue dog with anxiety, needs low stimulation and keep her away from crowds.',
      availibility: '28/12/22',
      description:
        'Maisie is a gentle soul. She was rescued from the wilderness and has slowly learnt to trust hoomans. She enjoys calming hikes in nature and a lot of space.',
    },
  ])
}
