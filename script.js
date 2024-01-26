apiUrl = 'https://webmosaic.petrichor.events/'

var data = null

async function getData()
{
    const response = await fetch(apiUrl+`posts`);
    data = await response.json();
    console.log(data)
    arrangeData()
}

const arrangeData = () => {
    // var div = document.body.appendChild(document.createElement('div'))
    // div.classList.add("hi")
    // div.innerHTML = "Hi"
    document.body.innerHTML = data.posts[0].name
}




getData();