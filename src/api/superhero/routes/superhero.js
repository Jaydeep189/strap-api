'use strict';

/**
 * superhero router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::superhero.superhero');
