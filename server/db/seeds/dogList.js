exports.seed = async (knex) => {
  await knex('dogList').del()
  return knex('dogList')
    .select()
    .rowNumber('availibility', function () {
      this.partitionBy('availibility')
    })
    .insert([
      {
        id: 4,

        dog_name: 'Robert',
        breed: 'Pug',
        needs: 'Not good with kids, needs lots of exercise.',
        availibility: '11/12/22',
        description:
          'Robert is a very loving lad and enjoys cuddles. He likes long walks and sunbathing. He is bursting with energy and enjoys a game of frisbee.',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Avondale, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://st.depositphotos.com/2869437/3739/i/450/depositphotos_37392643-stock-photo-close-up-of-pug.jpg',
      },
      {
        id: 5,

        dog_name: 'Lilly',
        breed: 'Bulldog',
        needs: 'History of chasing cats and birds',
        availibility: '10/12/22',
        description:
          'Lilly likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Waiheke, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://www.thesprucepets.com/thmb/R03Eb1Y0Lcmwhr-4bpgy_hagZCQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1_American_Bulldog-5b339bcf4cedfd003712e3b5.jpg',
      },

      {
        id: 6,

        dog_name: 'Maisie',
        breed: 'Cocker Spaniel',
        needs:
          'Rescue dog with anxiety, needs low stimulation and keep her away from crowds.',
        availibility: '18/12/22',
        description:
          'Maisie is a gentle soul. She was rescued from the wilderness and has slowly learnt to trust hoomans. She enjoys calming hikes in nature and a lot of space.',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Glen Eden, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://media-be.chewy.com/wp-content/uploads/2021/05/05180433/Cocker-Spaniel_FeaturedImage-1024x615.jpg',
      },
      {
        id: 7,

        dog_name: 'Tango',
        breed: 'Greyhound',
        needs: 'Soft voices, reassurance and rewards(esp food!!)',
        availibility: '12/12/22',
        description:
          'Tango is a little shy but will respond well to commands, and become a velcro dog once they trust you.',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Devonport, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://cdn-fastly.petguide.com/media/2022/02/28/8264126/greyhound.jpg?size=720x845&nocrop=1',
      },
      {
        id: 8,

        dog_name: 'Alfred',
        breed: 'Staffy cross',
        needs: 'Long and active walks',
        availibility: '19/12/22',
        description:
          'Alfred has a large amount of energy but is obediant and good with all ages.',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Pakuranga, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yF3EzvhHOSFVWBom1647xJWsOtmFkj27vg&usqp=CAU',
      },

      {
        id: 9,

        dog_name: 'Tank',
        breed: 'Doberman ',
        needs: 'Constant attention and cuddles',
        availibility: '18/12/22',
        description:
          'Tank loves meeting new people and would love to be your new best friend.',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'CBD, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIJlU3-leKRng6MC0O45wS2GoxwpQQ69VOA&usqp=CAU',
      },
      {
        id: 10,

        dog_name: 'Accorn',
        breed: 'Daschund',
        needs: 'Gentle music to put them to sleep',
        availibility: '15/12/22',
        description:
          'Accorn is a lovable dog who is a little slower pace, likes listening to classical music (Accorn is classy!!)',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Grey Lynn, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIXwY8KsuopM9V5s90xbD3FNwkpEbGb_uRQ&usqp=CAU',
      },
      {
        id: 11,

        dog_name: 'Hero',
        breed: 'Bichon',
        needs: 'A social environment',
        availibility: '19/12/22',
        description:
          'Hero is great with other dogs and begs for food non stop. Do not give in to the puppy eyes!',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Mangere, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXy1kMYtYaI0Y-fENDBotVaJqcrxuZ46f6w&usqp=CAU',
      },

      {
        id: 12,

        dog_name: 'Cheesecake',
        breed: 'Boarder Collie',
        needs:
          'Def needs constant leesh as she likes to wander up to strangers!',
        availibility: '26/12/22',
        description:
          'Cheesecake is another rescue, but not shy and well-adjusted',
        owner_id: 'auth0|638ac80284d437614af49277',
        suburb: 'Howick, Auckland',
        walker_id: 'auth0|638ac80284d437614af49277',
        url: 'https://cf.ltkcdn.net/dogs/dog-breeds/images/std/323839-800x533-border-collie-breed.jpg',
      },
    ])
}
