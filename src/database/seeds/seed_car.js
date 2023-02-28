export  async function seed(knex) {
  // Deletes ALL existing entries
  await knex('car').del()
  await knex('car').insert([
    {brand:"porsche",model:"v224",dateregister:"2023-02-27 08:54:56"},
  ]);
};
