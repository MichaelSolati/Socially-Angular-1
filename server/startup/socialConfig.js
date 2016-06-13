Meteor.startup(function () {
  if (Meteor.settings.private.social) {
    const social = Meteor.settings.private.social

    social.forEach((network) => {
      ServiceConfiguration.configurations.upsert(
        { service: network.service },
        { $set: network.settings }
      );
    });
  }
});
