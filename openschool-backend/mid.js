const authMiddleware = require('./middleware/auth');

app.use('/api/protected-route', authMiddleware, (req, res) => {
  // Protected route logic
});
