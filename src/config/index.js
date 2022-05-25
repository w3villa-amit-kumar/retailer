const { PORT, DATABASE } = process.env;

module.exports = {
  port: PORT || 8000,
  database: DATABASE,
};
