module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f2ce31ee421387fe7d8dddc8b2be9f67'),
  },
});
