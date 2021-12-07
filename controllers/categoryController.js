const model = require('./../models')

exports.getAll = async (req, res, next) => {
  try {
   
    const categoryList = await model.Category.findAll({});
    
    res.status(200).json({
        message: 'get data successfully!',
        data: categoryList
    })

  } catch (error) {
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
    try {
    
    const id = req.params.id;
    const category = await model.Category.findOne({ id: id });
    
    if(!category){
      const error = new Error("data not found!");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
        message: 'get data successfully!',
        data: category
    })

    } catch (error) {
      next(error);
    }
};

exports.create = (req, res, next) => {
    try {

    const {  } = req.body;

    } catch (error) {
      next(error);
    }
};

exports.update = (req, res, next) => {
    try {

    } catch (error) {
      next(error);
    }
};

exports.remove = (req, res, next) => {
    try {

    } catch (error) {
      next(error);
    }
};
  
  
  
  