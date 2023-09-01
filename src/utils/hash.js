import bcrypt from "bcrypt";
const saltRounds = 10;
export const hash = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};

export const compare = async (hash, userInputHash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userInputHash, hash, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
