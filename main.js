// 1
let user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;
console.log(user);

//2
var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
function countFruit(fruit) {
  return Object.values(fruit).reduce((a, b) => a + b);
}
console.log(countFruit(fruit));
