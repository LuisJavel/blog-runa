export async function GET(){
    return new Response(
        JSON.stringify({msg: "Hellos w"}),{
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}
export async function POST({}){
    return new Response(
        JSON.stringify({msg: "Hellos w"}),{
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}