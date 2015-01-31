var url = 'https://data.nashville.gov/resource/j7nq-7ct5.json';

getJSON(url, function(res){
  var body = document.querySelector('body');
  body.appendChild(createDocFragment(res));
});

function createDocFragment(centers){
  var docFragment = document.createDocumentFragment();

  _.forEach(centers, function(center){
    docFragment.appendChild(createCenterDiv(center));
  });

  return docFragment;
}

function createCenterDiv(center){
  var facilityName = center.facility_name;
  var facilityAddress = center.address + ' ' + center.city + ', ' + center.st + ' ' + center.zip;
  var monHours = center.monday;
  var tuesHours = center.tuesday;
  var wedHours = center.wednesday;
  var thursHours = center.thursday;
  var friHours = center.friday;
  var satHours = center.saturday;
  var sunHours = center.sunday;


  //collect the other divs
  var div = document.createElement('DIV');
  div.setAttribute("class", "facility");

  //facility name
  var div_0 = document.createElement('DIV');
  div_0.setAttribute("class", "facilityName");
  div.appendChild(div_0);
  var text_0 = document.createTextNode(facilityName);
  div_0.appendChild(text_0);

  //facility address
  var div_1 = document.createElement('DIV');
  div_1.setAttribute("class", "facilityAddress");
  div.appendChild(div_1);
  var text_1 = document.createTextNode(facilityAddress);
  div_1.appendChild(text_1);

  //div for week hours
  var div_week = document.createElement('DIV');
  div_week.setAttribute("class", "weekHours");
  div.appendChild(div_week);


  //monday hours
  var div_2 = document.createElement('DIV');
  div_2.setAttribute("class", "monHours");
  div_2.setAttribute("class", "weekDay");
  div_week.appendChild(div_2);
  var text_2_h2 = document.createElement('H2');
  div_2.appendChild(text_2_h2);
  var text_2_day = document.createTextNode("Monday");
  text_2_h2.appendChild(text_2_day);
  var text_2 = document.createTextNode(monHours);
  div_2.appendChild(text_2);


  //tuesday hours
  var div_3 = document.createElement('DIV');
  div_3.setAttribute("class", "tuesHours");
  div_3.setAttribute("class", "weekDay");
  div_week.appendChild(div_3);
  var text_3_h2 = document.createElement('H2');
  div_3.appendChild(text_3_h2);
  var text_3_day = document.createTextNode("Tuesday");
  text_3_h2.appendChild(text_3_day);
  var text_3 = document.createTextNode(tuesHours);
  div_3.appendChild(text_3);

  //wednesday hours
  var div_4 = document.createElement('DIV');
  div_4.setAttribute("class", "wedHours");
  div_4.setAttribute("class", "weekDay");
  div_week.appendChild(div_4);
  var text_4_h2 = document.createElement('H2');
  div_4.appendChild(text_4_h2);
  var text_4_day = document.createTextNode("Wednesday");
  text_4_h2.appendChild(text_4_day);
  var text_4 = document.createTextNode(wedHours);
  div_4.appendChild(text_4);

  //thursday hours
  var div_5 = document.createElement('DIV');
  div_5.setAttribute("class", "thursHours");
  div_5.setAttribute("class", "weekDay");
  div_week.appendChild(div_5);
  var text_5_h2 = document.createElement('H2');
  div_5.appendChild(text_5_h2);
  var text_5_day = document.createTextNode("Thursday");
  text_5_h2.appendChild(text_5_day);
  var text_5 = document.createTextNode(thursHours);
  div_5.appendChild(text_5);

  //friday hours
  var div_6 = document.createElement('DIV');
  div_6.setAttribute("class", "friHours");
  div_6.setAttribute("class", "weekDay");
  div_week.appendChild(div_6);
  var text_6_h2 = document.createElement('H2');
  div_6.appendChild(text_6_h2);
  var text_6_day = document.createTextNode("Friday");
  text_6_h2.appendChild(text_6_day);
  var text_6 = document.createTextNode(friHours);
  div_6.appendChild(text_6);

  //saturday hours
  var div_7 = document.createElement('DIV');
  div_7.setAttribute("class", "satHours");
  div_7.setAttribute("class", "weekDay");
  div_week.appendChild(div_7);
  var text_7_h2 = document.createElement('H2');
  div_7.appendChild(text_7_h2);
  var text_7_day = document.createTextNode("Saturday");
  text_7_h2.appendChild(text_7_day);
  var text_7 = document.createTextNode(satHours);
  div_7.appendChild(text_7);

  //sunday hours
  var div_8 = document.createElement('DIV');
  div_8.setAttribute("class", "sunHours");
  div_8.setAttribute("class", "weekDay");
  div_week.appendChild(div_8);
  var text_8_h2 = document.createElement('H2');
  div_8.appendChild(text_8_h2);
  var text_8_day = document.createTextNode("Sunday");
  text_8_h2.appendChild(text_8_day);
  var text_8 = document.createTextNode(sunHours);
  div_8.appendChild(text_8);

  return div
}

function getJSON(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function(){
    if (this.status >= 200 && this.status < 400){
      cb(JSON.parse(this.responseText));
    }
  };
  xhr.send();
}
