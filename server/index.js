require('dotenv').config();
const express=require("express")
const app = express();
const cors=require("cors");
const connection=require("./db");
const consumerRegistrationRoutes=require('./Routes/ConsumerRegistrationRoutes')
const consumerLoginRoute=require('./Routes/ConsumerLoginRoutes')


connection();


app.use(express.json())
app.use(cors());

app.use("/api/consumer/register",consumerRegistrationRoutes);
app.use("/api/consumer/login",consumerLoginRoute);


const port=process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listning on port ${port}....`));