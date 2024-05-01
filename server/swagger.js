```/** 
 * @swagger
 *   /api/consumer/register:
 *     post:
 *       tags:
 *         - default
 *       summary: consumer_register
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 name: consumer2
 *                 email: consumer2@locally.com
 *                 password: abCD12#$
 *                 phone: '1234567890'
 *                 address: gkp
 *                 pin: 273013
 *       parameters:
 *         - name: name
 *           in: header
 *           schema:
 *             type: string
 *           example: consumer1
 *         - name: email
 *           in: header
 *           schema:
 *             type: string
 *           example: consumer1@locally.com
 *         - name: password
 *           in: header
 *           schema:
 *             type: string
 *           example: abCD12#$
 *         - name: address
 *           in: header
 *           schema:
 *             type: string
 *           example: gkp
 *         - name: pin
 *           in: header
 *           schema:
 *             type: integer
 *           example: '273013'
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/consumer/login:
 *     post:
 *       tags:
 *         - default
 *       summary: consumerlogin
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 email: consumer1@locally.com
 *                 password: abCD12#$
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 * /api/consumer/profile:
 *   get:
 *     tags:
 *       - default
 *     summary: consumerprofile
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         schema:
 *           type: string
 *         example: >-
 *           Bearer
 *           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMjQ5YjEwNjlkYjgwYTYwYTZkM2MiLCJpYXQiOjE3MTI1MTU1MzksImV4cCI6MTcxMjYwMTkzOX0.TOIyc_2QeRH50ZoULHM53kLpCZKNPZmTY16EuQ2cso4
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
/**
 * @swagger
 * /api/consumer/profile/update:
 *   put:
 *     tags:
 *       - default
 *     summary: consumerprofileupdate
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               address: fgdl
 *               pin: '323455'
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         schema:
 *           type: string
 *         example: >-
 *           Bearer
 *           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMjQ5YjEwNjlkYjgwYTYwYTZkM2MiLCJpYXQiOjE3MTI1MTU1MzksImV4cCI6MTcxMjYwMTkzOX0.TOIyc_2QeRH50ZoULHM53kLpCZKNPZmTY16EuQ2cso4
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
/**
 * @swagger
 * /api/consumer/consumer/sellerrating:
 *   post:
 *     tags:
 *       - default
 *     summary: givesellerrating
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               consumername:Aman
*                review:"Best"
*                rating:4
*                sellerid:662e6d264ab7ea3ffcd048c0
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         schema:
 *           type: string
 *         example: >-
 *           Bearer
 *           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMjQ5YjEwNjlkYjgwYTYwYTZkM2MiLCJpYXQiOjE3MTI1MTU1MzksImV4cCI6MTcxMjYwMTkzOX0.TOIyc_2QeRH50ZoULHM53kLpCZKNPZmTY16EuQ2cso4
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */


/**
 * @swagger
 * /api/customer/service/:serviceid:
 *   get:
 *     tags:
 *       - default
 *     summary: seeservicedetails
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         schema:
 *           type: string
 *         example: >-
 *           Bearer
 *           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMjQ5YjEwNjlkYjgwYTYwYTZkM2MiLCJpYXQiOjE3MTI1MTU1MzksImV4cCI6MTcxMjYwMTkzOX0.TOIyc_2QeRH50ZoULHM53kLpCZKNPZmTY16EuQ2cso4
 *     responses:
 *       '200':
 *         description: See service details sent successfully
 *         content:
 *           application/json: {}
 */
/**
 * @swagger
 *   /api/consumer/sellerprofileview:
 *     get:
 *       tags:
 *         - default
 *       summary: consumersellerprofileview
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzNzc5NjMsImV4cCI6MTcxNDQ2NDM2M30.5qVGo7NFdc01ahB3z1_voj-56FYma4OaXDuDkIKJBgo
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/consumer/viewServices:
 *     get:
 *       tags:
 *         - default
 *       summary: consumerviewServices
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzNzc5NjMsImV4cCI6MTcxNDQ2NDM2M30.5qVGo7NFdc01ahB3z1_voj-56FYma4OaXDuDkIKJBgo
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */




/**
 * @swagger
 * /api/consumer/viewbroadcast:
 *   get:
 *     tags:
 *       - default
 *     summary: consumerviewbroadcast
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         schema:
 *           type: string
 *         example: >-
 *           Bearer
 *           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzMjAxOTMsImV4cCI6MTcxNDQwNjU5M30.LQvcmnYydeoxYHJKcE8Sn_TREfvR3fzkXow1Q-iwl6Q
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
/**
 * @swagger
 *   /api/consumer/makerequest:
 *     post:
 *       tags:
 *         - default
 *       summary: consumermakerequest
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 email: consumer2@locally.com
 *                 password: abCD12#$
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5NGNjNmI2ZDE3ZjM1NDBhMzMzZTkiLCJpYXQiOjE3MTMyMDk3MDcsImV4cCI6MTcxMzI5NjEwN30.zTjgUaWD0J824s7Ax1IRPP3ik88ek0aZjaeXmgTr-Ew
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/customer/pendingrequests:
 *     get:
 *       tags:
 *         - default
 *       summary: Consumerpendingrequest
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5NGNjNmI2ZDE3ZjM1NDBhMzMzZTkiLCJpYXQiOjE3MTMyMDk5NDYsImV4cCI6MTcxMzI5NjM0Nn0.VOYjBU4fg3R_6MKZl3y-wRnrhQhl-RJr4qRxAdAXb1c
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/customer/completed:
 *     get:
 *       tags:
 *         - default
 *       summary: Consumercompletedrequest
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5NGNjNmI2ZDE3ZjM1NDBhMzMzZTkiLCJpYXQiOjE3MTMyMDk5NDYsImV4cCI6MTcxMzI5NjM0Nn0.VOYjBU4fg3R_6MKZl3y-wRnrhQhl-RJr4qRxAdAXb1c
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/customer/acceptedrequests:
 *     get:
 *       tags:
 *         - default
 *       summary: Consumeracceptedrequest
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5NGNjNmI2ZDE3ZjM1NDBhMzMzZTkiLCJpYXQiOjE3MTMyMDk5NDYsImV4cCI6MTcxMzI5NjM0Nn0.VOYjBU4fg3R_6MKZl3y-wRnrhQhl-RJr4qRxAdAXb1c
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */



/**
 * @swagger
 *   /api/consumer/seller/optedservice:
 *     post:
 *       tags:
 *         - default
 *       summary: Consumeroptedserviceinfo
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 _id: 662f5424814b6ede81f00a2d
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzNzc5NjMsImV4cCI6MTcxNDQ2NDM2M30.5qVGo7NFdc01ahB3z1_voj-56FYma4OaXDuDkIKJBgo
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/consumer/pendingrequestdelete:
 *     delete:
 *       tags:
 *         - default
 *       summary: deletependingrequestsconsumerside
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 _id:662fd95da1a554ba70d2d313
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzNzc5NjMsImV4cCI6MTcxNDQ2NDM2M30.5qVGo7NFdc01ahB3z1_voj-56FYma4OaXDuDkIKJBgo
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */



/**
 * @swagger
 *   /api/consumer/sellerreview:
 *     post:
 *       tags:
 *         - default
 *       summary: Consumerreviewseller
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 _id: 662e6d264ab7ea3ffcd048c0
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzNzc5NjMsImV4cCI6MTcxNDQ2NDM2M30.5qVGo7NFdc01ahB3z1_voj-56FYma4OaXDuDkIKJBgo
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/customer/history:
 *     get:
 *       tags:
 *         - default
 *       summary: Consumerhistory
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5NGNjNmI2ZDE3ZjM1NDBhMzMzZTkiLCJpYXQiOjE3MTMyMDk5NDYsImV4cCI6MTcxMzI5NjM0Nn0.VOYjBU4fg3R_6MKZl3y-wRnrhQhl-RJr4qRxAdAXb1c
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */


/** 
 * @swagger
 *   /api/seller/register:
 *     post:
 *       tags:
 *         - default
 *       summary: seller_register
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 name: seller57
 *                 email: seller57@locally.com
 *                 password: abCD12#$
 *                 phone: '1234567890'
 *                 address: gkp
 *                 pin: 273013
 *       parameters:
 *         - name: name
 *           in: header
 *           schema:
 *             type: string
 *           example: seller57
 *         - name: email
 *           in: header
 *           schema:
 *             type: string
 *           example: seller57@locally.com
 *         - name: password
 *           in: header
 *           schema:
 *             type: string
 *           example: abCD12#$
 *         - name: address
 *           in: header
 *           schema:
 *             type: string
 *           example: gkp
 *         - name: pin
 *           in: header
 *           schema:
 *             type: integer
 *           example: '273013'
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/seller/login:
 *     post:
 *       tags:
 *         - default
 *       summary: sellerlogin
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 email: seller1@locally.com
 *                 password: abCD12#$
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/seller/profile:
 *     get:
 *       tags:
 *         - default
 *       summary: SellerProfile
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlNmQyNjRhYjdlYTNmZmNkMDQ4YzAiLCJpYXQiOjE3MTQzMTk4MDYsImV4cCI6MTcxNDQwNjIwNn0.tiXanH36U6z-85NDV2KI8QXkxlA7Kkn9VrhnEkL8MYk
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */


/**
 * @swagger
 *   /api/seller/viewservice:
 *     get:
 *       tags:
 *         - default
 *       summary: SellerviewServices
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzNzc5NjMsImV4cCI6MTcxNDQ2NDM2M30.5qVGo7NFdc01ahB3z1_voj-56FYma4OaXDuDkIKJBgo
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */


/**
 * @swagger
 *   /api/seller/addservice:
 *     get:
 *       tags:
 *         - default
 *       summary: Selleraddservice
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlMzRlZDExNTkwZjc2ZjEyZGMwYzUiLCJpYXQiOjE3MTQzNzc5NjMsImV4cCI6MTcxNDQ2NDM2M30.5qVGo7NFdc01ahB3z1_voj-56FYma4OaXDuDkIKJBgo
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */


/**
 * @swagger
 * /api/seller/profile/update:
 *   put:
 *     tags:
 *       - default
 *     summary: sellerprofileedit
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               address: fgdl
 *               pin: '323450'
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         schema:
 *           type: string
 *         example: >-
 *           Bearer
 *           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNjEwNWY0ZDEyMjkzMTc0ZjJiZjkiLCJpYXQiOjE3MTI1MTk5NTIsImV4cCI6MTcxMjYwNjM1Mn0.0L09zdKYi25xRIkG96P6bcE3ERMUTkANSjlxSlg9_bQ
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
/**
 * @swagger
 *   /api/seller/viewbroadcast:
 *     get:
 *       tags:
 *         - default
 *       summary: SellerViewBroadcast
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlNmQyNjRhYjdlYTNmZmNkMDQ4YzAiLCJpYXQiOjE3MTQzMTk4MDYsImV4cCI6MTcxNDQwNjIwNn0.tiXanH36U6z-85NDV2KI8QXkxlA7Kkn9VrhnEkL8MYk
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/seller/review/route:
 *     get:
 *       tags:
 *         - default
 *       summary: SellerReviewRoute
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlNmQyNjRhYjdlYTNmZmNkMDQ4YzAiLCJpYXQiOjE3MTQzMTk4MDYsImV4cCI6MTcxNDQwNjIwNn0.tiXanH36U6z-85NDV2KI8QXkxlA7Kkn9VrhnEkL8MYk
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/seller/history:
 *     get:
 *       tags:
 *         - default
 *       summary: sellerrhistory
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5NGNjNmI2ZDE3ZjM1NDBhMzMzZTkiLCJpYXQiOjE3MTMyMDk5NDYsImV4cCI6MTcxMzI5NjM0Nn0.VOYjBU4fg3R_6MKZl3y-wRnrhQhl-RJr4qRxAdAXb1c
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */

/**
 * @swagger
 *   /api/seller/viewrequests:
 *     get:
 *       tags:
 *         - default
 *       summary: SelllerView CustomerRequest
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFhOTdhODc1N2I3M2ZjYjQyMjViNzYiLCJpYXQiOjE3MTMyODgyMjcsImV4cCI6MTcxMzM3NDYyN30.dJx_hlvCNz_4PSzM1B4Nl-WT6rjs2K8ZzQNydj5DnDs
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/seller/request/accepted/661c0a9f765fe244624f4e49:
 *     get:
 *       tags:
 *         - default
 *       summary: SellerAcceptedrequest
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFhOTdhODc1N2I3M2ZjYjQyMjViNzYiLCJpYXQiOjE3MTMyOTA5OTAsImV4cCI6MTcxMzM3NzM5MH0.83yAPWpDXnJ637xM79QcQqfO9CsA6gmpOJO8tqxJW0k
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/seller/request/cancel/661d848b3096e7764c9323fe:
 *     delete:
 *       tags:
 *         - default
 *       summary: Sellercanceledrequest
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFhOTdhODc1N2I3M2ZjYjQyMjViNzYiLCJpYXQiOjE3MTMyOTIyODQsImV4cCI6MTcxMzM3ODY4NH0.x8Duis0EYfEw3eaQLHBsgmvUht6HNlg00uIT_km0ST4
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/admin/register:
 *     post:
 *       tags:
 *         - default
 *       summary: adminregister
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 name: admin1
 *                 email: admin1@locally.com
 *                 password: abCD12#$
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/admin/login:
 *     post:
 *       tags:
 *         - default
 *       summary: adminlogin
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 email: admin1@locally.com
 *                 password: abCD12#$
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/admin/profile/update:
 *     put:
 *       tags:
 *         - default
 *       summary: Adminprofileupdate
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object


 *               example:
 *                 name: admin11
 *                 email: admin11@locally.com
 *                 password: abCD12#$
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlNmQyNjRhYjdlYTNmZmNkMDQ4YzAiLCJpYXQiOjE3MTQzMTk4MDYsImV4cCI6MTcxNDQwNjIwNn0.tiXanH36U6z-85NDV2KI8QXkxlA7Kkn9VrhnEkL8MYk
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/admin/view/consumer:
 *     get:
 *       tags:
 *         - default
 *       summary: AdminViewConsumer
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlNmQyNjRhYjdlYTNmZmNkMDQ4YzAiLCJpYXQiOjE3MTQzMTk4MDYsImV4cCI6MTcxNDQwNjIwNn0.tiXanH36U6z-85NDV2KI8QXkxlA7Kkn9VrhnEkL8MYk
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
/**
 * @swagger
 *   /api/admin/view/seller:
 *     get:
 *       tags:
 *         - default
 *       summary: AdminViewSeller
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           schema:
 *             type: string
 *           example: >-
 *             Bearer
 *             eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJlNmQyNjRhYjdlYTNmZmNkMDQ4YzAiLCJpYXQiOjE3MTQzMTk4MDYsImV4cCI6MTcxNDQwNjIwNn0.tiXanH36U6z-85NDV2KI8QXkxlA7Kkn9VrhnEkL8MYk
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json: {}
 */
```