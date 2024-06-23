import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"Please provide job title"],
        minLength : [3,"Job title must contains at least 3 characters"],
        maxLength : [50,"Job title can not exceed 50 characters"]
    },
    description : {
        type : String,
        required : [true,"Please provide job title"],
        minLength : [50,"Job description must contains at least 50 characters"],
        maxLength : [350,"Job description can not exceed 350 characters"]
    },
    category : {
        type : String,
        required : [true,"Please provide job category."]
    },
    country : {
        type : String,
        required : [true,"Job contry is required!"]
    },
    city : {
        type : String,
        required : [true,"Job City is required!"]
    },
    location : {
        type : String,
        required : [true,"Please provide exact location!"]
    },
    fixedSalary : {
        type : Number,
        minLength : [4,"Fixed salary must contains at least 4 digits!"],
        maxLength : [9,"Fixed salary cannot excced 9 digits!"]
    },
    salaryFrom : {
        type : Number,
        minLength : [4,"salary from must contains at least 4 digits!"],
        maxLength : [9,"salary form cannot excced 9 digits!"]
    },
    salaryTo: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
    expired : {
        type : Boolean,
        default : false,
    },
    jobPostedOn : {
        type : Date,
        default : Date.now,
    },
    postedBy : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true,
    }
});
export const Job = mongoose.model("Job",jobSchema);