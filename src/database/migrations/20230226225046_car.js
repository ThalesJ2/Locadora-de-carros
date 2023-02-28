export  function up (knex) {
  try{
    return knex.schema.createTable("car",(table)=>{
        table.increments("id").primary();
        table.string("brand",60).notNullable();
        table.string("model",60).notNullable();
        table.dateTime("dateregister").notNullable();
    });
  }catch(error){console.log(error)};

};

export function down(knex) {
  try {
    
    return knex.schema.dropTable("car");
  } catch (error) {
    console.log(error);
  }
    
};
