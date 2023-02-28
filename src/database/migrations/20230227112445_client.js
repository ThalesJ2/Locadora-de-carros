
export   function up(knex) {

    try {
         return    knex.schema.createTable("client",(table)=>{
            table.increments("id").primary();
            table.string("name",50).notNullable();
            table.string("cpf",13).unique().notNullable();
            table.integer("carID").unsigned().notNullable().
                  references("id").inTable("car").onDelete("CASCADE").index();
            table.dateTime("birthday").notNullable();
            table.timestamp("createdAt").defaultTo(knex.fn.now());
            table.timestamp("updatedAt").defaultTo(knex.fn.now());


        });        
    } catch (error) {console.log(error);}

  
};

export function down(knex) {
  try { return knex.schema.dropTable("client"); }
     catch (error) { console.log(error);}
};
