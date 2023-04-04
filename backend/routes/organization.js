const express = require("express");
const {retreiveOrganization, addOrganization, updateOrganization} = require("../controllers/organizationController")
const router = express.Router();

router.get("/retreiveOrganization",retreiveOrganization)
router.post("/addOrganization",addOrganization)
router.put("/updateOrganization/:id",updateOrganization)


module.exports = router