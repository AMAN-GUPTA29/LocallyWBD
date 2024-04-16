/**
 * Add morgan
 * Add RFS
 * Add csrf
 * Add multer
 * Add Global error handler (a,b,c,d) => {retutn xyz}
 */
const bodyparser = require('body-parser')

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
const adminBlockSellerRoute=require('./Routes/AdminSellerBlockRoute')
const adminBlockConsumerRoute=require('./Routes/AdminConsumerBlockRoute')

const sellerRegistrationRoutes=require('./Routes/SellerRegistrationRoute')
const sellerLoginRoutes=require('./Routes/SellerLoginRoute')
const sellerProfileRoute=require('./Routes/SellerProfileRoute')
const sellerProfileUpdateRoute=require('./Routes/SellerProfileUpdateRoute')

const sellerServicesRouter = require('./Routes/SellerServiceRoute')
const GetService_SellerDetailsRouter = require('./Routes/GetService_SellerDetailsRouter')
const MakeRequestRouter = require('./Routes/MakeRequestRouter')
const PendingRequestRouter = require('./Routes/PendingRequestsRoute')
const AcceptedRequestRouter = require('./Routes/AcceptedRequestRoute')
const SellerViewCustomerRequestRoute = require('./Routes/SellerViewCustomerRequestRoute')

connection();



app.use(express.json())
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))

app.use("/api/consumer/register",consumerRegistrationRoutes);
app.use("/api/consumer/login",consumerLoginRoute);
app.use("/api/consumer/profile",ConsumerProfileRoute);
app.use("/api/consumer/profile/update",ConsumerProfileUpdateRoute)
app.use('/api/customer/service', GetService_SellerDetailsRouter)

app.use("/api/admin/register",adminRegistrationRoutes);
app.use("/api/admin/login",adminLoginRoutes);
app.use("/api/admin/profile",adminProfileRoute);
app.use("/api/admin/profile/update",adminProfileUpdateRoute);
app.use("/api/admin/consumerlist",adminConsumerListRoute)
app.use("/api/admin/sellerlist",adminSellerListRoute)
app.use("/api/admin/blockseller",adminBlockSellerRoute)
app.use("/api/admin/blockconsumer",adminBlockConsumerRoute)

app.use("/api/seller/register",sellerRegistrationRoutes);
app.use("/api/seller/login",sellerLoginRoutes);
app.use("/api/seller/profile",sellerProfileRoute);
app.use("/api/seller/profile/update",sellerProfileUpdateRoute)

app.use('/api/seller/services', sellerServicesRouter)
app.use('/api/customer/service', GetService_SellerDetailsRouter)
app.use('/api/customer/makerequest', MakeRequestRouter)
app.use('/api/customer/pendingrequests', PendingRequestRouter)
app.use('/api/customer/acceptedrequests', AcceptedRequestRouter)
app.use('/api/seller/viewrequests',SellerViewCustomerRequestRoute)





const port=process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listning on port ${port}....`));