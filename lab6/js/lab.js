/*
 * Author: Madisen Castaneda <mcorreac@ucsc.edu>
 * Created 25 April 2022
 * License: Public Domain
 */

// Define variables
myTransport = ["bus", "train", "scooter"
    ];

myMainRide = {
    make : "Honda",
    model : "Odyssey",
    color : "White",
    year : 2019,
    age : function() {
        return 2022 - age;
    }
}


// output
document.writeln("Kinds of transportation I use: " + myTransport +"</br");
document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
