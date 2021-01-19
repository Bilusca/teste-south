import { HASH, PUBLIC_KEY, TIMESTAMP } from "../constants/key";
import request from "./_request";

export default {
  getComics: (title) =>
    request.send(
      `comics?title=${title}&apikey=${PUBLIC_KEY}&ts=${TIMESTAMP}&hash=${HASH}`,
      "get"
    ),
};
