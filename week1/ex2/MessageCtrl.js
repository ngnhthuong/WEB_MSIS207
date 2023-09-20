module.exports = {
    sendMessage: function(req,res){
        let Data = req.body || '';
        let resData = {};
        resData.name = Data.name;
        resData.email = Data.email;
        resData.subject = Data.subject;
        resData.message = Data.message;
        let returnData = {};
        returnData.data = resData;
        returnData.result = 'OK';
        res.status(200);
        res.contentType('json');
        res.json(returnData);
    }

    //     sendMessage: function (req, res) {
    //     let Data = req.body || '';
    //     let resData = {};
    //     resData.name = Data.name;
    //     resData.email = Data.email;
    //     resData.subject = Data.subject;
    //     resData.message = Data.message;
    //     let returnData = {};
    //     returnData.data = resData;
    //     returnData.result = 'OK';
    //     res.status(200);
    //     res.contentType('json');
    //     res.json(returnData);
    // },
    // getMessage: function (req, res) {
    //     let Data = req.body || '';
    //     let resData = {};
    //     resData.name = "Chimse";
    //     resData.email = "20522000@gm.uit.edu.vn";
    //     resData.subject = Data.subject;
    //     resData.message = Data.message;
    //     let returnData = {};
    //     returnData.data = resData;
    //     returnData.result = 'OK';
    //     res.status(200);
    //     res.contentType('json');
    //     res.json(returnData);
    // }
};