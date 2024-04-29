/**
 * Add morgan
 * Add RFS
 * Add csrf
 * Add multer
 * chat
 * payment gateway
 * transactions
 * rubricks
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
const ConsumerGivenSellerRatingRoute=require("./Routes/ConsumerRatingRoute")
const ConsumerViewBroadcastRoute=require("./Routes/ViewBroadcastConsumerRoute")
const SellerGivenConsumerRatingRoute=require("./Routes/SellerReviewConsumerViewRoute")
const ServiceInfoConsumerRoute=require('./Routes/SellerServiceDataOptedByConsumerRoute')
const pendingRequestDeleteRequestRoute=require('./Routes/PendingServiceDeleteRequestRoute')
const checkConsumerHistoryRoute=require("./Routes/ConsumerHistoryRoute")
const ConsumerChatSendRoute=require("./Routes/ConsumerChatSendRoute")
const ConsumerChatReadRoute=require("./Routes/ConsumerViewChatRoute")


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

connection();



app.use(express.json())
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))

app.use("/api/consumer/register",consumerRegistrationRoutes);
app.use("/api/consumer/login",consumerLoginRoute);
app.use("/api/consumer/profile",ConsumerProfileRoute); //left
app.use("/api/consumer/profile/update",ConsumerProfileUpdateRoute) //left
app.use('/api/customer/service', GetService_SellerDetailsRouter)
app.use("/api/consumer/sellerrating",ConsumerGivenSellerRatingRoute)//left
app.use("/api/consumer/viewbroadcast",ConsumerViewBroadcastRoute)
app.use("/api/consumer/sellerprofileview",SellerProfileConsumerRoute)
app.use("/api/consumer/sellerreview",SellerGivenConsumerRatingRoute)
app.use("/api/consumer/seller/optedservice",ServiceInfoConsumerRoute)
app.use("/api/consumer/pendingrequestdelete",pendingRequestDeleteRequestRoute)
app.use("/api/consumer/history",checkConsumerHistoryRoute)
app.use('/api/customer/completed', CompleteRequestRouter)
app.use('/api/customer/viewServices', ConsumerViewServicesRoute)
app.use('/api/customer/service', GetService_SellerDetailsRouter)
app.use('/api/customer/makerequest', MakeRequestRouter)
app.use('/api/customer/pendingrequests', PendingRequestRouter)
app.use('/api/customer/acceptedrequests', AcceptedRequestRouter)
app.use("/api/consumer/sendmessage",ConsumerChatSendRoute)//left
app.use("/api/consumer/history",checkConsumerHistoryRoute)//left
app.use("/api/consumer/readmessage",ConsumerChatReadRoute)//left

app.use("/api/admin/register",adminRegistrationRoutes);
app.use("/api/admin/login",adminLoginRoutes);
app.use("/api/admin/profile",adminProfileRoute); //left
app.use("/api/admin/profile/update",adminProfileUpdateRoute); //left
app.use("/api/admin/consumerlist",adminConsumerListRoute)
app.use("/api/admin/sellerlist",adminSellerListRoute)
app.use("/api/admin/blockseller",adminBlockSellerRoute)
app.use("/api/admin/blockconsumer",adminBlockConsumerRoute)
app.use("/api/admin/blockedconsumerlist",blockedconsumerlistRoute)
app.use("/api/admin/blockedsellerlist",blockedsellerlistRoute)
app.use("/api/admin/unblockconsumer",unblockconsumerRoute)//left
app.use("/api/admin/unblockseller",unblocksellerRoute)//left
app.use("/api/admin/makebroadcast",makeBroadCastRoute)
app.use("/api/admin/broadcast/view",viewBroadcastAdminRoute)
app.use("/api/admin/totalservice",viewallServicesRoute)
app.use("/api/admin/history",AdminHistoryRoute)//left

app.use("/api/seller/register",sellerRegistrationRoutes);
app.use("/api/seller/login",sellerLoginRoutes);
app.use("/api/seller/profile",sellerProfileRoute);
app.use("/api/seller/profile/update",sellerProfileUpdateRoute)
app.use("/api/seller/viewbroadcast",SellerViewBroadcastRoute)
app.use("/api/seller/review/route",SellerReviewViewRoute)

app.use("/api/seller/history",SellerHistoryRoute)//left

app.use('/api/seller/services', sellerServicesRouter)
app.use('/api/seller/viewrequests',SellerViewCustomerRequestRoute)
app.use('/api/seller/request/accepted',SellerAcceptedRequestRoute)
app.use('/api/seller/request/cancel',SellerDeleteRequestRoute)
app.use('/api/seller/chattile',SellerViewChatTileRoute)//left
app.use('/api/seller/viewchat',SellerViewChatRoute)//left
app.use('/api/seller/sendchat',SellerSendChatRoute)//left




const port=process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listning on port ${port}....`));