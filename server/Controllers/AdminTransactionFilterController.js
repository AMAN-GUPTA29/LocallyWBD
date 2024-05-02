const router = require("express").Router();
const { Transaction } = require("../Models/transaction");

async function AdminTransactionFilterController(req, res) {
    try {
        const { startDate, endDate } = req.params;

        // Convert start and end dates to Date objects
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        // Adjust the end date to include the whole day
        const adjustedEndDate = new Date(endDateObj.getTime() + 86400000); // Adding one day in milliseconds

        // Query all transactions between startDate and endDate
        const data = await Transaction.where({
            time: { $gte: startDateObj, $lte: adjustedEndDate }
        }).populate('customerid').populate('sellerid');

        res.status(200).send({ data: data, message: "Transactions fetched successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
}

module.exports = { AdminTransactionFilterController };
