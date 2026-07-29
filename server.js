```javascript
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "online",
        service: "Discord Board Marketplace API"
    });
});

app.post("/api/tickets", (req, res) => {

    const {
        name,
        email,
        category,
        message
    } = req.body;

    if (
        !name ||
        !email ||
        !category ||
        !message
    ) {

        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });

    }

    const ticketId =
        "TICKET-" +
        Date.now();

    console.log(
        "New Ticket:",
        ticketId
    );

    res.json({

        success: true,

        ticketId: ticketId,

        message:
        "Ticket created successfully."

    });

});


const PORT =
    process.env.PORT || 3000;


app.listen(
    PORT,
    () => {

        console.log(
            `API running on port ${PORT}`
        );

    }
);
```
