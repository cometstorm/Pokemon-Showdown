exports.trivia = function(t) {
  if (typeof t != "undefined") var trivia = t; else var trivia = new Object();
var stuff = {
isOn: false,
question: 'No Question',
host: 'no-one',
};
Object.merge(trivia,stuff);
return trivia
};
  
    var cmds = {
        hotpatch: function(target, room, user) {
		if (!target) return this.parse('/help hotpatch');
		if (!this.can('hotpatch')) return false;

		this.logEntry(user.name + ' used /hotpatch ' + target);

		if (target === 'chat' || target === 'stuff') {

			try {
				CommandParser.uncacheTree('./command-parser.js');
				CommandParser = require('./command-parser.js');
				CommandParser.uncacheTree('./trivia.js');
				trivia = require('./trivia.js').trivia(trivia);
				CommandParser.uncacheTree('./tour.js');
				tour = require('./tour.js').tour(tour);
				return this.sendReply('Chat commands have been hot-patched.');
			} catch (e) {
				return this.sendReply('Something failed while trying to hotpatch chat: \n' + e.stack);
			}
       
		} else if (target === 'battles') {

			Simulator.SimulatorProcess.respawn();
			return this.sendReply('Battles have been hotpatched. Any battles started after now will use the new code; however, in-progress battles will continue to use the old code.');

		} else if (target === 'formats') {
			try {
				// uncache the tools.js dependency tree
				CommandParser.uncacheTree('./tools.js');
				// reload tools.js
				Tools = require('./tools.js'); // note: this will lock up the server for a few seconds
				// rebuild the formats list
				Rooms.global.formatListText = Rooms.global.getFormatListText();
				// respawn simulator processes
				Simulator.SimulatorProcess.respawn();
				// broadcast the new formats list to clients
				Rooms.global.send(Rooms.global.formatListText);

				return this.sendReply('Formats have been hotpatched.');
			} catch (e) {
				return this.sendReply('Something failed while trying to hotpatch formats: \n' + e.stack);
			}

		} else if (target === 'learnsets') {
			try {
				// uncache the tools.js dependency tree
				CommandParser.uncacheTree('./tools.js');
				// reload tools.js
				Tools = require('./tools.js'); // note: this will lock up the server for a few seconds

				return this.sendReply('Learnsets have been hotpatched.');
			} catch (e) {
				return this.sendReply('Something failed while trying to hotpatch learnsets: \n' + e.stack);
			}

		}
		this.sendReply('Your hot-patch command was unrecognized.');
	},
        question: function(target, room, user){
		     if(room.id !== 'trivia'){
				this.sendReply('Only in trivia room :I');
				return false
				}
             if(!trivia.isOn == true){
                this.sendReply('There is no trivia game currently')
                }
                else{
                this.sendReply('The current question is ' +  trivia.question)
				}
            },
        nquestion: function(target, room, user){
		     if(room.id !== 'trivia'){
				this.sendReply('Only in trivia room :I');
				return false
				}
             if(trivia.isOn != true){
                this.sendReply('There is no trivia game currently')
                }
           else if(trivia.host === user.userid){
                room.addRaw('The new question is: <b>' + target + '<b>')
                trivia.question = target;
				for(var i in Users.users)
				Users.users[i].answered = false;
                }
                else {
                 return false
				 }
            },
            triv: 'starttrivia',
        starttrivia: function(target, room, user){
		    if(room.id !== 'trivia'){
				this.sendReply('Only in trivia room :I');
				return false
				}
            if(!user.can('broadcast')){
                this.sendReply('You are unauthorized!.');
                }
				else if(trivia.isOn == true){
				this.sendReply('There is already a game going on :I') 
				}
				else if(room.id !== 'trivia'){
				this.sendReply('Only in trivia room :I');
				return false
				}
                else {
            trivia.isOn = true;
			trivia.question = 'Nothing at the moment';
			trivia.host = 'No-one at the moment'
            Rooms.rooms.lobby.add('|html|<b>Go to the room trivia to play trivia<b>')
			}
            },
			endtrivia: function(target, room, user){
			if(room.id !== 'trivia'){
				this.sendReply('Only in trivia room :I');
				return false
				}
			if(!user.can('broadcast')){
                this.sendReply('You are unauthorized!.');
                }
				else if(trivia.isOn == false){
				this.sendReply('There is no game going on :I') 
				}
				else {
			trivia.isOn = false;
			trivia.question = 'Nothing at the moment';
			trivia.host = 'No-one at the moment';
			room.add('|html|<b>Trivia is over you can go home now.<b>');
			}
			},
           triviaintro: function(target, room, user){
		   if(!this.canBroadcast()) return;
		   this.sendReplyBox('How to play Trivia<br />'+
		   '/starttrivia - Starts a new game of trivia(+ and up)<br />'+
		   '/endtrivia - Ends a game of trivia(+ and up)<br />'+
		   '/host - Views the current trivia host<br />'+
		   '/nhost - Changes the trivia host(+ and up and host)<br />'+
		   '/question - Views the current trivia question<br />'+
		   '/nquestion - Changes the trivia question(host only)<br />'+
		   '/answer - Type this and your answer to the trivia question<br />'+
		   '/va - views the answers to the question(host only)<br />'
		   );
		   },
        host: function(target, room, user){
		     if(room.id !== 'trivia'){
				this.sendReply('Only in trivia room :I');
				return false
				}
             if(!trivia.isOn){
                this.sendReply('There is no trivia game currently');
                }
                else {
            this.sendReply('|html|The current host is: ' + '<b>' + trivia.host  + '<b>');
			}
            },
        nhost: function(target, room, user){
		      if(room.id !== 'trivia'){
				this.sendReply('Only in trivia room :I');
				return false
				}
              if(trivia.isOn != true){
                this.sendReply('There is no trivia game currently')
                }
				else if(!target){
				this.sendReply('Please specify a user')
				}
				var taruser = Users.get(target)
			  if(!taruser){
                this.sendReply('That user doesn\'t exist');
                    }
                     
             else if(this.can('broadcast') || trivia.host == user.userid){
                trivia.question = 'Nothing at the moment';
                    trivia.host = taruser.userid;
                    this.add('|html|The new host is ' + '<b>' + taruser.name + '<b>');
                }
               else{
			   this.sendReply('You don\'t have enough power for that');
			   }
            },
			answer: function(target, room, user){
			if(room.id !== 'trivia'){
			this.sendReply('Only in trivia room :I');
			return false
			}
			if(this.canTalk(target))
			user.answered = true;
			user.answer = target;
			this.sendReply('|html|Your answer is ' + '<b>' + target + '<b>');
			},
			viewanswers: 'va',
			va: function(target, room, user){
			if(!trivia.host === user.userid){
			this.sendReply('Only the host can view the answers!');
			return false
			}
			else{
			for(var i in Users.users){
			if(Users.users[i].answered){
			this.sendReply('|html|' + Users.users[i].name +': ' + '<b>' + Users.users[i].answer + '<b>');
			}
			}
			}
			}
       };
		
for (var i in cmds) CommandParser.commands[i] = cmds[i];