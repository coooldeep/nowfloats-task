let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {

   let responseObj = xhr.response;


   var tableHeader = '<table class=" enuiry-content"><thead class="enquiry-header"><tr><th>Id</th><th>Name</th><th>Email</th><th>City</th></tr></thead><tbody>';
   var out = "";
   var tableBottom = '</tbody</table>';

   for (var i = 0; i < responseObj.length; i++) {
      out += "<tr><td>" + responseObj[i].id + "</td><td>" + responseObj[i].name + "</td><td>" + responseObj[i].email + "</td><td>" + responseObj[i].address.city + "</td></tr>"

   }
   document.getElementById("nav-profile").innerHTML = tableHeader + out + tableBottom;
};


var arr = [{
   "Date": "Today (Sun, 7 Aug)",
   "Morning": [{
         "Time": "10:00 AM",
         "Available": 1
      },
      {
         "Time": "10:30 AM",
         "Available": 8
      },
      {
         "Time": "11:00 AM",
         "Available": 0
      },
      {
         "Time": "11:30 AM",
         "Available": 0
      },
      {
         "Time": "12:00 PM",
         "Available": 0
      },
      {
         "Time": "-",
         "Available": 0
      },
      {
         "Time": "01:00 PM",
         "Available": 23
      },
      {
         "Time": "01:30 PM",
         "Available": 0
      },
      {
         "Time": "02:00 PM",
         "Available": 0
      }
   ],
   "Evening": [{
         "Time": "2:30 PM",
         "Available": 7
      },
      {
         "Time": "-",
         "Available": 0
      },
      {
         "Time": "-",
         "Available": 0
      },
      {
         "Time": "4:00 PM",
         "Available": 0
      },
      {
         "Time": "4:30 PM",
         "Available": 2
      },
      {
         "Time": "05:00 PM",
         "Available": 13
      },
      {
         "Time": "05:30 PM",
         "Available": 0
      },
      {
         "Time": "06:00 PM",
         "Available": 13
      },
      {
         "Time": "06:30 PM",
         "Available": 13
      }
   ],
   "Night": [{
         "Time": "07:00 PM",
         "Available": 0
      },
      {
         "Time": "07:30 PM",
         "Available": 0
      },
      {
         "Time": "-",
         "Available": 0
      },
      {
         "Time": "08:30 PM",
         "Available": 16
      },
      {
         "Time": "09:00 PM",
         "Available": 22
      },
      {
         "Time": "09:30 PM",
         "Available": 13
      },
      {
         "Time": "10:00 PM",
         "Available": 13
      },
      {
         "Time": "-",
         "Available": 0
      },
      {
         "Time": "-",
         "Available": 0
      }
   ]
}];


function contentMore() {
   var points = document.getElementById("points");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("myLink");

   if (points.style.display === "none") {
      points.style.display = "inline";
      btnText.innerHTML = "See More";
      moreText.style.display = "none";
   } else {
      points.style.display = "none";
      btnText.innerHTML = "See less";
      moreText.style.display = "inline";
   }
}

function displayDate(arr) {
   var out = "";
   var i;
   for (i = 0; i < arr.length; i++) {
      out += '<p>' + arr[i].Date + '</p>';
   }
   document.getElementById("date").innerHTML = out;
}
displayDate(arr);

function bookingSlot(arr) {
   var out = "";
   var out1 = "";
   var out2 = "";
   var i, j;
   for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].Morning.length; j++) {
         if (arr[i].Morning[j].Available == 0) {
            out += '<p "> <del>' + arr[i].Morning[j].Time + '</del></p>';
         } else {
            out += '<p class="slotHover " data-toggle="tooltip" title="Slot is Available" onclick="clickme(' + arr[i].Morning[j].Available + ')">' + arr[i].Morning[j].Time + '</p>';
         }
      }
   }
   for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].Evening.length; j++) {
         if (arr[i].Evening[j].Available == 0) {
            out1 += '<p "> <del>' + arr[i].Evening[j].Time + '</del></p>';
         } else {
            out1 += '<p class="slotHover " data-toggle="tooltip" title="Slot is Available" onclick="clickme(' + arr[i].Evening[j].Available + ')">' + arr[i].Evening[j].Time + '</p>';
         }
      }
   }
   for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].Night.length; j++) {
         if (arr[i].Night[j].Available == 0) {
            out2 += '<p "> <del>' + arr[i].Night[j].Time + '</del></p>';
         } else {
            out2 += '<p class="slotHover " data-toggle="tooltip" title="Slot is Available" onclick="clickme(' + arr[i].Night[j].Available + ')">' + arr[i].Night[j].Time + '</p>';
         }
      }
   }
   document.getElementById("out-1").innerHTML = out;
   document.getElementById("out-2").innerHTML = out1;
   document.getElementById("out-3").innerHTML = out2;
}

bookingSlot(arr);

function clickme(Available) {
   console.log(Available);
}

$(document).ready(function () {
   $('[data-toggle="tooltip"]').tooltip();
});
