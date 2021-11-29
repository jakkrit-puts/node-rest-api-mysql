exports.index = (req, res, next) => {
    res.status(200).json({
        version: "API VERSION 1.0.0",
        message: "node-rest-api-mysql"
    });
}