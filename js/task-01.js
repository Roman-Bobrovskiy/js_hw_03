const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let changeUser of Object.keys(user)) {
  console.log(`${changeUser} : ${user[changeUser]}`);
}
//Запись user[changeUser] мне не понятна, я ее угадал методом подбора.
