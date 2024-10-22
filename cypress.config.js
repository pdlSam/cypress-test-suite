const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
          email: "ce42ac83-7ff7-4507-97d4-56315ad96d20@mailslurp.net",
          pass: "FetchOTP@555#",
          url : "https://app.quickconnect.biz/login",
          InboxID : "ce42ac83-7ff7-4507-97d4-56315ad96d20",
          MAILSLURP_API_KEY: "a1c1779dd2c4084a36f71db9b8450305d2b68149fe9c81e3859a8052f777870c",
          defaultCommandTimeout: 20000,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


