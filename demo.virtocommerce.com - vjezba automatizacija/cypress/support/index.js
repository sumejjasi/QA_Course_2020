// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
import "cypress-localstorage-commands";
import '@testing-library/cypress/add-commands';
import '@shelex/cypress-allure-plugin';
import 'cypress-file-upload';

require('cypress-failed-log');

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
    failureThreshold: 0.03,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.1 },
    capture: 'viewport',
});