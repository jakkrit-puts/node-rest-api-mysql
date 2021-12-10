const model = require("./../models");

exports.getAll = async (req, res, next) => {
  try {
    const categoryList = await model.Category.findAll({});

    res.status(200).json({
      message: "get data successfully!",
      data: categoryList,
    });
  } catch (error) {
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await model.Category.findOne({ id: id });

    if (!category) {
      const error = new Error("data not found!");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "get data successfully!",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {

    const { category_code, category_name } = req.body;

    const existCode = await model.Category.findOne({
      where: { category_code: category_code },
    });

    if (existCode) {
      const error = new Error("Category Code already exists");
      error.statusCode = 400;
      throw error;
    }


    const category = await model.Category.create({
      category_code: category_code,
      category_name: category_name
    })

    res.status(201).json({
      message: "create data  successfully!",
      data: category
    })

  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {

    const id = req.params.id;
    const { category_code, category_name } = req.body;

    const category = await model.Category.update({
      category_code: category_code,
      category_name: category_name
    },{
      where: {
        id: id
      }
    })

    res.status(200).json({
        message: "update data successfully!",
    })


  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {

    const id = req.params.id

    const category = await model.Category.findOne({ id: id });

    if (!category) {
      const error = new Error("data not found!");
      error.statusCode = 404;
      throw error;
    }

    const result = await model.Category.destroy({
      where: {
        id: id
      }
    });

    res.status(200).json({
      message: "delete data successfully!",
  })
  
  } catch (error) {
    next(error);
  }
};
