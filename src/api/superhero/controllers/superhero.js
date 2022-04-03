'use strict';

/**
 *  superhero controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::superhero.superhero');
