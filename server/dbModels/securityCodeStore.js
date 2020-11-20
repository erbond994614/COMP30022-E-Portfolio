const mongoose = require("mongoose");

const SecurityCodeStoreSchema = mongoose.Schema(
  {
    email: { type: String, required: true, index:true},
    scode: { type: String, required: true },
    createdAt: {
      type: Date,
      required: true,
      index: { expires: 600 },
    }
  }
);

const SecurityCodeStore = mongoose.model(
  "Codestore",
  SecurityCodeStoreSchema
);

module.exports = SecurityCodeStore;
