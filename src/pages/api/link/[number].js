import { createClient } from "@supabase/supabase-js"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"
const supabaseConnection = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default async function handler(req, res) {
  const number = req.query.number
  if (req.method == "GET") {
    const { data, error } = await supabaseConnection.from("urls").select("mainurl").eq("id",number)
    if (error) {
      res.status(404).json({ error: "Not Found" })
    } else {
        res.redirect(200,data[0]["mainurl"]).end()
    }
  } else {
    res.status(500).json({ error: "Invalid Request" })
  }
}
