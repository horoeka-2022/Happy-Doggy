exports.seed = (knex) => {
  return knex('dogList').insert([
    {
      customer_id: 4,
      customer_name: 'Sally McEwan4',
      dog_name: 'Robert4',
      breed: 'Mixed4',
      needs: '4 Not good with kids, needs lots of exercise.',
      availibility: '11/12/22',
      description:
        '4 Robert is a very loving lad and enjoys cuddles. He likes long walks and sunbathing. He is bursting with energy and enjoys a game of frisbee.',
    },
    {
      customer_id: 5,
      customer_name: 'Tim Schmidt5',
      dog_name: 'Lilly5',
      breed: 'Staffy cross5',
      needs: '5History of chasing cats and birds',
      availibility: '10/12/22',
      description:
        'Lilly likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
    },

    {
      customer_id: 6,
      customer_name: 'Kara Stewart6',
      dog_name: 'Maisie6',
      breed: 'Border collie cross6',
      needs:
        '6Rescue dog with anxiety, needs low stimulation and keep her away from crowds.',
      availibility: '18/12/22',
      description:
        '6Maisie is a gentle soul. She was rescued from the wilderness and has slowly learnt to trust hoomans. She enjoys calming hikes in nature and a lot of space.',
    },
    {
      customer_id: 7,
      customer_name: 'Sally McEwan7',
      dog_name: 'Robert7',
      breed: 'Mixed7',
      needs: '7Not good with kids, needs lots of exercise.',
      availibility: '12/12/22',
      description:
        '7Robert is a very loving lad and enjoys cuddles. He likes long walks and sunbathing. He is bursting with energy and enjoys a game of frisbee.',
    },
    {
      customer_id: 8,
      customer_name: '8Tim Schmidt',
      dog_name: '8Lilly',
      breed: '8Staffy cross',
      needs: '8History of chasing cats and birds',
      availibility: '19/12/22',
      description:
        '9Lilly likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
    },

    {
      customer_id: 9,
      customer_name: 'Kara Stewart9',
      dog_name: 'Maisie9',
      breed: 'Border collie cross9',
      needs:
        '9Rescue dog with anxiety, needs low stimulation and keep her away from crowds.',
      availibility: '18/12/22',
      description:
        '9Maisie is a gentle soul. She was rescued from the wilderness and has slowly learnt to trust hoomans. She enjoys calming hikes in nature and a lot of space.',
    },
    {
      customer_id: 10,
      customer_name: '10Sally McEwan',
      dog_name: '10Robert',
      breed: '10Mixed',
      needs: '10Not good with kids, needs lots of exercise.',
      availibility: '15/12/22',
      description:
        'Robert is a very loving lad and enjoys cuddles. He likes long walks and sunbathing. He is bursting with energy and enjoys a game of frisbee.',
    },
    {
      customer_id: 11,
      customer_name: '11Tim Schmidt',
      dog_name: '11Lilly',
      breed: '11Staffy cross',
      needs: '11History of chasing cats and birds',
      availibility: '19/12/22',
      description:
        '11Lilly likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
    },

    {
      customer_id: 12,
      customer_name: '12Kara Stewart',
      dog_name: '12Maisie',
      breed: '12Border collie cross',
      needs:
        '12Rescue dog with anxiety, needs low stimulation and keep her away from crowds.',
      availibility: '26/12/22',
      description:
        '12Maisie is a gentle soul. She was rescued from the wilderness and has slowly learnt to trust hoomans. She enjoys calming hikes in nature and a lot of space.',
    },
  ])
}
