const Query = require('../model/queries');

module.exports = {

    //Get all items
    async getAllItems(req, res){
        try {
            const results=await Query.getAllItems(req.params.page);
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

    //Add new customer
    async signUp(req,res){
        try {
            const results=await Query.signUp(req.body.firstName, req.body.lastName, req.body.phone, req.body.email, req.body.password);
            res.status(200).json({
                status: "succes",
              });
        } catch (error) {
            console.log(error);
        }
    },

    async logIn(req,res){
        try {
            const results=await Query.logIn(req.params.email, req.params.password);
            if(results.rows.length>0){
                res.status(200).json({
                    status: "succes",
                    data: {
                        id: results.rows[0].id,
                        firstName: results.rows[0].firstname,
                    }
                });
            }
            else{
                res.status(400).json({
                    status: "fail",
                  });
            }
        } catch (error) {
            console.log(error);
        }
    },

    async checkout(req,res){
        try {
            const results = await Query.checkout(req.body.userId, req.body.status, req.body.totalPrice);
            res.status(200).json({
                status: "succes",
                data: {
                    id: results.rows[0].id,
                },
              });
        } catch (error) {
            console.log(error);
        }
    },

    async orderItem(req,res){
        try {
            await Query.orderItem(req.body.orderId, req.body.itemId, req.body.amount);
            res.status(200).json({
                status: "succes",
            });
        } catch (error) {
            console.log(error);
        }
    },

    async getOrders(req,res){
        try {
            const results=await Query.getOrders(req.params.id);//console.log("res ",results);
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

    async getOrdersList(req,res){
        try {
            const results=await Query.getOrdersList(req.params.id);
            res.status(200).json({
                status: "succes",
                data: {
                    items: results.rows,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
        
};

/*
const express = require('express');
const router = express.Router();
*/