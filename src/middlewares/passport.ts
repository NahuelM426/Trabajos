import User from "../models/User";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
    console.log("user-verficador",user)
    if (user) {
      console.log("done",user)
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});
