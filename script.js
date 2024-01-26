apiUrl = 'https://webmosaic.petrichor.events/'

var response = null
var posts = null
var about = null

async function getData()
{
    response = await fetch(apiUrl+`posts`);
    posts = await response.json();
    response = await fetch(apiUrl+`about`);
    about = await response.json();
    console.log(posts)
    arrangeData()
}

const arrangeData = () => {
    // Add card headings
    for(var i=0; i<posts.posts.length; i++)
    {
        console.log(posts.posts[i])
        var div = document.createElement('section')
        div.classList.add('card')
        var div2 = document.createElement('h1')
        div2.innerHTML = posts.posts[i].name
        div.appendChild(div2)
        document.getElementById('cards').appendChild(div)
    }

    // <div class="cards">
    //         <section class="card">
    //             <h1>Unveiling the Shadows of Child Mar</h1>
    //         </section>
    //     </div>

    if(about)
    {
        // document.getElementById("aboutDesc").innerHTML += about.about;
    }
    
}




getData();