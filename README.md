# walkMeTestTask
Small application for video searching on Youtube and showing video that was finded

<h2>Task:</h2>

The task is quite simple, you need to build a small web app with ability to search on YouTube, show the selected results on a (YouTube) player and save it as history into a database.

<h2>UI:</h2>

Here is a mockup: 
<img src="https://github.com/vlasnet/walkMeTestTask/tree/master/public/mock.png" alt="mockup">

<ul>The UI include the following flows:

<li>User search a YouTube's video and get back relevant results for his query.</li>
<li>Each search result contain the following fields: video thumbnail, name and a play button</li>
<li>When click play button, the YouTube player underneath start play the video. Also, a new history record will save into localStorage and will add to the history list on the left.</li>
<li>When click on a video form the history list, it'll play in the player.</li>
<li>When user click delete on each history record, it'll delete from the localStorage and will remove form the history list.</li>
</ul>

<h2>Principles:</h2>

<ul>
<li>You can select any Frameworks you want</li>
<li>For YouTube operations use the following:</li>
  <ul>
    <li>For the search use this <a href="https://developers.google.com/youtube/v3/docs/search">Search API</a></li>
    <li>For the player use this  <a href="https://developers.google.com/youtube/iframe_api_reference">iFrame SDK</a></li>
  </ul>
<li>Please try express yourself as much you can, try to use your daily basis coding so we can see your level and knowledge</li>
</ul>
