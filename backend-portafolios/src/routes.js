const { Router } = require("express");
const router = Router();
const MensajeSchema = require("./Mensaje")

router.post("/", async (req, res) => {
    const msg = req.body
    try {
        const newMsg = new MensajeSchema(msg)
        newMsg.save();
        res.status(200).json("Message sent succesfully")
    }
    catch {
        res.status(400).json("message not sent")
    }
})
router.get("/", async (req, res) => {
    try{
        const msgs = await MensajeSchema.find()
        if(msgs){
            res.status(200).json(msgs)
            return
        }
        res.status(200).json("no hay mensajes")
    }
    catch{
        res.status(400).json("algo salio mal")
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try{
        const msg = await MensajeSchema.findByIdAndDelete(id)
        if(msg){
            res.status(200).json("mensaje eliminado")
            return
        }
        res.status(200).json("no hay mensajes")
    }
    catch{
        res.status(400).json("algo salio mal")
    }
})

router.get("/download", async (req, res) => {
    try{
        res.download("./src/ULISES_FARFAN_FULL_STACK_DEVELOPER.pdf")
    }
    catch{
        res.status(400).json("algo salio mal")
    }
})

module.exports = router;
