import passport from 'passport';
import localStrategy from 'passport-local';
import passportJWT from 'passport-jwt';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';
const JWTStrategy = passportJWT.Strategy;
const LocalStrategy = localStrategy.Strategy;

passport.use(
  'isAuth',
  new JWTStrategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
    },
    async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.user._id);

        if (!user) {
          return done(null, false, {
            message: 'Invalid token',
          });
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

passport.use(
  'isAdmin',
  new JWTStrategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
    },
    async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.user._id);

        if (!user) {
          return done(null, false, {
            message: 'Invalid token',
          });
        }

        if (JSON.parse(!user.isAdmin as any)) {
          return done(null, false, {
            message: 'Invalid token',
          });
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const data = req.body;
        const existingUser = await User.findOne({
          $or: [
            {
              email: data.email,
            },
            { cedula: data.cedula },
          ],
        });

        if (existingUser) {
          console.log('email ya existe');
          if (existingUser.email === data.email) {
            return done(null, false, { message: `Email ${data.email} ya existe` });
          }

          if (existingUser.cedula === data.cedula) {
            console.log('cedula ya existe');
            return done(null, false, { message: `Cedula ${data.idNumber} ya existe` });
          }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ ...data, password: hashedPassword });
        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          console.log('email no existe');
          return done(null, false, { message: `Datos invalidos` });
        }

        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
          console.log('pass not equal');
          return done(null, false, { message: `Datos invalidos` });
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);
