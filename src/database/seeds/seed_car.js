export  async function seed(knex) {
  // Deletes ALL existing entries
  await knex("car").del()
  await knex("car").insert([
    {brand:"porsche",model:"v224",dateregister:"2023-02-27 08:54:56"},
    {brand:"honda",model:"honda fit",dateregister:"2023-02-28 08:54:56"},
    {brand:"honda",model:"honda pilot",dateregister:"2023-02-28 08:58:56"},
    {brand:"honda",model:"honda nsx",dateregister:"2023-02-28 08:59:56"},
  ]);

};

