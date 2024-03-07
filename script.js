const start = 'The Lost Princess has gone missing! We have to find her! The King will reward with a hefty amount of coins.'; 

const enter = 'Please select 1 or 2 by typing it into the box below';

const q1 = 'Where should we look first? The swamp or in the town? Enter 1 for the swamp, 2 for the town.'

const q2 = 'You arrive at the swamp, looking around you see a witches hut and a cave nestled into the side of a hill near the swamp. Where do you go? Enter 1 for the cave or 2 for the hut.';

const q3 = 'Entering the cave, you notice what looks like to be muddy footprints heading further down. Do you follow them? Enter 1 for yes or 2 for no.'

const q4 = 'Continuing down into the cave, two paths diverge infront of you. Which way do you go? 1 for left 2 for right.'

const go1 = 'On the way to the town, you were ran over by a carriage. Game over!';

const go2 = 'Oh no! The witch is inside. She captures you inside her hut forever. Game over!'

const go3 ='';

//

alert(start);

let input = prompt(q1);

if (input == 1) {
 input == prompt(q2); 

      if (input == 1) {
        input == prompt(q3);
             
        if (input == 1) { 
         input == prompt(q4);
        } else { 
        input = alert
        }













      } else { 
        input == alert(go2); 
      }

} else{
    input == alert (go1);
}          
