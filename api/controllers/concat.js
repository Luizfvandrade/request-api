module.exports = (app) => {
  const service = app.services.concat_texts;

  const controller = {};

  controller.concat_texts = (req, res) => {
    try {
      service.concat_texts();

      res.status(200).send('done');
    } catch (error) {
      console.log(error.message);
    }
  };

  return controller;
};
