Meteor.startup(function () {
  if (Meteor.settings.private.mailserver) {
    const mailserver = Meteor.settings.private.mailserver;
    process.env.MAIL_URL=`smtp://${mailserver.username}:${mailserver.password}@${mailserver.smtp}:${mailserver.port}/`;
  }
})
