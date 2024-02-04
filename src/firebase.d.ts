import firebase from "firebase/app";
import "firebase/auth";

declare module "firebase/app" {
  interface FirebaseApp {
    auth(): firebase.auth.Auth;
  }
}
