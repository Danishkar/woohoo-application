const express = require("express");
const {retreiveOrganization, addOrganization, updateOrganization, editOrganisation, deleteOrganization} = require("../controllers/organizationController")
const router = express.Router();

router.get("/retreiveOrganization",retreiveOrganization)
router.post("/addOrganization",addOrganization)
router.put("/updateOrganization/:id",updateOrganization)
router.put("/editOrganization/:id", editOrganisation)
router.delete("/deleteOrganization/:id",deleteOrganization)


module.exports = router