$(document).ready(function() {
  var deptname=['ce', 'chem', 'civil', 'ec', 'ic', 'it', 'mech', 'bmca', 'mba'];
  var deptevent=[6, 6, 5, 10, 5, 7, 5, 7, 5];
  var eventword=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];
  var tgtdeptname;

      $("div").click(function(event){

        if(event.target.id == "robotics") {
          var robothtml = '<div class="card-panel grey lighten-4 z-depth-2"><div class="row"><br><div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large teal accent-4" href="#showeventdetailspre" id="rbt1">Battle Field</a></div><div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large teal accent-4" href="#showeventdetailspre" id="rbt2">Robo Soccer</a></div><div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large teal accent-4" href="#showeventdetailspre" id="rbt3">Death Race</a></div><div class="col s12"><a data-scroll class="waves-effect waves-light btn-large teal accent-4" href="#showeventdetailspre" id="rbt4">Line - O - Bot</a></div><hr><h6><b><a href="http://felicific.org/2015/assets/Robotics_Schedule.pdf" target="_blank">Schedule</a></b></h6></div>';

          $("#showevents").html(robothtml);
          $("#showeventdetails").html("");
          return; 
        }

        if(event.target.id == "huntronics") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5>Huntronics</h5><br><b>Desire is not enough, Want Courage to Win.</b><br><br><b>Time: </b>Coming Soon<br><b>Team Size: </b>3 participants per team<br><b>Fees: </b>Rs. 100 per team<br><br><b>Coordinators: </b>Devanshu Panharia<br>9067772129<br><b><br><br><a href="http://felicific.org/2015/rules/Web_HUNTRONICS_2015.pdf" target="_blank">More Details</a></b> </div>');

          $("#showevents").html("");

        }

        if(event.target.id == "rbt1") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5>Battle Field</h5><br><b>War does not care about who is right, only who is left.</b><br><br><b>Team Size: </b>5 Participants per team<br><b>Fees: </b>Rs. 250 per team<br><br><b>Coordinators:</b><br> Vijay Patel- 9537392871<br><b><br><br><a href="http://felicific.org/2015/rules/11.Web_Robotic_Battle%20Field.pdf" target="_blank">More Details</a></b> </div>');
        }
        if(event.target.id == "rbt2") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5>Robo Soccer</h5><br><b>BE VALIANT TO RUN A RISK FOR GOAL.</b><br><br><b>Team Size: </b>5 Participants per team<br><b>Fees: </b>Rs. 250 per team<br><br><b>Coordinators: </b><br>Akash Patel - 8140327053<br><b><br><br><a href="http://felicific.org/2015/rules/12.Web_Robotic_Robo%20Soccer.pdf" target="_blank">More Details</a></b> </div>');
        }
        if(event.target.id == "rbt4") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5>Line - O - Bot</h5><br><b>Straighten yourself up, twist your guts out.</b><br><br><b>Team Size: </b>1 to 5 Participants per team<br><b>Fees: </b>Rs. 150 per team<br><br><b>Coordinators: </b><br>Smit Soni - 8401922262<br><b><br><br><a href="http://felicific.org/2015/rules/http://felicific.org/2015/rules/14.Web_%20Robotic_Line%20follower.pdf" target="_blank">More Details</a></b> </div>');
        } 
        if(event.target.id == "rbt3") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5>Death Race</h5><br><b>Get ready for a killer race.</b><br><br><b>Team Size: </b>Max Participants 4 per team<br><b>Fees: </b>Rs. 250 per team<br><br><b>Coordinators: </b><br>Niraj Kachhadiya - 7874266430<br><b><br><br><a href="http://felicific.org/2015/rules/13.Web_Robotic_Death_Race.pdf" target="_blank">More Details</a></b> </div>');
        }

        if(event.target.id == "ce-seminar") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5>Seminar on "Career in Software Testing"</h5><br>By Infosys Team<br><br>The topics which will be covered in the seminar are as follows:<br/>Types of Testing.<br/>Types of Testing is carried out in industry.<br/>Information on various testing tools.<br/>Career in S/W Testing.<br><br><b>At MMH Hall</b><br><br><b>Time: </b>10th March<br>12:30 PM to 03:00 PM<br><b>Fees: </b>Rs. 50 per participant<br><br><b>Contact: </b>Naitik Hingu<br>8460294564<br> </div>');
        }

        if(event.target.id == "game-1") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5><b>Counter Strike 1.6</b></h5><hr><p class="flow-text">Competition Structure</p><p>The tournament will be knock out. The team which wins its 1st stage match advances to the next stage. The knock out continues till we get final 4 top scoring teams for the semi finals.There will not be any match played for the third spot.</p><hr><p class="flow-text">Match Format</p><p>-Every team should have atmost 5 players.<br>-Every prelims and quarters match will be played on one map with a total of 7 rounds.<br>-For pre-semifinals team counter terrorist/terrorist will be decided on the basis of a trial round and the winner of that round gets to decide team.<br>-The start money for the match will be $16000.<br>-The team first to win 4 matches consecutively will be the winner of the match.<br>-For the Semi-Finals total number of rounds will be 14 (7 each as a Counter Terrorists and Terrorists).<br>-Finals: For the final round, there would be 20 rounds (10 each as terrorist and counter-terrorist).<br> -For each round win, team will be rewarded 1 point.</p><hr><p class="flow-text">Tie Breaker</p><p>-There will be extra 7 rounds played on the same map and the team will start as the same as it finished in the normal rounds. <br>-The start money for the tie breaker rounds will be $10000. <br>-The team to win first 4 rounds total will be the winner of the match. <br>-If a tie breaker also leads to a draw then 1 extra round will be played and the winner will be the winner of the match.</p><hr><p class="flow-text">Game Settings</p><p>-Use of Tactical Shield is strictly forbidden.If a team uses it intentionally or unintentionally, the team loses the round immediately. Intentional or unintentional use of bugs and/or exploits is strictly forbidden. Any questions regarding bugs and/or exploits must be brought to the tournament official present there. If a team is found to use bugs and/or exploits, the opponent team shall be declared as the winner of the match and a warning will be given to the team that used bugs and/or exploits by the tournament official.<br><br> The following settings will be set on servers:<br> Roundtime: 1 min 45 sec<br> Freezetime: 5 sec<br> Buytime: 20 sec<br> Friendly Fire: On</p><hr><p class="flow-text">Rules</p><p>-Players must be present in the tournament area with the whole team at the notifications schedule. Players are advised to be present a few minutes before the schedule to avoid any unpredictable delay. If the team is not present at the notification schedule, they shall be disqualified. <br>-Teams will be given 1 minutes to configure their settings and after that use of console or change in settings will be strictly prohibited. <br>-The seating arrangement is to the discretion of the tournament officials. <br>-Players are allowed to bring their own mouse and headphones.Headphones will not be provided by the committee. <br>-If one of the players is disconnected or crashed, he must come back in to the game as soon as possible and the round will be restarted. The team should be of 5 members and no change of players in the team is allowed after they have played their first match. <br>Playera can use their own usb mouse.</p><hr><p class="flow-text">Team</p><p>Max 5 Players</p><hr><p class="flow-text">Fees</p><p>150 / Team</p><hr><p class="flow-text">Time</p><p>9th March, 12:45 PM to 05:30PM <br><br>10th March, 09:00 AM to 05:30 PM</p><hr><p class="flow-text">Contact</p><p>Harshit Rathod<br>8460105022</p></div>'+"<div class='col s12 m4 l4'><a data-scroll class='waves-effect waves-light btn-large green accent-4' href='#showeventspre'>Back to Top</a></div>");
        }

        if(event.target.id == "game-2") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5><b>NFS Most Wanted</b></h5><hr><p class="flow-text">Competition Structure</p><p>-The tournament will be knock out. The player who wins their 1st stage match advances to the next stage. <br>-The knock out continues till we get final 4 top scoring players for the semi finals. <br>-There will not be any match played for the third spot. <br>-Sprint Races will be played by 4 players in the first round.</p><hr><p class="flow-text">Rules</p><p>-Players must be present in the tournament area at the notifications schedule. Players are advised to be present a few minutes before the schedule to avoid any unpredictable delay. If the player is not present at the notification schedule, he shall be disqualified. <br>-Players will be given 5 minutes to choose their car and tune them before racing. <br>-Any argument with the co-ordinators will lead to disqualification of the participant.</p><hr><p class="flow-text">Fees</p><p>30 / Person</p><hr><p class="flow-text">Time</p><p>9th March, 12:45 PM to 05:30PM <br><br>10th March, 09:00 AM to 05:30 PM</p><hr><p class="flow-text">Contact</p><p>Harshit Rathod<br>8460105022</p></div>'+"<div class='col s12 m4 l4'><a data-scroll class='waves-effect waves-light btn-large green accent-4' href='#showeventspre'>Back to Top</a></div>");
        }

        if(event.target.id == "game-3") {
          $("#showeventdetails").html('<div class="card-panel grey lighten-4 z-depth-2"><h5><b>Unreal Tournament 3</b></h5><hr><p class="flow-text">Competition Structure</p><p>The tournament will be knock out. The team which wins its 1st stage match advances to the next stage. The knock out continues till we get final 4 top scoring teams for the semi finals.There will not be any match played for the third spot.</p><hr><p class="flow-text">Match Format</p><p>-Every team should have atmost 5 players. <br>-Every prelims and quarters match will be played on one map with team with first 100 kill will win. <br>-For the Semi-Finals total number of rounds will be 3 each round with 75 kills. <br>-Finals: For the final round, there would be 5 rounds each round with 100 kills. <br>-The team to win first 2 rounds(in semi-final) and 3 rounds(in final) total will be the winner of the match. <br>-For each round win, team will be rewarded 1 point.</p><hr><p class="flow-text">Tie Breaker</p><p>-There will be extra 1 rounds played on the same map and team with first 100 kills will win.</p><hr><p class="flow-text">Rules</p><p>-Players must be present in the tournament area with the whole team at the notifications schedule. Players are advised to be present a few minutes before the schedule to avoid any unpredictable delay. If the team is not present at the notification schedule, they shall be disqualified. <br>-Teams will be given 1 minutes to configure their settings and after that use of console or change in settings will be strictly prohibited. <br>-The seating arrangement is to the discretion of the tournament officials. <br>-Players are allowed to bring their own mouse and headphones.Headphones will not be provided by the committee. <br>-If one of the players is disconnected or crashed, he must come back in to the game as soon as possible and the round will be restarted. The team should be of 5 members and no change of players in the team is allowed after they have played their first match. <br>-If a team is found to use bugs and/or exploits, the opponent team shall be declared as the winner of the match and a warning will be given to the team that used bugs and/or exploits by the tournament official.</p><hr><p class="flow-text">Team</p><br><p>Max 5 Players</p><hr><p class="flow-text">Fees</p><p>150 / Team</p><hr><p class="flow-text">Time</p><p>9th March, 12:45 PM to 05:30PM <br><br>10th March, 09:00 AM to 05:30 PM</p><p class="flow-text">Contact</p><p>Harshit Rathod<br>8460105022</p>'+"<div class='col s12 m4 l4'><a data-scroll class='waves-effect waves-light btn-large green accent-4' href='#showeventspre'>Back to Top</a></div>");
        }

         
        $.getJSON('../js/technical.json', function(data) {
              var tgtbtnid = event.target.id;
              var depttotalevents, i,j,k;

              //console.log("Initially:"+ tgtbtnid);

              for(i=0; i<eventword.length; i++) {
                //console.log("Event details: "+ i);

                if(tgtbtnid == eventword[i]) {
                  //console.log("IF Event details:"+ i+tgtbtnid);

                  var tml = '<br><div class="card-panel white z-depth-3"><h4 class="grey-text">{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.name}}}</h4><p class="flow-text">{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.tagline}}}</p><p>{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.description}}}</p></div><div class="card-panel white z-depth-3 center"><p class="flow-text">Team Size: <b>{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.team}}}</b></p><p class="flow-text">Fees: <b>{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.fees}}}</b></p><p class="flow-text">Time: <b>{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.time}}}</b></p></div><div class="card-panel white z-depth-3 center"><p class="flow-text">Contact: <b>{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.contactperson}}}</b><br><b>{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.contactnumber}}}</b></p></div><div class="card-panel white z-depth-3"><h5>Rounds</h5><p>{{{technical.'+tgtdeptname+'.'+tgtbtnid+'.round}}}</p></div><div class="card-panel white z-depth-3"><h5>';
                  var tml = tml + "Rules</h5><p>{{{technical."+tgtdeptname+"."+tgtbtnid+".rules}}}</p></div><div class='col s12 m4 l4'><a data-scroll class='waves-effect waves-light btn-large green accent-4' href='#showeventspre'>Back to Top</a></div>";
                  var html = Mustache.render(tml, data);

                  $("#showeventdetails").html(html); 
                  return;       
                }
              }    
              for(j=0; j<deptname.length; j++) {
                //console.log("Event list:"+ j);

                if(tgtbtnid == deptname[j]) {

                    //console.log("Checking department:"+ tgtbtnid+j);

                    tgtdeptname = deptname[j];
                    if(tgtdeptname == 'ce') {
                      var tempce = '<hr><p class="flow-text"> Seminar</p><div class="col s12"><a data-scroll class="waves-effect waves-light btn-large teal accent-4" href="#showeventdetailspre" id="ce-seminar">Seminar On S/W Testing</a></div><hr><p class="flow-text"> Hardcore Gamer</p><div class="row"><div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large teal darken-1" href="#showeventdetailspre" id="game-1">Counter Strike 1.6</a></div><div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large teal darken-1" href="#showeventdetailspre" id="game-2">NFS MW</a></div><div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large teal darken-1" href="#showeventdetailspre" id="game-3">Unreal Tournament 3</a></div></div><hr><br><div class="row"><div class="col s12 m6 l6"><a class="waves-effect waves-light btn-large teal darken-4" href="{{{technical.ce.link1}}}" id="ce-form">Registration Form</a></div><div class="col s12 m6 l6"><a class="waves-effect waves-light btn-large teal darken-4" href="{{{technical.ce.link2}}}" id="ce-schedule">Schedule</a></div></div>';
                    }
                    else {
                      var tempce = "";
                    }
                    depttotalevents = deptevent[j];
                    var preeventtemplate = '<div class="card-panel grey lighten-4 z-depth-2"><div class="row">';
                    var mideventtemplate = '<br>';

                    for(k=0; k<depttotalevents; k++) {

                        //console.log("Creating event list:"+ depttotalevents+k);

                        mideventtemplate = mideventtemplate + '<div class="col s12 m4 l4"><a data-scroll class="waves-effect waves-light btn-large teal accent-4" href="#showeventdetailspre" id="'+eventword[k]+'">{{{technical.'+tgtdeptname+'.'+eventword[k]+'.name}}}</a></div>';
                    }

                    var finaleventtemplate = preeventtemplate + mideventtemplate + tempce +'</div></div>';
                    
                    var html2 = Mustache.to_html(finaleventtemplate, data);
                    $("#showevents").html(html2);                    
                    $("#showeventdetails").html(""); //To clear the shown event details
                    return;
                }
              }

                            
          });
      });
});
