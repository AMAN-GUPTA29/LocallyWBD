/**
 * Add morgan
 * Add RFS
 * rubricks
 * Add Global error handler (a,b,c,d) => {retutn xyz}
 * Unit Test - done
 * Git Actions
 */
const bodyparser = require('body-parser')

const Multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

require('dotenv').config();
const express=require("express")
const app = express();
const Razorpay=require('razorpay')
const crypto=require('crypto')
const cors=require("cors");
const connection=require("./db");
const consumerRegistrationRoutes=require('./Routes/ConsumerRegistrationRoutes')
const consumerLoginRoute=require('./Routes/ConsumerLoginRoutes')
const ConsumerProfileRoute=require('./Routes/ConsumerProfileRoute');
const ConsumerProfileUpdateRoute=require('./Routes/ConsumerProfileRouteUpdate');
const ConsumerGivenSellerRatingRoute=require("./Routes/ConsumerRatingRoute")
const ConsumerViewBroadcastRoute=require("./Routes/ViewBroadcastConsumerRoute")
const SellerGivenConsumerRatingRoute=require("./Routes/SellerReviewConsumerViewRoute")
const ServiceInfoConsumerRoute=require('./Routes/SellerServiceDataOptedByConsumerRoute')
const pendingRequestDeleteRequestRoute=require('./Routes/PendingServiceDeleteRequestRoute')
const checkConsumerHistoryRoute=require("./Routes/ConsumerHistoryRoute")
const ConsumerChatSendRoute=require("./Routes/ConsumerChatSendRoute")
const ConsumerChatReadRoute=require("./Routes/ConsumerViewChatRoute")
const MakePaymentConsumer=require("./Routes/ConsumerMakePaymentRoute")
const TransactionHistoryRoute=require("./Routes/TransactionHistoryRoute")

const TransactionAdminRoute=require("./Routes/TransactionAdminRoute")
const TransactionSellerRoute=require("./Routes/TransactionSellerRoute")
const TransactionConsumerRoute=require("./Routes/TransactionConsumerRoute")

const SellerViewBroadcastRoute=require("./Routes/ViewBroadcastSellerRoute")
const SellerProfileConsumerRoute=require("./Routes/SellerProfileFromConsumerRoute")

const adminRegistrationRoutes=require('./Routes/AdminRegistrationRoute')
const adminLoginRoutes=require('./Routes/AdminLoginRoute')
const adminProfileRoute=require('./Routes/AdminProfileRoute')
const adminProfileUpdateRoute=require('./Routes/AdminProfileUpdateRoute')
const adminConsumerListRoute=require('./Routes/AdminConsumerListRoute')
const adminSellerListRoute=require('./Routes/AdminSellerListRoute')
const adminBlockSellerRoute=require('./Routes/AdminSellerBlockRoute')
const adminBlockConsumerRoute=require('./Routes/AdminConsumerBlockRoute')
const makeBroadCastRoute=require('./Routes/MakeBroadcastRoute')
const viewBroadcastAdminRoute=require('./Routes/ViewBroadcastAdminRoute')
const viewallServicesRoute=require('./Routes/AdminTotalServiceRoute')
const AdminHistoryRoute=require('./Routes/AdminHistoryRoutes')


const sellerRegistrationRoutes=require('./Routes/SellerRegistrationRoute')
const sellerLoginRoutes=require('./Routes/SellerLoginRoute')
const sellerProfileRoute=require('./Routes/SellerProfileRoute')
const sellerProfileUpdateRoute=require('./Routes/SellerProfileUpdateRoute')
const blockedconsumerlistRoute=require('./Routes/ConsumerBlockedListRoute')
const blockedsellerlistRoute=require('./Routes/SellerBlockedListRoute')
const unblockconsumerRoute=require('./Routes/UnblockConsumerRoute')
const unblocksellerRoute=require('./Routes/UnblockSellerRoute')
const SellerReviewViewRoute=require('./Routes/SellerReviewViewRoute')
const SellerHistoryRoute=require('./Routes/SellerHistoryRoute')
const SellerViewChatTileRoute=require('./Routes/SellerViewChatTileRoute')
const SellerViewChatRoute=require('./Routes/SellerViewChatRoute')
const SellerSendChatRoute=require('./Routes/SellerSendChatRoute')


const sellerServicesRouter = require('./Routes/SellerServiceRoute')
const GetService_SellerDetailsRouter = require('./Routes/GetService_SellerDetailsRouter')
const MakeRequestRouter = require('./Routes/MakeRequestRouter')
const PendingRequestRouter = require('./Routes/PendingRequestsRoute')
const AcceptedRequestRouter = require('./Routes/AcceptedRequestRoute')
const SellerViewCustomerRequestRoute = require('./Routes/SellerViewCustomerRequestRoute')
const SellerAcceptedRequestRoute = require('./Routes/SellerAcceptedRequestRoute')
const SellerDeleteRequestRoute = require('./Routes/SellerDeleteRequestRoute')
const CompleteRequestRouter = require('./Routes/CompleteRequestRouter')
const ConsumerViewServicesRoute = require('./Routes/ConsumerViewServicesRoute')


