module.exports = {
  // Use environment variable in production, fallback to local MongoDB for development
  url: process.env.MONGODB_URI || "mongodb://localhost:27017/dd_db",
};
