setTimeout(() => {
  console.log("timeOut Started");

  getUser(1, (userData: I_User, getRepos: Function) => {
    getRepos(userData.userId);
  });

  console.log("timeOut End");
}, 2000);

type userId_Type = string | number;

interface I_User {
  userId: userId_Type;
  userName: string;
}
function getUser(userId: userId_Type, userDataManager: Function) {
  // getting User
  //..
  //..
  const userData: I_User = {
    userId,
    userName: "hydra",
  };
  return userDataManager(userData, getUserRepositories);
}
function userDataManager(userData: I_User, getUserRepos: Function) {
  // doing DB work
  //..
  //..
  return getUserRepos(userData.userId);
}
function getUserRepositories(userId: userId_Type) {
  //getting Repos
  //..
  //..
  const repos: string[] = ["repo1", "repo2", "repo3"];
  console.log(`for user : ${userId} repos are ${repos}`);
  return repos;
}
