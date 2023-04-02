const Record = require('../models/Record');


class RecordController {

  async getRecords(req, res) {
    
    const records = await Record.find({});
    
    res.status(200).send(records);

    // const records = await Record.find({});

    // // res.status(200).send(records);
    
    // records.then(() => {
    //   console.log("All records successfully fetched!");
    //   res.status(200).send(records);
    // }).catch((err) => {
    //   res.status(500).send('Internal server error.');
    //   console.log("Error: ", err)
    // });
    // console.log("Here at contoller: ");
    // res.status(200).send(status);
  }


  async getSingleRecord(req, res) {
    let record = await Record.findOne({ name: req.headers['name'] }).then(() => {
      res.status(200).json({
        "id": record._id,
        "name": record.name,
        "description": record.description
      });
      console.log("One record successfully fetched!");
    }).catch((err) => {
      res.status(500).send('Internal server error.');
      console.log("Error: ", err)
    });
  }


  async deleteRecord(req, res) {
    console.log("Header params: ", req.headers);
    const record = await Record.deleteOne({ name: req.headers['name'] }).then(() => {
      if (record.deletedCount) {
        res.status(200).json({
          "body": {
            "status": 'Status has been deleted successfully',
          },
        });
        console.log("Record successfully deleted!");
      } else if (record.deletedCount == 0) {
        res.status(200).json({
          "body": {
            "status": 'Status could not be deleted successfully',
          },
        });
      }
    }).catch((err) => {
      res.status(500).send('Internal server error.');
      console.log("Error: ", err)
    })
  }

  async createRecord(req, res) {
    let record = new Record({
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    });

    await record.save().then(() => {
      console.log("Record successfully created!");
      res.status(200).send(record);
    }).catch((err) => {
      res.status(500).send('Internal server error.');
      console.log("Error: ", err)
    });
  }

  async updateRecord(req, res) {
    const status = await Status.findOne({ _id: req.body.id });

    status.name = req.body.name;
    status.description = req.body.description;

    await status.save().then(() => {
      console.log("Record successfully updated!");
      res.status(201).send('Update successful');
    }).then((err) => {
      res.status(500).send('Internal server error.');
      console.log("Error: ", err)
    });
  }
}

exports.RecordController = RecordController;