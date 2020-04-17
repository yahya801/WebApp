const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const express = require("express");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");

const User = require("./models/users");
const Event = require("./models/events");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  // Passing resources one by one
  rootPath: "/admin",
  resources: [
    {
      resource: User,
      options: { properties: {
        name: {
            isVisible: { list: true, filter: false, show: true, edit: false },
          },
        email: {
          isVisible: { list: true, filter: true, show: true, edit: true }
        },
        password: {
          isVisible: { list: false, filter: false, show: false, edit: false }
        },
        _id: {
          isVisible: { list: false, filter: false, show: false, edit: false }
        }
      }
    }},
    {
      resource: Event,
      options: {
        name: {
          isVisible: { list: true, filter: true, show: true, edit: true }
        },
        Qualification: {
          isVisible: { list: true, filter: true, show: true, edit: true }
        }
      }
    }
  ]
});

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro);
