const model = require("./../models/index");

exports.create = async (req, res, next) => {
  try {
    const { unit_code, unit_name } = req.body;

    const existUnitCode = await model.Unit.findOne({
      where: { unit_code: unit_code },
    });
    if (existUnitCode) {
      const error = new Error("Unitcode already exists");
      error.statusCode = 400;
      throw error;
    }

    const unit = await model.Unit.create({
      unit_code: unit_code,
      unit_name: unit_name,
    });

    res.status(200).json({
      message: "create data successfully!",
      data: unit,
    });

  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {

    const unitList = await model.Unit.findAll({});

    res.status(200).json({
        message: 'get data successfully!',
        data: unitList
    })

  } catch (error) {
    next(error);
  }
};
