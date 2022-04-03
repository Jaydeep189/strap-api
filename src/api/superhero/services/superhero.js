'use strict';

/**
 * superhero service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::superhero.superhero');
