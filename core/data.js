let someHtmlData = '<table><tr>'+
'<td><img class="show_images"'+ 'src="https://mediafiles.cineplex.com/Central/Film/Posters/24971_320_470.jpg"'+ 'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>Finals</h3>'+
'<p>Dec 10, 2018</p><p>10:00AM</p></div></div></td>'+
'<td><img class="show_images"'+ 'src="https://mediafiles.cineplex.com/Central/Film/Posters/26829_320_470.jpg"'+ 'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>Robin'+ 'Hood</h3><p>Nov 10, 2018</p><p>11:00AM</p></div></div></td>'+
'<td><img class="show_images"' +
'src="https://mediafiles.cineplex.com/Central/Film/Posters/29207_320_470.jpg"' + 'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>Creed 2</h3>'+
'<p>Nov 3, 2018</p><p>12:00AM</p></div></div></td>'+
'<td><img class="show_images"' + 'src="https://mediafiles.cineplex.com/Central/Film/Posters/22374_320_470.jpg"'+ 'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>Dr. Seuss'+
'The Grinch</h3><p>Dec 23, 2018</p><p>11:00PM</p></div></div></td>'+
'<td><img class="show_images"'+ 'src="https://mediafiles.cineplex.com/Central/Film/Posters/28046_320_470.jpg"'+ 'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>Halloween'+
'</h3><p>Dec 3, 2018</p><p>10:00PM</p></div></div></td></tr>'+
'<tr><td><img class="show_images"' +
'src="https://mediafiles.cineplex.com/Central/Film/Posters/29168_320_470.jpg"'+ 'alt="Show Image"><div class="overlay"><div class="show_info"><h3>Boy' + 'Erased</h3><p>Dec 1, 2018</p><p>07:00PM</p></div></div></td>'+
'<td><img class="show_images"'+
'src="https://mediafiles.cineplex.com/Central/Film/Posters/29485_320_470.jpg"' + 'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>The Front'+ 'Runner</h3><p>Nov 23, 2018</p><p>12:00PM</p></div></div></td>'+
'<td><img class="show_images"'+ 'src="https://mediafiles.cineplex.com/Central/Film/Posters/27414_320_470.jpg"'+
'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>Widows</h3>'+
'<p>Nov 15, 2018</p><p>11:00AM</p></div></div></td>'+
'<td><img class="show_images"'+ 'src="https://mediafiles.cineplex.com/Central/Film/Posters/28410_320_470.jpg"'+ 'alt="Show Image"/><div class="overlay"><div class="show_info"><h3>Instant'+ 'Family</h3><p>Dec 5, 2018</p><p>04:00PM</p></div></div></td>'+
'<td><img class="show_images"' + 'src="https://mediafiles.cineplex.com/Central/Film/Posters/21676_320_470.jpg"' + 'alt="Show Image"/>'+
'<div class="overlay"><div class="show_info"><h3>Ralph Breaks'+
'The Internet</h3><p>Nov 23, 2018</p><p>12:00PM</p></div></div></td>'+ '</tr></table>';

let someJsonData = [
{movieName: "Ralph Breaks The Internet", showDate: "Nov 23, 2018", showTime: "12:00PM", url:"https://mediafiles.cineplex.com/Central/Film/Posters/21676_320_470.jpg"},
{movieName: "Creed 2", showDate: "Nov 3, 2018", showTime: "12:00AM", url:"https://mediafiles.cineplex.com/Central/Film/Posters/29207_320_470.jpg"},
{movieName: "Robin Hood", showDate: "Nov 10, 2018", showTime: "11:00AM", url:"https://mediafiles.cineplex.com/Central/Film/Posters/26829_320_470.jpg"},
{movieName: "Dr. Seuss' The Grinch", showDate: "Dec 23, 2018", showTime: "11:00PM", url:"https://mediafiles.cineplex.com/Central/Film/Posters/22374_320_470.jpg"},
{movieName: "Halloween", showDate: "Dec 3, 2018", showTime: "10:00PM", url:"https://mediafiles.cineplex.com/Central/Film/Posters/28046_320_470.jpg"},
{movieName: "Boy Erased", showDate: "Dec 1, 2018", showTime: "07:00PM", url: "https://mediafiles.cineplex.com/Central/Film/Posters/29168_320_470.jpg"},
{movieName: "Instant Family", showDate: "Dec 5, 2018", showTime: "04:00PM", url: "https://mediafiles.cineplex.com/Central/Film/Posters/28410_320_470.jpg"},
{movieName: "The Front Runner", showDate: "Nov 23, 2018", showTime: "12:00PM", url:"https://mediafiles.cineplex.com/Central/Film/Posters/29485_320_470.jpg"},
{movieName: "Widows", showDate: "Nov 15, 2018", showTime: "11:00AM", url: "https://mediafiles.cineplex.com/Central/Film/Posters/27414_320_470.jpg"},
{movieName: "Finals", showDate: "Dec 10, 2018", showTime: "10:00AM", url:"https://mediafiles.cineplex.com/Central/Film/Posters/24971_320_470.jpg"},
];

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return someHtmlData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return someJsonData;
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}