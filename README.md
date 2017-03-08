# Update: INSTANEWS
January. 30th, 2017

InstaNews is a simplistic live categorized news feed that fetches its content automatically and presents it in a grid-based layout with redirecting links to the article. InstaNews is an adaptive website with viewpoints for mobile, tablets and desktops.

![screen shot 2017-01-30 at 4 15 01 pm](https://cloud.githubusercontent.com/assets/24995518/22447973/d7be34a6-e70a-11e6-9230-4f762d3c19d2.png)

Week 3 we started to get into API, AJAX and JSON. Using AJAX we sent a requests to online servers to retrieve information that is then processed and encoded using JSON making it easier for us to work with. Taking the information that was given to us, we went through and sorted out what was needed. At this point it was a matter of storing these information and appending it to the site. To me this concept sounds a lot easier said than done.

![screen shot 2017-01-30 at 6 16 37 pm](https://cloud.githubusercontent.com/assets/24995518/22449966/46cb07ae-e718-11e6-83df-314cf8d39c14.png)


#BREAKDOWN

So to break things down a bit more this is how everything is constructed. When the page loads we get a selection menu that offers us a couple options. Each options are captured as a value which get inputted into a dynamic string we create. This string is the url we send to ask for the information. Because of the dynamic link we are able to create which url that corresponds with the news we want.

When the information is retrieved, we are sent a chunk of data which we really only need a couple of things from. one of which are articles with images because we are building a grid based news feed which rely on photos to fill up the grid space, we only need articles which provide us an image url. we can filter out the article which has no images and keep the ones that do. Going through each item in the aray of data we look into the multimedia array and see if there is a length, if not and is equal to 0 we do not add it to our new array that we create which only stores multimedias with an array length. 

Aside from the image, we also need the article url and a little summary of the article, which is labeled as abstract in my case. Similar to filtering the image we do a similar process with each data, identifying and storing the key value pair to be used to construct our html string. This html string is basically a broken down version generated in javascript then asking javascript to append that block of code into the empty div we created.

From here it's all a matter of styling and using Sass to modularize the code, breaking down it down into partials. This partial technique helps organize your blocks of code into its own style sheet but later on gets imported to your main style.scss. This style.scss gets compiled to my style.css.

![screen shot 2017-01-30 at 6 18 04 pm](https://cloud.githubusercontent.com/assets/24995518/22449992/7b83ab36-e718-11e6-8cf8-78f021d9a22d.png)

#Conclusion

At the beginning this concept was the most challenging to grasp, especially if you're struggling with the tools that are used to put this complex concept together. Coming into this project with my javascript skill sitting low was a struggle for me and found myself falling behind for most of the lessons leading up to project work times. Not knowing the syntax or how to construct the code confused me a lot, but what dragged me behind the most was my knowing where to start. Once I've gotten familiar with the concept and how Javascript works, everything started to come together really quickly. Now i got my own personal live new feting site to rely on when in need of some current events !



