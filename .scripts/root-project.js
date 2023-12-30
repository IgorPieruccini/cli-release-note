module.exports = () => {
  const rootProjectArray = __dirname.split("/");
  rootProjectArray.pop();
  return rootProjectArray.join("/");
}
