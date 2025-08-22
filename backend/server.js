const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/meritlistdb")
.then(()=> console.log("Connected to Database"))
.catch(()=> console.log("Error while connecting to database"));

const studentSchema = new mongoose.Schema(
    {
        applicationId : String,
        studentName: String,
        gender: String,
        dob: String,
        cetScore: Number,
        tenthPercentage: String,
        tenthMathMarks: Number,
        tenthScienceMarks: Number,
        tenthEnglishMarks: Number,
        twelfthPercentage: String,
        homeUniversity: String,
        domicile: String
    }
)

const Student = mongoose.model("Students",studentSchema);

app.get("/meritlist/:rankType", async (req, res) => {
    try {
        const rankType = req.params.rankType;

        let allStudents = await Student.find();

        if(rankType == "state"){
            allStudents = allStudents.filter(student=> student.domicile === "MH");
        }else if(rankType == "homeUniversity"){
            allStudents = allStudents.filter(student=> student.homeUniversity === "Yes");
        }else if (rankType !== "allIndia") {
            return res.status(400).json({ message: "Invalid rank type" });
        }

        allStudents.sort((studentA , studentB)=>{
            if(studentB.cetScore !== studentA.cetScore){
                return studentB.cetScore - studentA.cetScore;
            }

            const dobA = new Date(studentA.dob.split("-").reverse().join("-"));
            const dobB = new Date(studentB.dob.split("-").reverse().join("-"));
            if(dobA.getTime() !== dobB.getTime()){
                return dobA - dobB;
            }

            const tenthPercentageA = parseFloat(studentA.tenthPercentage);
            const tenthPercentageB = parseFloat(studentB.tenthPercentage);
            if(tenthPercentageB !== tenthPercentageA){
                return tenthPercentageB - tenthPercentageA;
            }

            if(studentB.tenthMathMarks !== studentA.tenthMathMarks){
                return studentB.tenthMathMarks - studentA.tenthMathMarks;
            }

              if(studentB.tenthScienceMarks !== studentA.tenthScienceMarks){
                return studentB.tenthScienceMarks - studentA.tenthScienceMarks;
            }

            if(studentB.tenthEnglishMarks !== studentA.tenthEnglishMarks){
                return studentB.tenthEnglishMarks - studentA.tenthEnglishMarks;
            }

            const twelfthPercentA = parseFloat(studentA.twelfthPercentage);
            const twelfthPercentB = parseFloat(studentB.twelfthPercentage);
            return twelfthPercentB - twelfthPercentA;
        });

        res.json(allStudents);

    } catch (err) {
        res.status(500).json({ message: err.message });
    } 
})

app.listen(8000, ()=>{
    console.log("Server is running");
})
