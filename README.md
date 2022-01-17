LOCAL SETUP as of 1/17/22
=========================
Install Meteor Version 1.3.2.4<br>
curl "https://install.meteor.com/?release=1.3.2.4" | sh

Run Application<br>
NODE_TLS_REJECT_UNAUTHORIZED=0 meteor

oAuth Setup<br>
Follow Directions Under "Sign In" for configuring Google oAuth Provider<br>
After completing, sign in with a Google Account<br>

Set Admin Role for a User<br>
With application running from previous step, in a new terminal window, run:<br>
meteor mongo<br>

db.users.find()<br>
You should get a response with "_id" : "someId" <br>
Run the following command, swapping "someId" with the id found in the previous step:<br>
db.users.update({_id:"someId"},{$push:{roles:{$each:["admin"]}}})
<br><br>

Clinical Scenario Repository
============================

The Clinical Scenario Repository <sup>©</sup>, CSR <sup>©</sup>, Good Ideas for Patient Safety <sup>©</sup> or GIPS <sup>©</sup> is a web tool that will allow clinicians, clinical engineers and other professionals to document and share technological barriers, near misses and other clinical events that pose a threat to patient safety as well as potential solutions for these threats and simple good ideas to improve patient safety.

The Clinical Scenario Repository was devised by the [Medical Device 'Plug and Play' Program][1] to address the forementioned needs. [A working version of this prototype][5] is hosted by courtesy of the MD PnP program.

You can use the [repository's issue][3] tracker for reporting bugs, problems, ideas, discussions, etc. or you can participate via the [OpenICE community platform][4].



TECHNOLOGY STACK
----------------

This current implementation of the Clinical Scenario Repository has been developed using the [Meteor platform][2] (v1.2). Thus, it is a JavaScript based app, which uses MongoDB as a database. These technologies were chosen to allow rapid prototyping and flexibility for changes as this idea matures.


TO LEARN MORE
-------------

To learn more about the Clinical Scenario Repository or the Medical Device "Plug and Play" program contact the program at info@mdpnp.org or visit http://www.mdpnp.org/

To learn more about this prototype version of the project email this github account's holder. 

[1]: www.mdpnp.org
[2]: https://www.meteor.com/
[3]: https://github.com/diego2013/CSR_Meteor/issues
[4]: http://community.openice.info/forum/46788-gips-support/
[5]: https://csr.openice.info/
