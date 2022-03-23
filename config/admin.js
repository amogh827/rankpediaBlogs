module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4851e9cbe743fd7715154c7aed30d7a'),
  },
});
