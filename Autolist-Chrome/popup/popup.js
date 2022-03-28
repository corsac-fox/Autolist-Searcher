var form = document.querySelector("form");
var output, link = "";
var flag = false;

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  
  for (const entry of data) {
    output = entry[0] + "=" + entry[1];
	if (entry[1] === "Audi") flag = true;
  };
  buildLink();
  window.open(link);
  event.preventDefault();
}, false);

function buildLink() {
  link = `http://autolist.com/listings#` + output;
  if (flag) link = link.concat(`&year_min=2006&year_max=2012&model=A4&radius=200&zip=10001&transmission[]=automatic&fuel_type[]=gasoline&exterior_color[]=silver`);
  
}


	