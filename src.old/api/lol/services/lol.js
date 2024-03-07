'use strict';

/**
 * lol service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lol.lol');
