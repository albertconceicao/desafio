const Issue = require("../models/issues");

module.exports = (app) => {
  app.get("/tabela", (req, res) => {
    Issue.getIssues()
      .then((data) => res.status(200).json(data))
      .catch((erro) => res.status(400).json(erro));
  });

  app.post("/item", (req, res) => {
    const returnForm = req.body;

    Issue.addIssue(returnForm)
      .then((results) => {
        console.log("results", results);
        res.status(201).json({
          id: results.insertId,
          descrição: "Item added successfully",
        });
      })
      .catch((error) => res.status(400).json(error));
  });

  app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Issue.getIssueById(id)
      .then((results) => {
        console.log(results);
        if (!Object.keys(results)) {
          res.status(404).json("Item don´t founded");
        } else {
          res.status(200).json({
            ...results,
            descrição: "Item searched done",
          });
        }
      })
      .catch((error) => {
        res.status(400).json("Invalid id");
        return error.code;
      });
  });


  app.put("/item/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const returnForm = req.body;
    const createdByUser = req.params.createdByUser;

    if(createdByUser) {
        Issue.updateIssueByCreatir(id, returnForm, createdByUser)
        .then((results) => {
          if (!results.affectedRows)
            res.status(404).json("Item not found.");
          else
            res.status(204).json({
              estado: "Item updated successfully",
            });
        })
        .catch((error) => {
          const errors = error.sql ? "Invalid id" : error;
          res.status(405).json(errors);
        });
    } else {

        Issue.updateIssue(id, returnForm)
        .then((results) => {
        if (!results.affectedRows)
            res.status(404).json("Item not found.");
        else
            res.status(204).json({
            estado: "Item updated successfully",
            });
        })
        .catch((error) => {
        const errors = error.sql ? "Invalid id" : error;
        res.status(405).json(errors);
        });
    }

  });

  app.delete("/item/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Issue.deleteIssue(id, accessLevel)
      .then((result) => {
        if (!result?.affectedRows)
          res.status(404).json("Item not founded");
        else res.status(204).json("Item deleted successfully");
      })
      .catch((erro) => {
        if (erro) res.status(400).json("Invalid id");
      });
  });
};