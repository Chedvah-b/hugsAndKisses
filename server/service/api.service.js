const Query = require('../model/queries');

module.exports = {

    //Get all items
    async getAllItems(req, res){
        try {
            const results=await Query.getAllItems();
            res.status(200).json({
                status: "success",
                results: results.rows.length,
                data: {
                  items: results.rows,
                },
              });
               
        } catch (error) {
            console.log(error);
        }
    },

    //Get one item
    async getOneItem(req, res){
        try {
            const results=await Query.getOneItem(req.params.id);
            res.status(200).json({
                status: "succes",
                data: {
                  items: results.rows,
                },
              });
        } catch (error) {
            console.log(error);
        }
    },

        
};

/*
const express = require('express');
const router = express.Router();
*/