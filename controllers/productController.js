const model = require("./../models/index");

exports.getAll = async (req, res, next) => {
  try {
    const productList = await model.Product.findAll({});

    res.status(200).json({
      message: "get data successfully!",
      data: productList,
    });
  } catch (error) {
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await model.Product.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      const error = new Error("ไม่พบข้อมูล !");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "get data successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { product_code, product_name, price, qty, category_code } = req.body;

    const product = await model.Product.create({
      product_code: product_code,
      product_name: product_name,
      price: price,
      qty: qty,
      category_code: category_code,
    });

    res.status(201).json({
      message: "create data successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { product_code, product_name, price, qty, category_code } = req.body;

    const checkID = await model.Product.findOne({ id: id });

    if (!checkID) {
      const error = new Error("data not found!");
      error.statusCode = 404;
      throw error;
    }

    const product = await model.Product.update(
      {
        product_code: product_code,
        product_name: product_name,
        price: price,
        qty: qty,
        category_code: category_code,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({
      message: "update data successfully!",
    });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await model.Product.findOne({ id: id });

    if (!product) {
      const error = new Error("data not found!");
      error.statusCode = 404;
      throw error;
    }

    const result = await model.Product.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: "delete data successfully!",
    });
  } catch (error) {
    next(error);
  }
};
