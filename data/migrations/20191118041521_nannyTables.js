exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('email', 128).unique().notNullable();
      tbl.string('password', 128).notNullable();
      tbl.boolean('is_admin', 128).notNullable();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('parents', tbl => {
        tbl.increments();
        tbl.string('fname', 128).notNullable();
        tbl.string('lname', 128).notNullable();
        tbl.string('address', 128).notNullable();
        tbl.string('phone', 128).notNullable();
        tbl.timestamp('created_at').defaultTo(knex.fn.now());
        tbl.integer('parent_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
    })
    .createTable('nannies', tbl => {
        tbl.increments();
        tbl.string('fname', 128).notNullable();
        tbl.string('lname', 128).notNullable();
        tbl.string('skill1', 128).notNullable();
        tbl.string('skill2', 128);
        tbl.string('skill3', 128);
        tbl.boolean('can_drive', 128).notNullable();
        tbl.boolean('first_aid', 128).notNullable();
        tbl.string('address', 128).notNullable();
        tbl.string('phone', 128).notNullable();
        tbl.string('img', 128);
        tbl.string('language', 128);
        tbl.timestamp('created_at').defaultTo(knex.fn.now());
        tbl.integer('nanny_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('accounts');
  };