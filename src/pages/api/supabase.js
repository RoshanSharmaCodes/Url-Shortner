import { createClient } from "@supabase/supabase-js";
const {v4: uuidV4} = require("uuid");

const supabaseConnection = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default async function handler(req,res) {
    if(req.method == 'POST'){
        const mainUrl = req.body.mainUrl;
        const id = uuidV4().slice(0,8)
        var shortenUrl = `${req.headers.host}/${id}`
        const {data,error} = await supabaseConnection.from("urls").insert([{id:id,mainurl:mainUrl}]).single()
        if(error){
            res.status(500).json({status:`Failed to Shorten URL ${JSON.stringify(error)}` })
        } else {
            shortenUrl = "https://" + shortenUrl
            res.status(200).json({url:shortenUrl})
        }

    } else {
        res.status(404).json({error: "Invalid Request"})
    }
}