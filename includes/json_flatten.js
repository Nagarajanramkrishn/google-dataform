
const  keys  = ["name", "country","debut_year", "genre"] ;


function json_flatten(json_col, keys) {
    return keys
        .map(
            key => `JSON_VALUE(${json_col},'$.${key}') as ${key}`
        ).join(", \n")
}


module.exports = { json_flatten, keys }