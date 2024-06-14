import {sqlFetch} from '../lib/sql.js' //從檔案中導入自訂函式

export var R = {} //宣告一模組R
let _id=0, _title=1, _body=2

window.onhashchange = async function () { //宣告視窗改變時的函式
  var r
  var tokens = window.location.hash.split('/') //用token變數儲存視窗#網址並加上/以分隔
  console.log('tokens=', tokens)
  switch (tokens[0]) {
    case '#show':
      let r = await sqlFetch('blog', `SELECT id, title, body FROM posts WHERE id=${tokens[1]}`)
      R.show(r[0]) // 取得第一筆傳入 (雖然只會有一筆，但 SELECT 預設會傳回很多比，所以用 results[0] 只取第一筆)
      break
    case '#new':
      R.new()
      break
    default:
      let posts = await sqlFetch('blog', `SELECT id, title, body FROM posts`)
      R.list(posts) //將posts傳入list模組
      break
  }
}

window.onload = async function () { //宣告視窗讀取的時候要做的函式
  await sqlFetch('blog', `CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)`)
  window.onhashchange() //等待視窗事件改變
}

R.layout = function (title, content) { //宣告模組R裡的布置附件
  document.querySelector('title').innerText = title //將標題內的文字改成title裡的字串
  document.querySelector('#content').innerHTML = content //將#content內的HTML改成content裡面的內容
}

R.list = function (posts) { //宣告R裡的清單模組 並接收傳入的posts
  let list = [] //宣告一陣列list
  for (let post of posts) { 
    //加入一筆資料進到list陣列中
    list.push(` 
    <li>
      <h2>${post[_title]}</h2>
      <p><a id="show${post[_id]}" href="#show/${post[_id]}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return R.layout('Posts', content) //呼叫並回傳R裡的layout模組 傳入資料為字串 'post' 和 content裡的資料
}

R.new = function () { //宣告R的new函式
  //使用R的layout函式並丟入兩串字串 前者用於將標題改為New Post 後者會將#content內的HTML改成content裡面的內容
  R.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" value="Create"></p>
  </form>
  `)
  document.querySelector('#savePost').onclick = ()=>R.savePost()
}

R.show = function (post) { //宣告R裡的show函式 會接收post
  //呼叫並回傳R裡的layout 傳入 post中第_title筆的資料 和 一串HTML用以改變前端顯示的內容
  return R.layout(post[_title], `
    <h1>${post[_title]}</h1>
    <p>${post[_body]}</p>
  `)
}

R.savePost = async function () { //宣告R裡的savaPost函式
  let title = document.querySelector('#title').value //在html中找到標記為titl的內容 並取得數據
  let body = document.querySelector('#body').value //在html中找到標記為body的內容 並取得數據
  await sqlFetch('blog', `INSERT INTO posts (title, body) VALUES ('${title}', '${body}')`)
  window.location.hash = '#list' //將視窗網址中的#內容改為#list
}
