console.log('Connected to api js')

$(function(){
  fetch('//josuecedeno-blog.herokuapp.com/GetTopXPosts/3')
  .then(response => response.json())
  .then(function(data){
    console.log(data);
    
    let blogUrl = "//josuecedeno-blog.herokuapp.com/JosuesPosts/SEO/";
    
    let blogId = 0;

    for (let i = 0; i < data.length; i++) {
      blogId = i;

      // Card Title
      let blogAnchor = $(`#blog${blogId} > div.card-body > h5 > a`);
      blogAnchor.text(data[i].title);
      
      // Card Title Link
      let blogLink = `${blogUrl}${data[i].slug}`;
      blogAnchor.attr("href", blogLink);
      
      // Set the image
      $(`#blog${blogId} > a > img`).attr("src", `data:${data[i].contentType};base64,${data[i].imageData}`)
      
      // Card Image Href
      $(`#blog${blogId} > a`).attr("href", blogLink)
      
      // Card Text
      $(`#blog${blogId} > div.card-body > p`).text(data[i].abstract);
      
      // Card Button
      $(`#blog${blogId} > div.card-body > a`).attr("href", blogLink);;
  
      // Create Date
      // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
      // $("#blog0 > div.card-body > span").text(`Created: ${new Date(data[0].created).toLocaleDateString("en-US", options)}`)
      
    }

  })
})