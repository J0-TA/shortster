import { customAlphabet } from "nanoid";

const generateSID = () => {
  const nanoid = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    6,
  );
  return nanoid();
};

export default generateSID;
