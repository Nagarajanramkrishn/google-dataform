
// publish("mytable").query(
//     ctx=>
//     `select * 
//     from ${ctx.ref("src_json_flatten")}`
// )

assert("condition_debut_year").query(
    ctx=>
    `select * 
    from ${ ctx.ref("src_json_flatten")}
    where debut_year  > 2000 `
)