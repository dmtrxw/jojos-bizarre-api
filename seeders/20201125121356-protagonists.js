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
          'https://static.jojowiki.com/images/b/bd/latest/20200604060843/Jonathan_Infobox_Manga.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joseph Joestar',
        stand: 'Hermit Purple',
        imageUrl:
          'https://static.jojowiki.com/images/thumb/e/e2/latest/20200423212900/Joseph_Joestar_Infobox_Manga.png/540px-Joseph_Joestar_Infobox_Manga.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kujo Jotaro',
        stand: 'Star Platinum',
        imageUrl:
          'https://static.jojowiki.com/images/6/69/latest/20201120234225/Jotaro_SC_Infobox_Manga.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Higashikata Josuke',
        stand: 'Crazy Diamond',
        imageUrl:
          'https://static.jojowiki.com/images/thumb/a/a1/latest/20191208112759/Josuke_DU_Infobox_Manga.png/540px-Josuke_DU_Infobox_Manga.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Giorno Giovanna',
        stand: 'Gold Experience',
        imageUrl:
          'https://static.jojowiki.com/images/thumb/2/21/latest/20201121021348/Giorno_Giovanna_Infobox_Manga.png/540px-Giorno_Giovanna_Infobox_Manga.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kujo Jolyne',
        stand: 'Stone Free',
        imageUrl:
          'https://static.jojowiki.com/images/2/20/latest/20200923041552/Jolyne_Infobox_Manga.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Johnny Joestar',
        stand: 'Tusk',
        imageUrl:
          'https://static.jojowiki.com/images/b/b7/latest/20200901210726/Johnny_Joestar_Infobox_Manga.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Higashikata Josuke (JoJolion)',
        stand: 'Soft & Wet',
        imageUrl:
          'https://static.jojowiki.com/images/thumb/3/3a/latest/20200305064847/Josuke_JJL_Infobox_Manga.png/540px-Josuke_JJL_Infobox_Manga.png',
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
