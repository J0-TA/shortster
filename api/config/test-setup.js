import mongoose from "mongoose";
import logger from "./winstonlog";

exports.dropAllCollections = Object
  .keys(mongoose.connection.collections)
  .forEach(async (collectionName) => {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      // Sometimes this error happens, but you can safely ignore it
      if (error.message === "ns not found") return;
      // This error occurs when you use it.todo. You can
      // safely ignore this error too
      if (error.message.includes("a background operation is currently running")) return;
      logger.warn(error.message);
    }
  });

exports.closeAllConnections = () => {
  mongoose.connection.close();
};
