module.exports = {
    // chuyển từ dạng mongoose document class => javascript object

    // áp dụng với list object
    multiMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    // với 1 object
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
