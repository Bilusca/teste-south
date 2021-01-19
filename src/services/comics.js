import { HASH, PUBLIC_KEY, TIMESTAMP } from "../constants/key";
import request from "./_request";

const comicsService = {
  getComics: (title) =>
    request.send(
      `comics?title=${title}&apikey=${PUBLIC_KEY}&ts=${TIMESTAMP}&hash=${HASH}`,
      "get"
    ),
};

export default comicsService;