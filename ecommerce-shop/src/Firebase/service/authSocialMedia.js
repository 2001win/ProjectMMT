import firebase from "../config/firebase";

const authSocialMedia = provider => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
export default authSocialMedia;
