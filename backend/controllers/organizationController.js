const Organization = require("../models/organizationModel");
const mongoose = require("mongoose");

const retreiveOrganization = async(req,res)=>{
    try{
        const organization = await Organization.find();
        res.status(200).json(organization);
    }catch(err){
        res.status(400).json({message:err.message});
        console.log(err);
    }
}

const addOrganization = async(req,res)=>{
    const {organizationName,noOfSlotsDogs,noOfSlotsCats,userEmail} = req.body;
    try{
        const organization = await Organization.create({organizationName, noOfSlotsDogs, noOfSlotsCats, userEmail})
        res.status(200).json(organization);
    }catch(err){
        res.status(400).json({message:err.message});
        console.log(err);
    }
}

const updateOrganization = async(req,res)=>{
    const { organizationName, noOfSlotsDogs, noOfSlotsCats, userEmail } = req.body;
    const id = req.params.id; // assuming the ID is passed as a parameter in the URL

    try {
    const organization = await Organization.findByIdAndUpdate(id, {
        organizationName,
        noOfSlotsDogs,
        noOfSlotsCats,
        userEmail
    }, { new: true });
    
    res.status(200).json(organization);
    } catch(err) {
    res.status(400).json({ message: err.message });
    console.log(err);
    }
}

const editOrganisation = async(req,res) =>{
    const { organizationName, noOfSlotsDogs, noOfSlotsCats, userEmail } = req.body;
    const id = req.params.id; // assuming the ID is passed as a parameter in the URL

    try {
    const organization = await Organization.findByIdAndUpdate(id, {
        organizationName,
        noOfSlotsDogs,
        noOfSlotsCats,
        userEmail
    }, { new: true });
    
    res.status(200).json(organization);
    } catch(err) {
    res.status(400).json({ message: err.message });
    console.log(err);
    }
}
const deleteOrganization = async(req,res)=>{
    const id = req.params.id;
    try{
        const organization = await Organization.findByIdAndDelete(id);
        res.status(200).json(organization);
    }catch(err){
        res.status(400).json({message:err.message});
        console.log(err);
    }
}

module.exports = {retreiveOrganization, addOrganization, updateOrganization, editOrganisation, deleteOrganization}