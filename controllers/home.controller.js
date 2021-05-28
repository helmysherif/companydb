const departmentModel = require('../models/department.model');
const sectionModel = require('../models/section.model');
module.exports.displayAllDepartments = async(req,res) => {
    try {
        let alldepartments = await departmentModel.find({}).populate('sectionID');
        res.json({alldepartments});
    } catch (error) {
        console.log(error);
        res.json({error});
    }
}
module.exports.displayDepartmentByID = async(req,res) => {
    try {
        let id = req.params.id;
        let department = await departmentModel.findById(id).populate('sectionID');
        res.json({departmentSections : department})
    } catch (error) {
        res.json({error});
    }
}