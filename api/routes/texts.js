module.exports = (app) => {
  const controller = app.controllers.concat;

  app.route('/text/all').get(controller.concat_texts);
};
