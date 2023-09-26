const supabaseConnection = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default async function handler(req,res){
    if(req.method == 'GET'){
        
    }else{
        res.status(500).json({error:"Invalid Request"})
    }
}