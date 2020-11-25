'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Protagonists', [
      {
        name: 'Jonathan Joestar',
        stand: '-',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/d/d6/Jonathan_infobox_%22Manga%22.jpg/revision/latest/scale-to-width-down/700?cb=20181124035515',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joseph Joestar',
        stand: 'Hermit Purple',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/f/f3/Joseph_Infobox-0.jpg/revision/latest/scale-to-width-down/270?cb=20191125174539',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kujo Jotaro',
        stand: 'Star Platinum',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/0/01/JotaroProfile.png/revision/latest/scale-to-width-down/270?cb=20191125014406',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Higashikata Josuke',
        stand: 'Crazy Diamond',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/2/28/JOsuke4_infobox_manga.jpg/revision/latest/scale-to-width-down/270?cb=20200520183708',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Giorno Giovanna',
        stand: 'Gold Experience',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/c/c3/Screen_Shot_2020-01-10_at_9.23.23_am.png/revision/latest/scale-to-width-down/642?cb=20200110092522',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kujo Jolyne',
        stand: 'Stone Free',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/3/3e/Jolyne_infobox_manga.jpg/revision/latest/scale-to-width-down/700?cb=20181124040209',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Johnny Joestar',
        stand: 'Tusk',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/9/96/Johny_Joestar_profile.jpg/revision/latest/scale-to-width-down/699?cb=20191229095703',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Higashikata Josuke',
        stand: 'Soft & Wet',
        imageUrl:
          'https://static.wikia.nocookie.net/jjba/images/d/d2/Jo2uke.png/revision/latest/scale-to-width-down/700?cb=20200105132036',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Protagonists', null, {});
  },
};
