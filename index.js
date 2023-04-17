import express from 'express';

const app = express()


const students = ["Ahmed", "Nour", "Moaaz", "Kaian"]

const studentFunction = (request, response) => {
    let output = "<ul>"
    for (let i = 0; i< students.length; i++) {
        output += "<li>" + students[i] + "</li>" + "<br>";
        
    }
    output += "</ul>"
    response.send(output)


 
}
app.get("/students", studentFunction)



app.listen(5000);




