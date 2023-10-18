const readLine = require("readline")
const fs = require("fs")
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saveData() {
    rl.question("Enter the first name: ", (firstname) =>{
        rl.question("Enter the last name: ", (lastname) =>{
            rl.question("Enter the email: ", (email) =>{
                rl.question("Enter the password: ", (password) =>{
                    let saveJson = {
                        firstName: firstname,
                        lastName: lastname,
                        email: email,
                        password: password
                    }

                    const file = "database.json";

                    fs.writeFile(file, JSON.stringify(saveJson), (err) => {
                        if (err) {
                            console.error("Error saving file:", err);
                        } else {
                            console.log("File saved successfully");
                        }
                    });

                    rl.question("Do you want to continue? (y/n)", (answer) => {
                        if (answer== "y") {
                            saveData()
                        }else {
                            console.log("Error saving")
                            rl.close()
                        }
                    })
                })
            })
        })
    })
}

saveData()