cloudinary.config({
    cloud_name: process.env.CLOUDNARY_API_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECREAT,
  });
  
  
  // Configure Multer to use Cloudinary as storage
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'cover', // optional, destination folder in Cloudinary
      allowed_formats: ['jpg', 'jpeg', 'png'], // optional, allowed formats
      // other configuration options
    },
  })
  
  const upload = Multer({
    storage:storage
  });



connection();



app.use(express.json())
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))

app.use("/api/consumer/register",consumerRegistrationRoutes);//left
app.use("/api/consumer/login",consumerLoginRoute);
app.use("/api/consumer/profile",ConsumerProfileRoute); //left
app.use("/api/consumer/profile/update",ConsumerProfileUpdateRoute) //left
app.use('/api/customer/service', GetService_SellerDetailsRouter)
app.use("/api/consumer/sellerrating",ConsumerGivenSellerRatingRoute)
app.use("/api/consumer/viewbroadcast",ConsumerViewBroadcastRoute)
app.use("/api/consumer/sellerprofileview",SellerProfileConsumerRoute)
app.use("/api/consumer/sellerreview",SellerGivenConsumerRatingRoute)
app.use("/api/consumer/seller/optedservice",ServiceInfoConsumerRoute)
app.use("/api/consumer/pendingrequestdelete",pendingRequestDeleteRequestRoute)
app.use("/api/consumer/history",checkConsumerHistoryRoute)
app.use('/api/customer/completed', CompleteRequestRouter)
app.use('/api/customer/viewServices', ConsumerViewServicesRoute)//left
app.use('/api/customer/service', GetService_SellerDetailsRouter)
app.use('/api/customer/makerequest', MakeRequestRouter)
app.use('/api/customer/pendingrequests', PendingRequestRouter)
app.use('/api/customer/acceptedrequests', AcceptedRequestRouter)
app.use("/api/consumer/sendmessage",ConsumerChatSendRoute)
app.use("/api/consumer/history",checkConsumerHistoryRoute)
app.use("/api/consumer/readmessage",ConsumerChatReadRoute)
app.use('/api/consumer/payment',MakePaymentConsumer)
app.use('/api/consumer/transactionsave',TransactionHistoryRoute)
app.use('/api/consumer/transaction',TransactionConsumerRoute)//left

app.use("/api/admin/register",adminRegistrationRoutes);
app.use("/api/admin/login",adminLoginRoutes);
app.use("/api/admin/profile",adminProfileRoute); 
app.use("/api/admin/profile/update",adminProfileUpdateRoute); 
app.use("/api/admin/consumerlist",adminConsumerListRoute)
app.use("/api/admin/sellerlist",adminSellerListRoute)
app.use("/api/admin/blockseller",adminBlockSellerRoute)
app.use("/api/admin/blockconsumer",adminBlockConsumerRoute)
app.use("/api/admin/blockedconsumerlist",blockedconsumerlistRoute)
app.use("/api/admin/blockedsellerlist",blockedsellerlistRoute)
app.use("/api/admin/unblockconsumer",unblockconsumerRoute)
app.use("/api/admin/unblockseller",unblocksellerRoute)
app.use("/api/admin/makebroadcast",makeBroadCastRoute)
app.use("/api/admin/broadcast/view",viewBroadcastAdminRoute)
app.use("/api/admin/totalservice",viewallServicesRoute)
app.use("/api/admin/history",AdminHistoryRoute)
app.use('/api/admin/transaction',TransactionAdminRoute)



app.use('/api/seller/transaction',TransactionSellerRoute)

app.use("/api/seller/register",sellerRegistrationRoutes);
app.use("/api/seller/login",sellerLoginRoutes);
app.use("/api/seller/profile",sellerProfileRoute);
app.use("/api/seller/profile/update",sellerProfileUpdateRoute)
app.use("/api/seller/viewbroadcast",SellerViewBroadcastRoute)
app.use("/api/seller/review/route",SellerReviewViewRoute)

app.use("/api/seller/history",SellerHistoryRoute)

app.use('/api/seller/services', sellerServicesRouter)
app.use('/api/seller/viewrequests',SellerViewCustomerRequestRoute)
app.use('/api/seller/request/accepted',SellerAcceptedRequestRoute)
app.use('/api/seller/request/cancel',SellerDeleteRequestRoute)
app.use('/api/seller/chattile',SellerViewChatTileRoute)
app.use('/api/seller/viewchat',SellerViewChatRoute)
app.use('/api/seller/sendchat',SellerSendChatRoute)

const swaggerJSdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')



const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Nodejs Project",
            version: '1.0.0'
        },
        server: [{
            url: 'http://localhost:8000'
        }]
    },
    apis: ['./swagger.js']
}
const swaggerspec = swaggerJSdoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup( swaggerspec ))




const port=process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listning on port ${port}....`));