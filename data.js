const fs = require("fs");


    const data =  {
        name: "evans",
        email: "evans@gmail.comn",
        password: "murunga"
    }

    fs.writeFile("evans.json", JSON.stringify(data), (err) => {
        if (err) {
            console.error("Error saving file:", err);
        } else {
            console.log("File saved successfully");
        }
    });
