function showDiv(info_id) {
        console.log(info_id);
        div = document.getElementById(info_id);

        div.style.display = "block";
};

$(document).ready(function() {
  var dayname=['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  var dayevent=[9,11,12,9,9];                                       //Update this array as the documet.json changes
  var eventword=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh', 'twelveth'];

      $("a").click(function(event){                                 //When user clicks on the day button
          $.getJSON('../js/document.json', function(data) {         //Get the json file
              var tgtbtnit = event.target.id;                       //Get the id of the button that is clicked
              var tgtdayname, daypointer, i;

              for(i=0; i<dayname.length; i++) {                     //Based on the clicked button, assign name of the day in tgtdayname and no of events 
                if(tgtbtnit == dayname[i]) {                        //in daypointer variable. daypointer will help in running the loop for a specified
                  tgtdayname = dayname[i];                          //events
                  daypointer = dayevent[i];
                }
              }
              
              var pretemplate = '<div class="card-panel grey lighten-4 z-depth-2"><h4 class="grey-text">'+tgtdayname.charAt(0).toUpperCase() + tgtdayname.slice(1)+'</h4><p class="flow-text">{{cultural.'+tgtdayname+'.celebrate}}</p>';     //Display day name and day theme
              var midtemplate='<div>';                                                              //midtemplate will display all the event details

              for(i=0; i<daypointer; i++) {                         //Iterate over all the events. Do not insert any TAB (3-4 spaces) in the template. 

                //var eventlink = '{{{cultural.'+tgtdayname+'.'+eventword[i]+'.link}}}';  //To handle event links
                //var islink = Mustache.to_html(eventlink, data);                         

                ///if(islink == "") {
                  //console.log("NULL");
                //}
                //else {
                  //console.log(islink);                                                  //Write div to display this for each event
                //}

                //console.log(eventlink);

                midtemplate = midtemplate + '<div class="card-panel white z-depth-2"><h5>{{cultural.'+tgtdayname+'.'+eventword[i]+'.name}}</h5><br><b>Time:</b> {{cultural.'+tgtdayname+'.'+eventword[i]+'.time}}<br><b>Fees:</b> {{cultural.'+tgtdayname+'.'+eventword[i]+'.fees}}<br><b>Place:</b> {{cultural.'+tgtdayname+'.'+eventword[i]+'.place}}<br><b>Team:</b> {{cultural.'+tgtdayname+'.'+eventword[i]+'.team}}<br><br><b>Coordinators:</b><br>{{cultural.'+tgtdayname+'.'+eventword[i]+'.co-ordinators.c1}} - {{cultural.'+tgtdayname+'.'+eventword[i]+'.co-ordinators.p1}}<br>{{cultural.'+tgtdayname+'.'+eventword[i]+'.co-ordinators.c2}} - {{cultural.'+tgtdayname+'.'+eventword[i]+'.co-ordinators.p2}}<br><br><b><a onclick="javascript:showDiv(\'info'+i+'\')" style="cursor:pointer;">More Details</b></a> <div id="info'+i+'" style="display:none;"><hr>{{{cultural.'+tgtdayname+'.'+eventword[i]+'.description}}}</div><br></div>';  
              }
              
              midtemplate = midtemplate + '<div class="card-panel white z-depth-2"><h5>Best of the Day</h5><br><b>Time:</b> 04:00 PM<br></div><div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large green accent-4" href="#cultural-btn">Back to Top</a></div></div>';                                              //Back To Top and best of the day
              var endtemplate = '</div></div>';

              var finaltemplate = pretemplate+midtemplate;           //Join all the templates

              
              var html = Mustache.to_html(finaltemplate, data);     //Render the json file for html formatting
              $("#daydisplay").html(html);                          //Display the rendered html in the division daydisplay

          });
      });
});