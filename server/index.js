require('dotenv').config();
const express=require("express")
const app = express();
const cors=require("cors");
const connection=require("./db");
const consumerRegistrationRoutes=require('./Routes/ConsumerRegistrationRoutes')
const consumerLoginRoute=require('./Routes/ConsumerLoginRoutes')
const ConsumerProfileRoute=require('./Routes/ConsumerProfileRoute');
const ConsumerProfileUpdateRoute=require('./Routes/ConsumerProfileRouteUpdate');

const adminRegistrationRoutes=require('./Routes/AdminRegistrationRoute')
const adminLoginRoutes=require('./Routes/AdminLoginRoute')
const adminProfileRoute=require('./Routes/AdminProfileRoute')
const adminProfileUpdateRoute=require('./Routes/AdminProfileUpdateRoute')
const adminConsumerListRoute=require('./Routes/AdminConsumerListRoute')
const adminSellerListRoute=require('./Routes/AdminSellerListRoute')

const sellerRegistrationRoutes=require('./Routes/SellerRegistrationRoute')
const sellerLoginRoutes=require('./Routes/SellerLoginRoute')
const sellerProfileRoute=require('./Routes/SellerProfileRoute')
const sellerProfileUpdateRoute=require('./Routes/SellerProfileUpdateRoute')


connection();


app.use(express.json())
app.use(cors());

app.use("/api/consumer/register",consumerRegistrationRoutes);
app.use("/api/consumer/login",consumerLoginRoute);
app.use("/api/consumer/profile",ConsumerProfileRoute);
app.use("/api/consumer/profile/update",ConsumerProfileUpdateRoute)

app.use("/api/admin/register",adminRegistrationRoutes);
app.use("/api/admin/login",adminLoginRoutes);
app.use("/api/admin/profile",adminProfileRoute);
app.use("/api/admin/profile/update",adminProfileUpdateRoute);
app.use("/api/admin/consumerlist",adminConsumerListRoute)
app.use("/api/admin/sellerlist",adminSellerListRoute)

app.use("/api/seller/register",sellerRegistrationRoutes);
app.use("/api/seller/login",sellerLoginRoutes);
app.use("/api/seller/profile",sellerProfileRoute);
app.use("/api/seller/profile/update",sellerProfileUpdateRoute)

const port=process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listning on port ${port}....`));