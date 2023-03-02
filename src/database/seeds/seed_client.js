export  async function seed(knex) {
  // Deletes ALL existing entries
  await knex("client").del();
  await knex("client").insert([
    {name:"Thales Jorge",cpf:"180.250.111",carID:24,birthday:"2002-05-04 11:00:00"}
  
  ]);
};