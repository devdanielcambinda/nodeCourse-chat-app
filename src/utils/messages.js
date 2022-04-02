module.exports = {
  generateMessage(username,text) {
    return {
      username,
      text,
      createdAt: new Date().getTime(),
    };
  },
  generateLocationMessage(username,url) {
    return {
      username,
      url,
      createdAt: new Date().getTime(),
    };
  },
};