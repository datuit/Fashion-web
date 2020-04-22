// const passportJWT = require('passport-jwt');
// const prisma = require('./prisma');
// // ExtractJwt to help extract the token
// const { ExtractJwt } = passportJWT;
// // JwtStrategy which is the strategy for the authentication
// const JwtStrategy = passportJWT.Strategy;

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.COOKIE_SECRET,
// };

// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
//       console.log('payload received', jwtPayload);
//       const user = await prisma.users.findMany({ id: jwtPayload.id });
//       if (user.length) {
//         done(null, user);
//       } else {
//         done(null, false);
//       }
//     }),
//   );
// };
