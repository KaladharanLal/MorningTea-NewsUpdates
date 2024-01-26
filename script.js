const apiUrl = 'https://webmosaic.petrichor.events/'

var response = null
var posts = null
var about = null
var postsContents = {}
if(localStorage.newsHeading == undefined)
{
    localStorage.newsHeading = null
    localStorage.newsContent = null
}

async function getData()
{
    response = await fetch(apiUrl+`posts`);
    posts = await response.json();
    response = await fetch(apiUrl+`about`);
    about = await response.json();
    console.log(posts)

    for(var i=0; i<posts.posts.length; i++)
    {
        response = await fetch(apiUrl+`post?id=`+posts.posts[i].id);
        postsContents[posts.posts[i].id] = await response.json();
    }
    console.log(postsContents)

    arrangeData()
}

const arrangeData = () => {
    // Add card headings
    for(var i=0; i<posts.posts.length; i++)
    {
        console.log(posts.posts[i])
        // var div = document.createElement('section')
        // div.classList.add('card')
        // // div.href = "news.html"
        // var div2 = document.createElement('button')
        // div2.classList.add('content')
        // div2.onclick = createNewsContentPage
        // var div3 = document.createElement('h1')
        // div3.innerHTML = posts.posts[i].name
        // div2.appendChild(div3)
        // div.appendChild(div2)
        try
        {
            // document.getElementById('cards').appendChild(div);
            document.getElementById('cards').innerHTML += `
            <section class="card">
                <button class="content" onclick='createNewsContentPage(${posts.posts[i].id})'>
                    <h1>${posts.posts[i].name}</h1>
                </button>
            </section>
            `
        }
        catch(err) {
            console.log(err.message)
        }
        
    }

        // <div class="cards" id="cards">
        //     <section class="card">
        //         <button class="content" onclick='createNewsContentPage()'>
        //             <h1>Unveiling the Shadows of Child Mar</h1>
        //         </button>
        //     </section>
        // </div>

    // Adding About text
    try
    {
        document.getElementById("aboutDesc").innerHTML += about.about
    }
    catch(err) {
        console.log(err.message)
    }
    
}

const createNewsContentPage = (id) =>
{
    console.log("clicked")
    window.location = "news.html"
    try
    {
        localStorage.newsHeading = postsContents[id].name
    }
    catch(err) {
        console.log(err.message)
    }
    try
    {
        localStorage.newsContent = postsContents[id].body
    }
    catch(err) {
        console.log(err.message)
    }
}

const updateNewsContentPage = () =>
{
    console.log(localStorage.newsHeading, localStorage.newsContent)
    document.getElementById("news-heading").innerHTML = localStorage.newsHeading
    document.getElementById("news-content").innerHTML = localStorage.newsContent
}

function convertSinglequote(text)
{
    var strArray = text.prototype.split()
    console.log(strArray)
    return text
}

getData();