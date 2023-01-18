export const render = async (template) => {
  const templateFetched = await fetch('../pages/' + template + '/index.html')
  return await templateFetched.text();
};
