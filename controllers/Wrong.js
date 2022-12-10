module.exports = {
  timeout: (req, res) => {
    setTimeout(() => {
      res.status(408).json({ error: true, msg: 'Stopped by timeout!' });
    }, 5000);
  },
  notfound: (req, res) => {
    res.status(404).json({ error: true, msg: 'Resource not found!' });
  },
  server: (req, res) => {
    res.status(500).json({ error: true, msg: 'Server got down and I don\'t know why...' });
  }
};