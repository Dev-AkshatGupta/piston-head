import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Akshat",
    lastName: "Gupta",
    email: "guptaakshat105@gmail.com",
    password: "akshat105",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shwetambara",
    lastName: "Gupta",
    email: "shweta@gmail.com",
    password: "shweta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
