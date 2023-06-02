
const mongoose = require('mongoose')
const StoresSchema = require('../model/model')

exports.getStores = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const collection = await StoresSchema.find();
        const limitData = collection.slice(0, limit);
        res.json(limitData)
    } catch (err) {
        res.json({ message: err })
    }
}

exports.getListId = async (req, res) => {
    try{
        const listData = await StoresSchema.find();
        const listId = [];
        for( let i = 0; i < listData.length; i++){
            listId.push(listData[i].storeId)
        }
        res.json(listId);
    }catch(err){
        res.json({message: err})
    }
}

exports.createStore = async (req, res) => {
    const storesArr = await StoresSchema.find();
    const exist = storesArr.some((element) => element._id === req.body.storeId);
    if(!exist){
        const Store = new StoresSchema({
            _id: req.body.storeId,
            storeName: req.body.storeName,
            storeDescription: req.body.storeDescription,
            storeAvatar: req.body.storeAvatar,
            storeBanner: req.body.storeBanner,
            purchased: 0,
            storeProductLength: 0,
        })
        try {
            const saveStore = await Store.save().then((result) => {
                res.status(200).json({
                    message: "created a successful store!",
                })
            })
            res.json(saveStore)
        } catch (err) {
            res.json({ message: err })
        }
    }else{
        res.json({ message: 'The store already exists' })
    }
}

exports.getStoreById = async (req, res) => {
    try {
        const store = await StoresSchema.findById(req.params._id)
        res.json(store)
    } catch (err) {
        res.json({ message: err })
    }
}


exports.removeStore = (req, res) => {
    StoresSchema.remove({ _id: req.params._id }, function (err, response) {
        if (err) {
            res.status(200).json({
                code: 200,
                message: "Error from removeStore"
            })
        } else {
            res.status(201).json({
                code: 201,
                message: "Store delete successful!",
                data: response
            })
        }
    })
}

exports.updateStore = async (req, res) => {
    const updateStore = {
        storeName: req.body.storeName,
        storeDescription: req.body.storeDescription,
        storeAvatar: req.body.storeAvatar,
        storeBanner: req.body.storeBanner,
        storeProductLength: req.body.storeProductLength,
    };
    StoresSchema.findByIdAndUpdate(
        { _id: req.params._id },
        updateStore,
        function (err, response) {
            if (err) {
                res.status(200).json({
                    code: 200,
                    message: "Store update failed!",
                });
            } else {
                res.status(201).json({
                    code: 201,
                    message: "Store update successful!",
                    data: response,
                });
            }
        }
    );
}
