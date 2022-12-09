"use strict";
setTimeout(() => {
    console.log("timeOut Started");
    getUser(1, (userData, getRepos) => {
        getRepos(userData.userId);
    });
    console.log("timeOut End");
}, 2000);
function getUser(userId, userDataManager) {
    // getting User
    //..
    //..
    const userData = {
        userId,
        userName: "hydra",
    };
    return userDataManager(userData, getUserRepositories);
}
function userDataManager(userData, getUserRepos) {
    // doing DB work
    //..
    //..
    return getUserRepos(userData.userId);
}
function getUserRepositories(userId) {
    //getting Repos
    //..
    //..
    const repos = ["repo1", "repo2", "repo3"];
    console.log(`for user : ${userId} repos are ${repos}`);
    return repos;
}
