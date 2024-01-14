const APIkey = "bd3cL0dcnF5WzXB9XUwvUCK6gZt32vfLn3x-oe4ZWps"
document.getElementsByTagName("button")[0].onclick = function(){
    const inputValue = document.getElementsByTagName("input")[0].value
    fetch(`https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${APIkey}`,{method:'GET'})
    .then(response => response.json())
    .then(data => {
        const urlJson = data.results;
        document.getElementsByTagName("div")[1].innerHTML = ""
        for (const item of urlJson) {
            const imgurls = item.urls.small
            const create = document.createElement("img")
            create.src = imgurls
            create.width = 500
            create.height = 500
            create.style.padding = "5px 5px"
            document.getElementsByTagName("div")[1].append(create)
        }
    })
    .catch(error => console.error('Error:', error));
}