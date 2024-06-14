let sqlUrl = "http://localhost:6789/sqlite" //宣告一sqlUrl字串儲存此網址

export async function sqlFetch(db, cmd) {
    let r = await fetch(sqlUrl, {
        body: JSON.stringify({db:db, sql:cmd}), //將js的值轉換成JSON字串
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    if (!r.ok) {
        console.log('sqlFetch:error! cmd=', cmd)
        return null
    }
    let obj = await r.json()
    console.log('obj=', obj)
    return obj
}