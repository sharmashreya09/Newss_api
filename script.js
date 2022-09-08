console.log("helloo")
// getting source and api-key 
let source='bbc-news'
let apiKey='a94fb29a9666419390a5ceda0dec2123'


let newsAccordion=document.getElementById('newsAccordion')

// creating an ajax request 
let xhr=new XMLHttpRequest()
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true)


xhr.onload=function()
{
    if(xhr.status==200)
    {
        let json=JSON.parse(this.responseText)
        let articles=json.articles;
        console.log(articles)
        let newsHtml="";
        articles.forEach(function(element,index){
              
            let news=`<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;
          newsHtml+=news

        });

        newsAccordion.innerHTML=newsHtml;
            
    }
    else{
        console.log("error!!!!")
    }
}

// sending out the request 
xhr.send()