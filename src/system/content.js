export const backgrounds = [
   {
      name: "Accountant",
      description:
         "You were brought up in a shadowy world of balance sheets, credit notes, purchase ledgers and tax-deductible lunches. Since computers are used for honest tax statements, human accountants exist only to tease, stretch and reimagine tax law to provide exemptions for their clients. After years of dodging the tax authorities you were glad to pack it all in and become something safer - like a pirate or bounty hunter.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 10 },
         { category: "intelligence", skill: "computer", bonus: 10 },
         { category: "intelligence", skill: "cultureLaw", bonus: 20 },
         { category: "combat", skill: "dodge", bonus: 10 },
      ],
   },

   {
      name: "Anarchist",
      description:
         "The super-rich, corporate leaders and their stooge politicians, have the whole of society stitched up and the very concept of freedom is a joke. As a young person you threw rocks through police-station windows, belched at local dignitaries, assaulted corporate management and spent years in a variety of prisons.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "grenade", bonus: 20 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "social", skill: "intimidate", bonus: 10 },
      ],
   },

   {
      name: "Army Trained",
      description:
         "You are a fully trained infantry soldier for one of the three great powers, Federation, Empire or Alliance. Your comprehensive military training covered all aspects of modern warfare and you are an accurate and deadly opponent in personal combat.",
      choices: 2,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 20 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "combat", skill: "grenade", bonus: 10 },
         { category: "combat", skill: "heavyWeapons", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 20 },
         { category: "intelligence", skill: "medicine", bonus: 10 },
         { category: "vehicle", skill: "vehicleWeapons", bonus: 10 },
      ],
   },

   {
      name: "Borderland Homeworld",
      description:
         "You were brought up on the frontier, on a planet of lowlifes and criminals. Such a society breeds tough people and you are no exception.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "vehicle", skill: "repair", bonus: 10 },
         { category: "espionage", skill: "survival", bonus: 10 },
      ],
   },

   {
      name: "Born on the Streets",
      description:
         "You are an orphan and have spent a good proportion of your life on the streets of some megacity, scrounging for scraps and stealing just to stay alive. Your experience has made you tough, plain speaking and sneaky.",
      choices: 1,
      enhancement: "Tough",
      skills: [
         { category: "espionage", skill: "stealth", bonus: 10 },
         { category: "social", skill: "streetwise", bonus: 20 },
      ],
   },

   {
      name: "Boxer",
      description:
         "You are a professionally trained boxer, although you never made it to the big time. You have a mean right hook and you’re as strong as they come.",
      choices: 1,
      enhancement: "Strong",
      skills: [
         { category: "combat", skill: "fighting", bonus: 20 },
         { category: "combat", skill: "parry", bonus: 10 },
      ],
   },

   {
      name: "Cheerleader",
      description:
         "Your planet worships sports heroes, and as a young person you joined one of the thousands of cheerleading teams with a patriotic fervour. The cheerleading team was rife with ambition, intrigue and an obsession with physical perfection, and you got up to many japes and schemes during your time in the corp.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "espionage", skill: "athletics", bonus: 20 },
         { category: "social", skill: "charm", bonus: 10 },
         { category: "espionage", skill: "sleightOfHand", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 10 },
      ],
   },
      {
      name: "Child Actor",
      description:
         "Your pushy parents forced you into an endless series of humiliating auditions since you were a baby. You’ve been through the works; the drugs, the hangers-on, the sycophants – you’ve even done some acting. After years of over-entitlement and crushing depression you’ve emerged from the darkness of youth into the damaged, ambitious person you are today.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 20 },
         { category: "social", skill: "diplomacy", bonus: 20 },
         { category: "combat", skill: "meleeWeapons", bonus: 10 },
      ],
   },

   {
      name: "Community Youth Worker",
      description:
         "The young of the galaxy are often exposed to suffocating levels of over-expectation, including nearly limitless examinations, detailed scouring on social media and almost fatal levels of subliminal toy advertising. Small wonder that more than a few end up as near psychopathic wrecks. It takes a special kind of person to be a Community Youth Worker, a combination of empathy, masochism and speed of reaction is necessary to see the year out.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "insight", bonus: 20 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "combat", skill: "parry", bonus: 10 },
         { category: "social", skill: "streetwise", bonus: 10 },
      ],
   },

   {
      name: "Computer Game Designer",
      description:
         "In the era of perfect photorealistic graphics designing computer games has become an art as much as a science. To be the creator of your own virtual world gives someone a sense of superiority over their fellow human, and you reckon you know it all when it comes to driving fast cars and spacecraft. As a strategy gamer you can naturally out-think some slow-witted pirate. Can’t you?",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "computer", bonus: 20 },
         { category: "intelligence", skill: "tactics", bonus: 10 },
         { category: "vehicle", skill: "shipPiloting", bonus: 10 },
         { category: "vehicle", skill: "vehiclePiloting", bonus: 10 },
      ],
   },

   {
      name: "Criminal Family",
      description:
         "You were born into a glorious heritage of utterly corrupt criminality. Your mother and father were gangsters, possibly gangster lords. All your family are part of the ‘family’, and it is expected that you too will help the business once you’ve got this space adventuring lark out of your system. As a member of the criminal elite you are not expected to get involved with all that rough stuff. Lying, seducing and stealing are more your kind of skills.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 10 },
         { category: "social", skill: "charm", bonus: 10 },
         { category: "social", skill: "gambling", bonus: 10 },
         { category: "espionage", skill: "security", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 10 },
      ],
   },

   {
      name: "Cyborg",
      description:
         "You are part machine and part human - and not in a subtle way; in a big, clanking half robot kind of way. Most people who end up like this suffered terrible injuries and did not have the money for genetic limb replacement. A few mercenary and criminal types actually volunteer for this horrifying surgery, believing it makes them look intimidating. They might be right.",
      choices: 1,
      enhancement: "100,000 credits worth of Cybernetics",
      skills: [],
   },

   {
      name: "Docking Bay Operative",
      description:
         "You work in a low-gravity environment on a large space station, such as a Coriolis or Ocellus space dock. You have looked after Docking Bay 42 for years, watching as idiots with half your skill and training crash land onto your pristine landing pad. You’ve seen the swaggering arrogance of those spaceship commanders. With your real Skills as a docking bay operative you’ll be outmanoeuvring pirates and shooting down space terrorists in no time!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "vehicle", skill: "navigation", bonus: 10 },
         { category: "intelligence", skill: "planetaryKnowledge", bonus: 10 },
         { category: "vehicle", skill: "repair", bonus: 10 },
         { category: "espionage", skill: "security", bonus: 10 },
         { category: "social", skill: "trading", bonus: 10 },
      ],
   },

   {
      name: "Engineer",
      description:
         "You are a highly qualified technical engineer with a solid grasp of the latest technology. Your skills are in high demand across the galaxy and there is very little you cannot fix or reprogram. Being able to repair your own ship greatly reduces costs, and makes you a lifesaver in any group you care to join.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "cyber", bonus: 10 },
         { category: "intelligence", skill: "computer", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "vehicle", skill: "repair", bonus: 20 },
      ],
   },

   {
      name: "Explorer Corp",
      description:
         "The lure of deep space beckons to the bold. Fabulous hidden riches await those with the guts to venture beyond the bubble of human occupied space. As an explorer you are expert in navigation and survival. There is nothing you like better than landing on a pristine alien world and to churn up the earth as you speed around in your eight-wheeled SRV.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "vehicle", skill: "navigation", bonus: 20 },
         { category: "intelligence", skill: "planetaryKnowledge", bonus: 10 },
         { category: "espionage", skill: "survival", bonus: 10 },
         { category: "vehicle", skill: "vehiclePiloting", bonus: 10 },
      ],
   },

   {
      name: "Fighter Pilot",
      description:
         "In addition to your basic training you have received advanced training to fly a combat spaceship, such as a Viper or Eagle. You served in an elite fighter corp, either as part of a formal navy or, more likely, as part of a planetary defence force. Your quick reactions make you one of the best space warriors in the galaxy.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "vehicle", skill: "shipPiloting", bonus: 10 },
         { category: "vehicle", skill: "shipWeapons", bonus: 10 },
         { category: "vehicle", skill: "systems", bonus: 20 },
         { category: "intelligence", skill: "tactics", bonus: 10 },
      ],
   },

   {
      name: "Freedom Fighter",
      description:
         "Across the galaxy tyranny and dictatorship are in good shape, with petty despots lording it over their frightened and bullied population. You were part of a band of fighters that stood up to this oppression using stealth, resourcefulness or good old fashioned grit. Perhaps you were successful and your planet is now free, or maybe your band was hunted down and you are the last survivor. Either way it is time to move on with your life.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "combat", skill: "grenade", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 10 },
         { category: "vehicle", skill: "vehiclePiloting", bonus: 10 },
      ],
   },

   {
      name: "Frontier Trader",
      description:
         "You worked on a small trading ship, selling desperately needed goods to the poorest folk on the frontier. Many of those places are ridden with anarchy or spirit crushing autocracies, and you had to fight to survive when petty criminals or corrupt tax inspectors came to shake you down. Now you own your own ship. With your extensive trading experience it’s time to earn some real money!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bargain", bonus: 10 },
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "social", skill: "trading", bonus: 20 },
      ],
   },
      {
      name: "Fuel Rat",
      description:
         "The Fuel Rats are a charitable organisation that rescues stranded pilots who accidentally use up all their fuel supplies. Sometimes derided by pilots who claim the Fuel Rats have too much time on their hands, no one forgets the moment a noble Fuel Rat saves them from certain death in the cold depths of space. You are an ex-ratter, and as a consequence feel a strong bond with your fellow pilots crawling through the depths of space. Still, it doesn’t pay the bills, so now it’s time to go out and earn some credits!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "vehicle", skill: "navigation", bonus: 20 },
         { category: "intelligence", skill: "planetaryKnowledge", bonus: 10 },
         { category: "vehicle", skill: "shipPiloting", bonus: 10 },
         { category: "social", skill: "trading", bonus: 10 },
      ],
   },

   {
      name: "Gene Mod Baby",
      description:
         "It is illegal in most societies to subject children to extensive, non-medical genetic manipulation. But there are loopholes, especially for the children of the rich. You were one such child, given a leg-up by your parents over your brutish and ape-like contemporaries. Many such children end up insane or hopelessly obsessional, but you are one of the lucky ones. You are simply better than other people although you try to conceal your contempt behind your fidgeting, manic stare.",
      choices: 1,
      enhancement: "Choose any two Enhancements",
      skills: [],
   },

   {
      name: "Gym Freak",
      description:
         "It started out as a simple way to get fit. After New Year’s Feast you felt all flabby and exhausted. These days it takes a 20k run to break a sweat on you, and you have the kind of body Greek gods would be envious of. You are a helpless workout addict, twice as much now you work in zero gravity. Can’t let those low G’s impact on your perfect body now, can we?",
      choices: 1,
      enhancement: "Quick Runner & Strong",
      skills: [
         { category: "espionage", skill: "athletics", bonus: 10 },
      ],
   },

   {
      name: "Hacker",
      description:
         "Let's be clear. You have a physical body and a name, but those things are mere vessels, fleshy avatars in the stupid world of pain and hunger. In truth you are AvEn6eR_99, little less than a digital god. The witless people of your home world are sheep for you to fatten and crush. The authorities cannot catch you because you live constantly on the run, using the police force's own servers to hack extra credit onto your Sunbuck coffee card and claiming hotel rooms as expenses for the police commissioner. You giggled as you released top secrets from the security services data farms from the comfort of some flea-ridden hotel on your three-year-old handheld com. Then one day you realised that you were nothing more than a homeless coffee addict, and the people you stole from lived in large mansions attended by servants. You decided they had the right idea, so now it’s time to make your skills pay.",
      choices: 1,
      enhancement: "Natural Genius (Computer)",
      skills: [
         { category: "intelligence", skill: "computer", bonus: 20 },
         { category: "espionage", skill: "security", bonus: 10 },
      ],
   },

   {
      name: "High Tech Homeworld",
      description:
         "You lived on a technologically advanced planet where almost every conceivable human need could be assisted by robots, computers and machines. Technology suffuses your thoughts and actions, and even ordering a coffee on this planet is a complex social and technical puzzle for outsiders. You cannot help, growing up in such a place, becoming intimately familiar with all the trappings of the modern galaxy.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "computer", bonus: 10 },
         { category: "intelligence", skill: "cyber", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "intelligence", skill: "science", bonus: 10 },
         { category: "vehicle", skill: "systems", bonus: 10 },
      ],
   },

   {
      name: "Hoopy Casino Croupier",
      description:
         "The fortunes of Hoopy’s Casinos has risen and fallen across three centuries, but the galaxy’s favourite provider of fortune-sapping entertainment has never entirely disappeared. One of your first jobs was in these glamorous gambling halls, keeping an eye on the mega-roulette wheel. It was not an honest job. The casino had you bounce and shuffle the roulette ball to ensure limited wins, and you had to keep an eye out for customers who wished to game the system.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "gambling", bonus: 20 },
         { category: "social", skill: "perception", bonus: 10 },
         { category: "espionage", skill: "sleightOfHand", bonus: 20 },
      ],
   },

   {
      name: "Lave Radio Host",
      description:
         "Lave Radio is at the forefront of a movement in news media that sees the replacement of old fashioned investigatory journalism with vague guesses, assumptions and a gutsy determination to fill dead air. You were a presenter of this show, or one very like it, and have become adept at wild speculation and inferring the big picture from a few lines of text.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 20 },
         { category: "social", skill: "charm", bonus: 10 },
         { category: "social", skill: "insight", bonus: 20 },
      ],
   },

   {
      name: "Martial Artist",
      description:
         "You have been extensively trained in unarmed and melee combat which has turned your body into a lethal weapon. You are physically fit and have quick reflexes having been in training since you were a child. A number of secret organisations value the martial arts, especially those who work in places where carrying guns is difficult if not impossible.",
      choices: 2,
      enhancement: "",
      skills: [
         { category: "espionage", skill: "athletics", bonus: 20 },
         { category: "combat", skill: "dodge", bonus: 20 },
         { category: "combat", skill: "fighting", bonus: 20 },
         { category: "combat", skill: "meleeWeapons", bonus: 20 },
         { category: "combat", skill: "parry", bonus: 20 },
      ],
   },

   {
      name: "Minor Politician",
      description:
         "You have served as a minor official on a planet or space station. Depending on where you were born you might have been elected or appointed to this role. Either way you have had to deal with petty bureaucracies and troublesome citizens as you navigated the quagmire of government. You understand people and law well, and know when to act and when to conveniently be missing from the room.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bargain", bonus: 10 },
         { category: "intelligence", skill: "cultureLaw", bonus: 10 },
         { category: "social", skill: "diplomacy", bonus: 10 },
         { category: "social", skill: "perception", bonus: 10 },
         { category: "intelligence", skill: "tactics", bonus: 10 },
      ],
   },

   {
      name: "Mercenary",
      description:
         "You have served in a rough, semi-legal profession that kills for money. Your mercenary outfit specialised in ground combat, especially in the use of heavy weapons. Lacking any kind of subtlety, your unit used brute force to accomplish its aims. Anyone working for such an organisation needs to be tough and hard edged to live more than a few days.",
      choices: 2,
      enhancement: "Tough",
      skills: [
         { category: "combat", skill: "dodge", bonus: 20 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "combat", skill: "heavyWeapons", bonus: 20 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "intelligence", skill: "tactics", bonus: 10 },
         { category: "vehicle", skill: "vehicleWeapons", bonus: 10 },
      ],
   },

   {
      name: "Mining Engineer",
      description:
         "You were a Borderworld strip-miner, employed by a profit hungry corporation such as Mastopolos or Caine Massey. Strip mining involves little subtlety. Heavy barrage mining tools, little more than colossal hand-held rocket launchers, are used to blast away the bedrock, and the resulting rubble is processed by the ton through gigantic sifters. Entire mountain ranges are levelled to produce the ore the galaxy demands.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "grenade", bonus: 10 },
         { category: "combat", skill: "heavyWeapons", bonus: 20 },
         { category: "vehicle", skill: "repair", bonus: 10 },
         { category: "vehicle", skill: "systems", bonus: 10 },
      ],
   },
      {
      name: "Monk/Nun",
      description:
         "You were a member of a religious order such as Utopian Vision or an old Earth faith that placed many demands and restrictions upon your activities, behaviour and freedom. In order to achieve a higher level of spiritual awareness you have fasted, meditated in aching loneliness, and prayed for many days on end. You have left that life behind now, but your time has not been wasted; you have picked up many skills from your spiritual journey.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "intelligence", skill: "medicine", bonus: 10 },
         { category: "social", skill: "insight", bonus: 20 },
         { category: "espionage", skill: "stealth", bonus: 10 },
      ],
   },

   {
      name: "Navy Trained",
      description:
         "You have served in a great interstellar navy of the Alliance, Empire or Federation. Working aboard a capital spacecraft such as a Farragut or Majestic battlecruiser, you have been part of a dedicated team of hundreds of personnel required to keep these enormous ships running. Such a career is excellent training for life in space, and there is little the galaxy can throw at you that you cannot overcome.",
      choices: 2,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "vehicle", skill: "repair", bonus: 20 },
         { category: "espionage", skill: "security", bonus: 10 },
         { category: "vehicle", skill: "shipPiloting", bonus: 10 },
         { category: "vehicle", skill: "shipWeapons", bonus: 10 },
         { category: "vehicle", skill: "systems", bonus: 20 },
      ],
   },

   {
      name: "Officer",
      description:
         "You are a formally trained officer in the military of one of the great powers of the galaxy (your previous background determines which service you are an officer in). As a military leader you are schooled in battle tactics, command and motivation. You might find it difficult to relinquish these traits now you are in civilian life.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "diplomacy", bonus: 10 },
         { category: "social", skill: "intimidate", bonus: 10 },
         { category: "social", skill: "perception", bonus: 10 },
         { category: "intelligence", skill: "tactics", bonus: 20 },
      ],
   },

   {
      name: "Partner",
      description:
         "You do not travel space alone. You have a loyal companion who sticks by your side through thick and thin. To create your companion, see the chapter on Partners.",
      choices: 1,
      enhancement: "Partner",
      skills: [],
   },

   {
      name: "Petty Criminal",
      description:
         "You were a small time crook, with a broad portfolio of mugging, theft and burglary to your name. It is impossible to get rich through such a life – the gang bosses make sure that no independent criminal ever gets too big for their boots, so after a few run-ins with the Don you decided to skip planets and find something more lucrative to do.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "combat", skill: "parry", bonus: 10 },
         { category: "espionage", skill: "sleightOfHand", bonus: 10 },
         { category: "social", skill: "streetwise", bonus: 10 },
      ],
   },

   {
      name: "Pilot Trained",
      description:
         "You have passed your flying licence for the operation of spacecraft, which includes the use of the generic systems, weapons and engine functions of conventional small spacecraft. Flying without a licence is a criminal offence but the number of unlicensed and uninsured pilots has risen sharply in the last few years.",
      choices: 0,
      enhancement: "Free Background",
      skills: [
         { category: "vehicle", skill: "shipPiloting", bonus: 20 },
         { category: "vehicle", skill: "shipWeapons", bonus: 20 },
         { category: "vehicle", skill: "systems", bonus: 10 },
      ],
   },

   {
      name: "Police Officer",
      description:
         "You were or are a member of a system police or security service. You are extensively trained in detecting, tracking, and arresting criminals of all stripes and backgrounds. Modern police officers use spacecraft, ground vehicles, computers and a range of other technological devices to keep up with criminals, but a steady gun arm and a strong right hook remain crucial traits for a cop who wants to survive their beat.",
      choices: 2,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "cultureLaw", bonus: 10 },
         { category: "social", skill: "diplomacy", bonus: 10 },
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 20 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "social", skill: "perception", bonus: 20 },
         { category: "vehicle", skill: "shipPiloting", bonus: 10 },
         { category: "vehicle", skill: "shipWeapons", bonus: 10 },
      ],
   },

   {
      name: "Private Detective",
      description:
         "As long as people have kept secrets there have been those who specialise in uncovering them. The job of a private detective hasn’t changed much, suspicious partners made up the majority of your cases - but just sometimes something really juicy comes along. Uncovering corporate scandals, government incompetence and mob conspiracies are the real meat and drink to a detective.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "social", skill: "insight", bonus: 10 },
         { category: "social", skill: "perception", bonus: 10 },
         { category: "espionage", skill: "security", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 10 },
      ],
   },

   {
      name: "Ran Away From Home",
      description:
         "Home life has to be pretty awful to convince a child to run away. You missed out on a large chunk of your education, but gained some learning from the school of hard knocks. Life on the street was terrible, but has made you more self-reliant than most people in the galaxy. Presumably something happened to improve your life, but you’ll never forget those hard-learned skills as a member of the forgotten underclass.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "social", skill: "perception", bonus: 10 },
         { category: "espionage", skill: "sleightOfHand", bonus: 10 },
         { category: "social", skill: "streetwise", bonus: 10 },
         { category: "espionage", skill: "survival", bonus: 10 },
      ],
   },

   {
      name: "Scientist",
      description:
         "You are a highly intelligent theoretical scientist who has contributed to a number of fields in mathematics and physics. Being able to understand the nature of the universe, and unlocking the doors of how and why is your driven passion. Being a scientist will never make you rich, and perhaps too much time spent in the lab might close your mind to the infinite possibilities of the galaxy. No matter what you choose to do your ability to understand how the universe works will give you a big advantage.",
      choices: 1,
      enhancement: "Natural Genius (Science)",
      skills: [
         { category: "intelligence", skill: "computer", bonus: 10 },
         { category: "intelligence", skill: "science", bonus: 20 },
      ],
   },

   {
      name: "Scout Leader",
      description:
         "Your homeworld was a luxurious green Earth-type planet. Too many people in the galaxy have never seen a real tree – not you. You revelled in play and sport in the great outdoors and were an enthusiastic young scout. In fact you found it quite hard to leave the organisation and stayed on as scout leader long after your peers grew up and derided you for your lack of cool. You don’t care. Where are they now? City brokers, factory workers? The wild is nurturing and honest, and will always call you home.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "espionage", skill: "athletics", bonus: 10 },
         { category: "social", skill: "charm", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "vehicle", skill: "navigation", bonus: 10 },
         { category: "espionage", skill: "survival", bonus: 10 },
      ],
   },
      {
      name: "Second Hand Spaceship Dealer",
      description:
         "You are an expert at selling old, semi-functional spacecraft. You worked on a used spaceship lot in some dreary backwater space station, selling dreams to kids with no money and fixer-uppers to fools who think they’ll get that old spaceship fixed just as soon as they’ve finished the bathroom. You didn’t get to keep the money you made, so you quit. Hell, if you’re going to rip people off you might as well get the money for it!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bargain", bonus: 20 },
         { category: "intelligence", skill: "planetaryKnowledge", bonus: 10 },
         { category: "vehicle", skill: "repair", bonus: 10 },
         { category: "social", skill: "trading", bonus: 10 },
      ],
   },

   {
      name: "Secret Agent",
      description:
         "You were an information retrieval agent for a government or large corporation. Your job was to break into corporate headquarters and steal their secrets. Failing a mission generally meant death from the trigger-happy targets of your theft, so you must have been a success. Lying, stealing, charming and avoiding were your main talents. If you ever had to pull out a weapon chances are the mission would have been a failure.",
      choices: 2,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 10 },
         { category: "social", skill: "charm", bonus: 10 },
         { category: "intelligence", skill: "computer", bonus: 10 },
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "social", skill: "insight", bonus: 10 },
         { category: "espionage", skill: "security", bonus: 20 },
         { category: "espionage", skill: "stealth", bonus: 20 },
      ],
   },

   {
      name: "Self-Taught",
      description:
         "You are a highly disciplined person and have taught yourself the skills you need through sheer perseverance. You may not have as many Skills as other people, but you are much more focused.",
      choices: 1,
      enhancement: "Gain an Enhancement; choose any two Skills +10 (you cannot choose the same Skill twice)",
      skills: [],
   },

   {
      name: "Ship Hand",
      description:
         "You’ve worked on large spaceships for a good portion of your life. You are excellent in a supporting role, able to operate turrets, scanner systems and even repair the ship with some skill.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "vehicle", skill: "shipWeapons", bonus: 10 },
         { category: "vehicle", skill: "repair", bonus: 10 },
         { category: "vehicle", skill: "systems", bonus: 20 },
      ],
   },

   {
      name: "Sports College",
      description:
         "You are extremely physically fit and have attended sports college. You never managed to advance into the professional leagues of your game but you are, nonetheless, at the peak of physical excellence, able to run, jump and swim faster than most of your colleagues.",
      choices: 1,
      enhancement: "Quick Runner",
      skills: [
         { category: "espionage", skill: "athletics", bonus: 20 },
         { category: "combat", skill: "dodge", bonus: 10 },
      ],
   },

   {
      name: "Stockbroker",
      description:
         "You used to work for a major interstellar bank, such as the Bank of Zaonce or the Federal Cooperative. With artificial intelligence banned the stock markets are run by humans. This makes for a volatile and high stress environment, full of intimidation, blackmail and the occasional murder. It is a hard profession to leave – the addictive quality of earning outrageous money can cost a person their soul.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 10 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "social", skill: "intimidate", bonus: 10 },
         { category: "social", skill: "trading", bonus: 20 },
      ],
   },

   {
      name: "Teacher",
      description:
         "You bear the noble duty to educate the next generation of ungrateful brats. A good teacher can inspire their students to great heights. Bad teachers, like you, rely on brute force, intimidation and a loud voice to do more or less the same. Most teachers only last a couple of years in the job before undertaking less stressful work, like front line combat or bomb disposal.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "cultureLaw", bonus: 10 },
         { category: "social", skill: "diplomacy", bonus: 10 },
         { category: "social", skill: "intimidate", bonus: 10 },
         { category: "social", skill: "perception", bonus: 10 },
         { category: "intelligence", skill: "science", bonus: 10 },
      ],
   },

   {
      name: "Trained Doctor",
      description:
         "Getting a medical degree is probably the most significant achievement of your life. These days a doctor needs not only expertise in biology and chemistry, but also cybernetics. You haven’t finished your specialisation, but even without it a trained doctor can find work anywhere; especially in occupations that expose the team to high amounts of risk.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "cyber", bonus: 20 },
         { category: "intelligence", skill: "medicine", bonus: 20 },
         { category: "intelligence", skill: "science", bonus: 10 },
      ],
   },

   {
      name: "Treasure Hunter",
      description:
         "Some people explore the galaxy purely to increase their knowledge, or to behold the strange and wonderful sights of an infinite universe. Personally you would be happy if every planet you landed on looked the same, provided they were stuffed with rare minerals, crashed treasure ships or abandoned military outposts. You’re in it for the money, and you know the best places in the galaxy to go looking for it!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "vehicle", skill: "navigation", bonus: 10 },
         { category: "intelligence", skill: "planetaryKnowledge", bonus: 10 },
         { category: "vehicle", skill: "vehiclePiloting", bonus: 10 },
      ],
   },

   {
      name: "Trucker",
      description:
         "Bulging biceps, the stink of stale sweat, grim halitosis … but enough about Cobra pilots. You’re a trucker, a rougher, tougher breed than any of those spaceship flying wimps! They should try driving across unpaved badlands in a suspension-free frontier truck, beset by every missile wielding bandit or punk in a dune buggy who’d like a taste of your sweet, sweet cargo. You’ll have to leave the wheel for a bit whilst you spend some time doing space trading, but you’ll be back. Just wait until those outlaws see you driving around in a brand new light tank! Then we’ll see who needs to run.",
      choices: 1,
      enhancement: "Tough",
      skills: [
         { category: "social", skill: "trading", bonus: 10 },
         { category: "vehicle", skill: "vehiclePiloting", bonus: 10 },
         { category: "vehicle", skill: "vehicleWeapons", bonus: 10 },
      ],
   },

   {
      name: "University Graduate",
      description:
         "Universities cost a fortune these days, so those lucky enough to be able to go can get a real leg up in life. Just being qualified to apply for university means you are already accomplished in physical and social science, your degree is really just the icing on the cake.",
      choices: 1,
      enhancement: "One Intelligence Skill +20; Two Intelligence Skills +10",
      skills: [],
   },

   {
      name: "Vehicle Nut",
      description:
         "From the first time you were strapped into a car as baby you fell in love with ground vehicles. The speed, the skidding, the traction; the entire physical and emotional experience of going fast close to the ground is exhilarating. You collected and tinkered with wheeled vehicles of all sorts, and enjoyed nothing more than a good destruction derby. No matter what your eventual occupation you have always tried to bring your love of vehicles with you, whether that’s as a racer, a tank driver or a scout. Vrroooomm!!!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "vehicle", skill: "repair", bonus: 10 },
         { category: "vehicle", skill: "vehiclePiloting", bonus: 20 },
         { category: "vehicle", skill: "vehicleWeapons", bonus: 20 },
      ],
   },

   {
      name: "Wise Guy",
      description:
         "Every criminal organisation needs a fixer, someone who can cope with any situation the gang can get themselves into, whether it’s combat, disposing of dead bodies, or saving the life of a dying drug addict. The sheer versatility of the wise guy is a wonder to the common thug, who can only dream of receiving the same kind of respect.",
      choices: 2,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "social", skill: "gambling", bonus: 10 },
         { category: "combat", skill: "heavyWeapons", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "intelligence", skill: "medicine", bonus: 10 },
         { category: "combat", skill: "meleeWeapons", bonus: 10 },
         { category: "social", skill: "streetwise", bonus: 20 },
         { category: "intelligence", skill: "tactics", bonus: 10 },
         { category: "vehicle", skill: "vehicleWeapons", bonus: 10 },
      ],
   },
      // =========================
   // DLC - ESPIONAGE
   // =========================

   {
      name: "Wage Slave",
      description:
         "You have worked for one of the galaxy’s worst corporations in a badly paid administrative role. The company paid you just enough money to keep you alive, clean and housed, but without the ability to gather any savings or improve your lot. You were bullied, oppressed and threatened as a matter of course. Toilet breaks were timed, your appearance and speech strictly regulated, and you were subjected to constant appraisal meetings at which your managers would browbeat you into sacrificing holiday and working overtime for no pay. Leaving that behind wasn’t easy, but you have gained an exact knowledge of how corporations work and protect themselves. Could be handy if you ever wanted to pay them a little visit in the future…",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bargain", bonus: 10 },
         { category: "intelligence", skill: "computer", bonus: 10 },
         { category: "intelligence", skill: "cultureLaw", bonus: 10 },
         { category: "social", skill: "diplomacy", bonus: 10 },
         { category: "espionage", skill: "security", bonus: 10 },
      ],
   },

   {
      name: "Insurgent",
      description:
         "You were an anti-capitalist spy, who specialised in infiltrating organisations to either bring them down or cause them irreparable harm. Insurgents are often former wage slaves who bear a heavy grudge against the company that once employed them. The difference between being an insurgent and a freedom fighter is that you mostly work alone – the company will be scanning all your communications, so you must follow your own code and instincts as you strike against them. Insurgents can be pranksters or violent terrorists, and are particularly common (and despised) in the Federation, where companies have near carte blanche to act as they please.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 20 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "espionage", skill: "security", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 10 },
      ],
   },

   {
      name: "Corporate Security",
      description:
         "The private military forces of the corporations vary hugely, between the advanced, highly regimented navies of Sirius to the overbearing thugs of the Achilles Corporation. Regardless, it is the job of Corporate Security to lay down their lives for the company, to be the blood and muscle shield between them and the seething masses of the public. Security guards vary, somewhat, in their levels of loyalty, but all are trained in security measures, restraining intruders, and bullying staff who take too long in the toilet.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "espionage", skill: "security", bonus: 20 },
      ],
   },

   // =========================
   // DLC - MILITARY
   // =========================

   {
      name: "Federal Reservist",
      description:
         "The Federation military is constantly planning for the war to end all wars – a direct confrontation with the Imperial navy. The trouble is they don’t want to pay for it, at least not all the time. Rather than have billions of troops on constant standby, the Federation runs a volunteer military program for patriotic reservists. Such men and women are wannabe soldiers, either unfit for full service or too bound to civilian life to be willing to devote their entire lives to the cause. Some reservists are quiet patriots who patiently wait for their nation to call them up. Others will never cease to remind their friends and neighbours that they are fully-trained soldiers, even going so far as to wear their uniform off duty.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "social", skill: "intimidate", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 10 },
      ],
   },

   {
      name: "Slave Soldier",
      description:
         "The tradition of slavery is an entrenched component of Imperial society. Despite the nauseous feelings it provokes in other nations, slavery remains a publicly popular option for insolvent Imperial citizens. Victims of legal cases, poor students, and rash entrepreneurs all benefit from a system that removes all debt and prevents them from being executed by the internal security force. Being a slave soldier for the Empire is actually a rather lucky placement. Few people want to mess with the Imperial navy, so it is safer than it seems. However you have to be quite wily; a slave gets the worst equipment, quarters, and rations of any serving soldier in the navy.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 10 },
         { category: "social", skill: "charm", bonus: 10 },
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "vehicle", skill: "vehicleWeapons", bonus: 10 },
      ],
   },

   {
      name: "Military Courier",
      description:
         "Everyone uses the network to communicate. It links separate star systems, connects cities and people, and lets you talk, flirt and threaten your way across the galaxy. Of course, it’s hopelessly compromised. Everyone is listening, and agents of the various powers scour every word for potential espionage, criminal or blackmail material. The militaries of all the great powers only use the network for the most routine communications. All other messages are sent in person, by ship or bike, directly to the receiver. Getting in on this action is good, steady work, although it can be dangerous. The messages you are transporting carry great value and the risk of being intercepted by enemy agents always lingers in the background.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 10 },
         { category: "vehicle", skill: "navigation", bonus: 10 },
         { category: "vehicle", skill: "shipPiloting", bonus: 10 },
         { category: "vehicle", skill: "vehiclePiloting", bonus: 10 },
         { category: "vehicle", skill: "vehicleWeapons", bonus: 10 },
      ],
   },

   // =========================
   // DLC - EXPLORATION
   // =========================

   {
      name: "Big Game Hunter",
      description:
         "Some people only feel big when shooting defenceless animals at extreme range with advanced weaponry. For a minority, however, the real challenge comes from shooting animals that could rip your face off at extreme range with advanced weaponry. Naturally, anyone who intends to bag anything bigger than a Borchuck isn’t going to fight fair, and neither do you. Quiet, deadly, and with your own code of honour that doesn’t include animal rights, you are the bane of deadly predators everywhere. Get down the Rail Rifle – it’s time to go duck hunting!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 20 },
         { category: "espionage", skill: "survival", bonus: 20 },
      ],
   },

   {
      name: "Castaway",
      description:
         "You were stranded on a distant earth-like world for more than a decade, and had to survive using basic tools and ingenuity. You never expected to be rescued, and now you are back in civilisation, and with all the noise and fury of modern living you feel a little lost. The wilderness calls to you again, and you know that your destiny lies amongst the mysterious and ancient stars of distant worlds.",
      choices: 1,
      enhancement: "Survivalist",
      skills: [
         { category: "espionage", skill: "survival", bonus: 20 },
         { category: "combat", skill: "meleeWeapons", bonus: 10 },
      ],
   },

   {
      name: "Xenobiologist",
      description:
         "Humans have always needed other life-forms for survival, whether for medicine, or labour. That hasn’t stopped now humanity has exploded into the galaxy. Microbes need to be examined, alien animals studied and dissected. New compounds can be found in infinite variety across the myriad of Earth-like worlds in the universe. As a trained Xenobiologist, you hunger for new specimens and deadly new bacteria to examine. It’s an exciting time, and your research is just beginning!",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "science", bonus: 20 },
         { category: "intelligence", skill: "medicine", bonus: 20 },
         { category: "vehicle", skill: "systems", bonus: 10 },
      ],
   },

   // =========================
   // DLC - SUPERTRADERS
   // =========================

   {
      name: "Disgraced Banker",
      description:
         "Successful banks take risks, and expect their employees to do the same. When an employee screws up (i.e. loses the bank a lot of money), the bank will sack them in disgrace for taking exactly the kind of risk they have been expected to take. These rules are well understood in the banking and stock market community, but that didn’t make it any less painful when the bank dumped you and began co-operating with the police to stitch you up. Escaping the cops has been an education in itself. Lucky you stashed away a cheap ship just in case this sort of thing happened…",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "combat", skill: "dodge", bonus: 10 },
         { category: "combat", skill: "energyWeapons", bonus: 10 },
         { category: "intelligence", skill: "tactics", bonus: 10 },
         { category: "social", skill: "trading", bonus: 20 },
      ],
   },

   {
      name: "Labour Slave",
      description:
         "You are an escaped slave who was condemned to perform back-breaking labour. You might be a disillusioned Imperial citizen enslaved for debts, or a poor frontier civilian captured by slaver gangs such as the Kumo Crew. Your treatment has been appalling and degrading, and to escape you have taken lives with your bare hands. One day you might be able to bring yourself to talk about it, but for the moment you keep your eyes forward and the past far behind, staving off sleep for days at a time with caffeine pills and stimulants.",
      choices: 1,
      enhancement: "Strong & Tough",
      skills: [
         { category: "combat", skill: "fighting", bonus: 10 },
      ],
   },

      {
      name: "Pit Fighter",
      description:
         "You were a minor holovision celebrity, who fought in staged fights in filthy mud-filled pits. The show was supposed to be set on the rugged frontier world of New America in Quince, but was in fact filmed on Cubeo 3, on a comfortable set in the heart of the metropolis of Chengarn. The show followed your scripted life, your torrid love affairs, and even the occasional pit fight.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "social", skill: "bluff", bonus: 10 },
         { category: "social", skill: "charm", bonus: 20 },
         { category: "combat", skill: "fighting", bonus: 10 },
         { category: "combat", skill: "parry", bonus: 10 },
      ],
   },

   // =========================
   // EVOLUTION V3
   // =========================

   {
      name: "Synth",
      description:
         "Your organic Body was converted into a fully cybernetic one. This could have been done by one of the major Powers for a War long past, as part of an incurable disease, or simply because you wanted to. This Background uses the Playing as an Android rules and is a combination of the Cyborg and Gene Mod Baby Backgrounds. You can't use these two Backgrounds if you select Synth.",
      choices: 2,
      enhancement: "Start with 100,000cr worth of Cybernetics; +2 Cybernetic Affinity",
      skills: [],
   },

   {
      name: "Sharpshooter",
      description:
         "You are trained to wait days without moving. You are one with your Rifle, it is your best friend that you know for many many years. You are trained to kill without feeling, without remorse, with a single, well placed shot.",
      choices: 2,
      enhancement: "",
      skills: [
         { category: "combat", skill: "kineticWeapons", bonus: 20 },
         { category: "combat", skill: "energyWeapons", bonus: 20 },
         { category: "espionage", skill: "stealth", bonus: 20 },
         { category: "social", skill: "perception", bonus: 20 },
         { category: "espionage", skill: "survival", bonus: 20 },
      ],
   },

   {
      name: "Demolitionist",
      description:
         "You have been trained in using Heavy Weapons and Explosives.",
      choices: 1,
      enhancement: "Strong",
      skills: [
         { category: "combat", skill: "grenade", bonus: 20 },
         { category: "combat", skill: "heavyWeapons", bonus: 10 },
      ],
   },

   {
      name: "Coms Specialist",
      description:
         "During your time as a Coms Specialist you learned how to operate long range Communication Equipment and guide Orbital Strikes. Lucky for you, some of the old Codes have never changed.",
      choices: 1,
      enhancement: 'Enhanced "Hands of God" Karma Ability; costs 6 Karma instead of 8',
      skills: [
         { category: "intelligence", skill: "computer", bonus: 10 },
         { category: "vehicle", skill: "systems", bonus: 10 },
         { category: "intelligence", skill: "planetaryKnowledge", bonus: 10 },
      ],
   },

   {
      name: "Prospector",
      description:
         "You were a Worker for a large Mining Corporation specialised on extraction of rare Minerals from Asteroids, be it with Mining Lasers or Seismic Charges. Some consider it boring, but for you each Belt was an Adventure.",
      choices: 1,
      enhancement: "Awareness",
      skills: [
         { category: "intelligence", skill: "planetaryKnowledge", bonus: 10 },
         { category: "vehicle", skill: "shipPiloting", bonus: 10 },
         { category: "vehicle", skill: "shipWeapons", bonus: 10 },
      ],
   },

   {
      name: "Trained Assassin",
      description:
         "You have been trained to become a cold blooded Killer one day. You know how to study your Target, you know when and where to strike. They never knew you were there.",
      choices: 1,
      enhancement: "",
      skills: [
         { category: "intelligence", skill: "medicine", bonus: 10 },
         { category: "espionage", skill: "stealth", bonus: 10 },
         { category: "espionage", skill: "athletics", bonus: 10 },
         { category: "combat", skill: "meleeWeapons", bonus: 10 },
         { category: "combat", skill: "kineticWeapons", bonus: 10 },
      ],
   },

   {
      name: "Goldskin",
      description:
         "You were born on the Planet Bedaho, where bacteria are responsible for turning the Skin of your ancestors - and your own - golden. This rare mutation makes you an eyecatcher and often the centre of attention, so you learned very early how to use Makeup and Clothes to hide your Skin.",
      choices: 1,
      enhancement: "Confident",
      skills: [
         { category: "social", skill: "charm", bonus: 20 },
         { category: "espionage", skill: "stealth", bonus: 10 },
      ],
   },
];

export const karmaCapabilities = [
   // ============================================================
   // CORE
   // ============================================================

   {
      name: "Avoid Lock",
      category: "vehicleCombat",
      cost: 3,
      description:
         "Hearing the tell-tale bleep of a missile lock, you swerve your SRV violently left and right to confuse the enemy's targeting systems.",
      prerequisite: "",
      effect:
         "Missiles cannot target your vehicle until your next turn.",
      source: "core",
   },

   {
      name: "Blur of Steel",
      category: "personalCombat",
      cost: 3,
      description:
         "Your blade flashes and swipes before the enemy, before slicing in from an unexpected direction.",
      prerequisite: "",
      effect: "Add a +2 bonus to the Melee attack you just made.",
      source: "core",
   },

   {
      name: "Break Right!",
      category: "vehicleCombat",
      cost: 2,
      description:
         "Your eyes flash as you spot the enemy turret hone in on your SRV. At the last moment you turn sharply to the right to throw off their aim.",
      prerequisite: "",
      effect:
         "Gain a +2 bonus to your Vehicle Defence against an attack that would hit you.",
      source: "core",
   },

   {
      name: "Crack Shot",
      category: "personalCombat",
      cost: 4,
      description:
         "In the midst of the firefight you find an inner moment of calm. Time seems to slow as you carefully aim your weapon at the enemy.",
      prerequisite: "",
      effect:
         "Add a +2 bonus to the Kinetic, Energy or Heavy Weapon attack you just made.",
      source: "core",
   },

   {
      name: "Diligent Medic",
      category: "any",
      cost: 3,
      description:
         "You have to get your friend back on their feet. You redress their bandages and give them an extra shot of stimulants.",
      prerequisite: "",
      effect:
         "You can use a Medpack on someone again, even if they have already been treated within the last six hours.",
      source: "core",
   },

   {
      name: "Dive Aside",
      category: "personalCombat",
      cost: 5,
      description:
         "The house detonates behind you, and you hurl yourself through the air to escape the explosion.",
      prerequisite: "",
      effect:
         "Gain a +5 bonus to your Defence (Dodge) against an attack that would hit you.",
      source: "core",
   },

   {
      name: "Duck!",
      category: "personalCombat",
      cost: 2,
      description:
         "Your adrenaline pumping, you lurch aside as the energy beam sizzles across your flight suit.",
      prerequisite: "",
      effect:
         "Gain a +2 bonus to your Defence (Dodge) against an attack that would hit you.",
      source: "core",
   },

   {
      name: "Eat Lead Sucker!",
      category: "personalCombat",
      cost: 5,
      description:
         "Your enemy's body jerks and writhes, as every bullet from your autopistol impacts into their body.",
      prerequisite: "",
      effect:
         "If you hit your target with a Burst Weapon, inflict maximum Burst damage on them.",
      source: "core",
   },

   {
      name: "Escape Death",
      category: "anyCombat",
      cost: 0,
      description:
         "You emerge from the ashes of the burning tank, brushing the dust casually from your jacket as you do so.",
      prerequisite: "You cannot use this if your Karma score is 0.",
      effect:
         "Escape or avoid an attack that just killed you or reduced your Endurance to less than 1. Reduce your Karma Points to 0.",
      source: "core",
      free: true,
      specialCost: "all",
   },

   {
      name: "Everybody Pipe Down",
      category: "any",
      cost: 4,
      description:
         "You peek around the corner to see a platoon of heavily armed corporate soldiers. You raise your hand to your crouching comrades to silence them.",
      prerequisite: "",
      effect:
         "You and allies gain a +2 bonus to Stealth Checks.",
      source: "core",
   },

   {
      name: "Fire in the Hold",
      category: "personalCombat",
      cost: 3,
      description:
         "The smuggler looks down casually to see what just landed square at his feet. It's the last thing he ever sees.",
      prerequisite: "",
      effect:
         "You can re-roll a scatter when missing with a grenade.",
      source: "core",
   },

   {
      name: "Handbrake Turn",
      category: "vehicleCombat",
      cost: 5,
      description:
         "It might invalidate the warranty on your SRV, but you wrench the handbrake and skid sharply aside as the cannon shot thuds into the ground ahead of you.",
      prerequisite: "",
      effect:
         "Gain a +5 bonus to your Vehicle Defence against an attack that would hit you.",
      source: "core",
   },

   {
      name: "Get Down!",
      category: "personalCombat",
      cost: 3,
      description:
         "You instinctively duck as an attack sails over your head.",
      prerequisite: "Choose an ally that you can see and who can hear you.",
      effect:
         "The chosen ally gains a +2 bonus to their Defence (Dodge or Parry) against an attack that just hit them.",
      source: "core",
   },

   {
      name: "Get Me Outta Here!",
      category: "spaceshipOrVehicleCombat",
      cost: 3,
      description:
         "You activate thrusters, dive and then pull up sharply, desperately hoping this will shake the enemy off your tail.",
      prerequisite: "",
      effect:
         "Gain a +4 bonus to your Pursuit check when disengaging.",
      source: "core",
   },

   {
      name: "Get Some Grip",
      category: "vehicleCombat",
      cost: 2,
      description:
         "Wrestling with the steering wheel you manage to keep the cargo truck under control as you slam on the brakes.",
      prerequisite: "",
      effect:
         "Gain a +5 bonus to your Vehicle Piloting check to avoid Obstacles.",
      source: "core",
   },

   {
      name: "Ghost",
      category: "any",
      cost: 2,
      description:
         "You vanish into the crowd, keeping a close eye on the enemy spy as she anxiously looks around herself.",
      prerequisite: "",
      effect:
         "Gain a +4 bonus to Stealth Checks when following someone.",
      source: "core",
   },

   {
      name: "Hard Boiled",
      category: "personalCombat",
      cost: 8,
      description:
         "It's time to take these fools down. Pulling a spare gun from your coat you leap through the doorway, guns blazing.",
      prerequisite:
         "You must be holding a one-handed Energy or Kinetic weapon in each hand and must not be knocked over.",
      effect:
         "Make two ranged weapon attacks, one with each gun in your hands, with no penalties for using two guns at the same time. Additionally, your Defence (Dodge) is 10 until your next turn.",
      source: "core",
   },

   {
      name: "Honey Trap",
      category: "any",
      cost: 4,
      description:
         "You saunter by your mark, just close enough so your perfume can waft by his nose. He turns, looks and is smitten in a second.",
      prerequisite:
         "You must be in a non-hostile situation to use this Skill.",
      effect:
         "Rather than Charm someone, you can attempt to seduce them. Provided you are sexually compatible, make a Charm Skill Check against the target's Insight Skill Check. If successful, the target becomes more gullible and cannot add their Insight Bonus to further Charm, Bargain or Diplomacy checks against them.",
      source: "core",
   },

   {
      name: "I Have You Now...",
      category: "spaceshipCombat",
      cost: 3,
      description:
         "The enemy Eagle twists and turns but cannot escape your sights. You stick close to the enemy's tail and open fire.",
      prerequisite: "",
      effect:
         "Gain a +2 bonus to your current Dogfighting check.",
      source: "core",
   },

   {
      name: "In There First",
      category: "anyCombat",
      cost: 3,
      description:
         "Your weapon is out even as the pirate is reaching for his holster.",
      prerequisite: "",
      effect:
         "Gain a +5 bonus to your Initiative check.",
      source: "core",
   },

   {
      name: "Incoming!",
      category: "personalCombat",
      cost: 3,
      description:
         "You have an allergy to high explosives and no one can run as fast as you when the shoulder-mounted missile launchers come out.",
      prerequisite: "",
      effect:
         "If you are in the fatal radius of the explosive, move until you are in the injury radius. If you are in the injury radius, move until you are outside the radius. Those adjacent to you can do the same.",
      source: "core",
   },

   {
      name: "Instinctive Aim",
      category: "spaceshipCombat",
      cost: 4,
      description:
         "You pull the trigger even before the enemy obligingly flies into your sights.",
      prerequisite: "",
      effect:
         "Add a +2 bonus to the Spaceship or Vehicle attack you just made.",
      source: "core",
   },

   {
      name: "Jink",
      category: "spaceshipCombat",
      cost: 2,
      description:
         "You never keep your ship flying in a straight line, your lateral thrusters flaming as you bob and weave through space.",
      prerequisite: "",
      effect:
         "Gain a +2 bonus to your Spaceship Defence against an attack that would hit you.",
      source: "core",
   },

   {
      name: "Karmic Missile",
      category: "spaceshipCombat",
      cost: 3,
      description:
         "Perhaps the enemy's countermeasures didn't engage. Perhaps the missile's targeting systems are faulty. Either way this missile seems to ignore the countermeasures used against it.",
      prerequisite: "",
      effect:
         "ECM and Point Defence Counter Measures have no effect against this missile attack.",
      source: "core",
   },

   {
      name: "Last Minute Deflection",
      category: "personalCombat",
      cost: 3,
      description:
         "You knock aside the cyborg's wrist just as its terrible cyberclaws slash towards your face.",
      prerequisite: "",
      effect:
         "Gain a +3 bonus to your Parry against an attack that would hit you.",
      source: "core",
   },

   {
      name: "Liar, Liar!",
      category: "any",
      cost: 2,
      description:
         "You know when someone is lying to you.",
      prerequisite: "",
      effect:
         "If you are making an Insight check to determine if someone is lying to you, gain a +4 bonus.",
      source: "core",
   },

   {
      name: "Line 'Em Up!",
      category: "spaceshipCombat",
      cost: 3,
      description:
         "You roll your Anaconda on its axis, allowing your turrets to blast the harassing Vulture one by one.",
      prerequisite: "",
      effect:
         "When firing broadsides in spaceship combat, you can keep firing at the same target even if you miss with a turret.",
      source: "core",
   },

   {
      name: "Point Blank Shot",
      category: "personalCombat",
      cost: 3,
      description:
         "Sighing wearily, you shoot the swordsman right in the face.",
      prerequisite: "",
      effect:
         "When making an attack at point blank range, you do not provoke a free attack.",
      source: "core",
   },

   {
      name: "Power Bounce",
      category: "vehicleCombat",
      cost: 5,
      description:
         "You just can't shake that enemy track-biker. Activating your thrusters just as you crest a hill, you soar into the air.",
      prerequisite:
         "You must start up-close in vehicle combat and be moving at Speed 3 or more.",
      effect:
         "Use your action to activate your thrusters to bound away from combat. Fire your turret, if you have one, at any target up-close and then move yourself to at-distance. Enemies cannot pursue you.",
      source: "core",
   },

   {
      name: "Resuscitate",
      category: "any",
      cost: 8,
      description:
         "You press on your fallen ally's chest to try and restart their heart.",
      prerequisite:
         "A party member must have been killed within the last minute.",
      effect:
         "Make a Difficulty 13 Medicine check. On a success they do not die, but remain unconscious for 24 hours with 0 Endurance. You can attempt this multiple times if you have enough Karma.",
      source: "core",
   },

   {
      name: "Riposte",
      category: "personalCombat",
      cost: 1,
      description:
         "Sword blades clash in a whirl of steel. You exploit your enemy's failed counter attack.",
      prerequisite:
         "An enemy who counter attacked you misses and you used your Parry defence.",
      effect:
         "You can counter attack your enemy's counter attack.",
      source: "core",
   },

   {
      name: "Skill Boost",
      category: "any",
      cost: 2,
      description:
         "The pressure is on. You focus all your ability into one critical Skill check.",
      prerequisite:
         "Pick a non-Personal Combat or Vehicle Skill when you choose this Karmic Capability.",
      effect:
         "Gain a +2 bonus to your chosen Skill for this Skill check.",
      source: "core",
      variable: true,
   },

   {
      name: "Slam",
      category: "personalCombat",
      cost: 2,
      description:
         "You ram your fist under the pirate's jaw. He drops like a sack of potatoes.",
      prerequisite:
         "You have just hit an opponent with a Melee or Fighting attack.",
      effect:
         "The enemy is knocked over, regardless of the damage result.",
      source: "core",
   },

   {
      name: "Spin Wildly",
      category: "spaceshipCombat",
      cost: 5,
      description:
         "Laser bolts scream past you harmlessly as you spin your ship through the firestorm.",
      prerequisite: "",
      effect:
         "Gain a +5 bonus to your Spaceship Defence against an attack that would hit you.",
      source: "core",
   },

   {
      name: "Spinning Kick",
      category: "personalCombat",
      cost: 3,
      description:
         "You smoothly parry the attack, spinning round as you strike your opponent.",
      prerequisite:
         "You have just parried and the enemy missed you.",
      effect:
         "Make a Fighting attack against the enemy who just attacked you. They do not add their Parry or Dodge bonus against this attack. You can then make a counterattack.",
      source: "core",
   },

   {
      name: "Stay Standing",
      category: "personalCombat",
      cost: 1,
      description:
         "You stagger, but do not fall as the shotgun pellets crack into your breastplate.",
      prerequisite: "",
      effect:
         "An attack that just hit you does not knock you down.",
      source: "core",
   },

   {
      name: "Sucker Punch",
      category: "personalCombat",
      cost: 2,
      description:
         "You craftily sneak another punch in when the enemy least expects it.",
      prerequisite:
         "You just made a Fighting attack, whether that attack hits or misses.",
      effect:
         "Make another Fighting attack immediately, ignoring the enemy's Dodge or Parry bonus.",
      source: "core",
   },

   {
      name: "Swipe",
      category: "vehicleCombat",
      cost: 4,
      description:
         "You smash your SRV across the side of the truck, sending it careering off the road.",
      prerequisite: "",
      effect:
         "Instead of firing your weapons, make a Ram attack with a +2 bonus To Hit. If you hit, you take half normal damage and do not go out of control. Your enemy takes full damage and must make two Obstacle Checks on their next turn.",
      source: "core",
   },

   {
      name: "Without Even Looking...",
      category: "personalCombat",
      cost: 4,
      description:
         "Your laser pistol sizzles through the enemy as another opponent tries to sneak up behind you.",
      prerequisite:
         "You must have a one-handed Energy or Kinetic weapon in your hand and have just attacked and hit an opponent in front of you.",
      effect:
         "Make a ranged attack against a different enemy behind or to the side of you with your one-handed Energy or Kinetic weapon. You suffer no penalty To Hit.",
      source: "core",
   },

   {
      name: "Worse Than It Looks",
      category: "spaceshipCombat",
      cost: 3,
      description:
         "Don't worry, kid, they'll never hit the power plant from here... oh...",
      prerequisite: "",
      effect:
         "When targeting a ship's components, do not suffer any penalties To Hit.",
      source: "core",
   },

   // ============================================================
   // DLC - SUPERTRADERS
   // ============================================================

   {
      name: "Burnout",
      category: "spaceshipCombat",
      cost: 3,
      description:
         "You grit your teeth as your multi-cannons rip across the enemy hull, tearing into its thrusters.",
      prerequisite:
         "The attack must have damaged the hull of the enemy spaceship.",
      effect:
         "This attack becomes a critical hit.",
      source: "superTraders",
   },

   {
      name: "Rapid Deployment",
      category: "spaceshipCombat",
      cost: 3,
      description:
         "Your ship-launched fighter soars out of the mothership, guns blazing even as it swoops from the hangar.",
      prerequisite: "",
      effect:
         "If you are flying the fighter, you can use this Karma Capability yourself. Otherwise grant it to a ship that has just launched from your hangar. The fighter immediately takes its turn, then rolls Initiative normally.",
      source: "superTraders",
   },

   {
      name: "Secret Markets",
      category: "any",
      cost: 2,
      description:
         "You barely glance at the commodity market board. That's not where the real deals are made.",
      prerequisite: "",
      effect:
         "Re-roll a result you or the GM just made on the Advanced Trading tables, then choose which result applies.",
      source: "superTraders",
   },

   {
      name: "Terrain Breaking",
      category: "vehicleCombat",
      cost: 1,
      description:
         "You like to use the terrain to alter the speed of your vehicle.",
      prerequisite:
         "The terrain must not be perfectly flat.",
      effect:
         "You can accelerate or decelerate 1 point extra.",
      source: "superTraders",
   },

   // ============================================================
   // DLC - MILITARY
   // ============================================================

   {
      name: "3D Thinking",
      category: "spaceshipCombat",
      cost: 2,
      description:
         "Newtonian physics don't faze you. You can spin and jink your ship just as well with Flight Assist Off.",
      prerequisite:
         "You have just completed the Flight Assist Off action.",
      effect:
         "You can keep your spaceship's Agility score when calculating your Defence.",
      source: "military",
   },

   {
      name: "Drill Sergeant",
      category: "any",
      cost: 1,
      description:
         "Soldiers respect you. Or are frightened by your loud voice. Either is fine.",
      prerequisite: "",
      effect:
         "You can double your Skill bonus when making a Social skill check to influence military personnel.",
      source: "military",
   },

   {
      name: "Instinct",
      category: "any",
      cost: 4,
      description:
         "You can read your opponent like an open book.",
      prerequisite: "",
      effect:
         "When you or an opponent makes a Chicken attack, your opponent must declare if they are going to impact or evade before you.",
      source: "military",
   },

   {
      name: "Penetrating Shot",
      category: "personalCombat",
      cost: 5,
      description:
         "You peer through the sights of your rifle, lining up the weak chink of armour between the shoulder and joint.",
      prerequisite: "",
      effect:
         "When your opponent takes damage, their armour absorption is ignored for this attack.",
      source: "military",
   },

   // ============================================================
   // DLC - EXPLORATION
   // ============================================================

   {
      name: "Hunter",
      category: "personalCombat",
      cost: 1,
      description:
         "You are an expert at hunting dangerous alien creatures.",
      prerequisite:
         "The target must be an Alien Animal or Biomod.",
      effect:
         "When making an attack roll against an Alien Animal or Biomod, add your Survival Skill bonus as well as the relevant weapon Skill bonus.",
      source: "exploration",
   },

   {
      name: "Iron Willed",
      category: "personalCombat",
      cost: 3,
      description:
         "They've tried for days to make you crack. Drugs, water-boarding, bright lights... they'll never break you.",
      prerequisite: "",
      effect:
         "You are unaffected by any attack or condition that causes you to hallucinate or lose control of your actions.",
      source: "exploration",
   },

   {
      name: "Concentration",
      category: "any",
      cost: 3,
      description:
         "You focus your thoughts to find a solution to a problem.",
      prerequisite:
         "You have just failed a Skill check.",
      effect:
         "You can re-roll the failed Skill check.",
      source: "exploration",
   },

   {
      name: "Don't Give Out On Me Yet!",
      category: "spaceshipCombat",
      cost: 5,
      description:
         "Your thrusters are hanging by a thread... but they're okay!",
      prerequisite:
         "A component has just been reduced to 0 Strength by a critical hit.",
      effect:
         "The component is instead reduced to 5 Strength points and still functions.",
      source: "exploration",
   },

   // ============================================================
   // DLC - ESPIONAGE
   // ============================================================

   {
      name: "Follow Up",
      category: "personalCombat",
      cost: 6,
      description:
         "The gangster's body jolts as the rounds from your autopistol slam into him. You don't let up.",
      prerequisite:
         "You have just scored a hit with a ranged weapon against an opponent.",
      effect:
         "Make another attack with the same weapon against the opponent immediately.",
      source: "espionage",
   },

   {
      name: "Weak Point",
      category: "personalCombat",
      cost: 3,
      description:
         "Your eye flicks to the gap between the walker's plated armour.",
      prerequisite:
         "You have just hit your opponent with a ranged attack but have not yet rolled the Damage.",
      effect:
         "Have your opponent make a Hardened armour check. Opponents wearing armour without the Hardened quality fail automatically. If they fail, their armour does not protect them against the damage from this attack.",
      source: "espionage",
   },

   {
      name: "Kiss, Kiss, Bang, Bang",
      category: "personalCombat",
      cost: 4,
      description:
         "You charm your target before revealing your weapon.",
      prerequisite:
         "You must be alone with your target and have just completed a successful Charm Skill check.",
      effect:
         "Automatically hit your target with a carried One-Handed weapon. Burst weapons roll maximum dice; otherwise the weapon inflicts double damage.",
      source: "espionage",
   },

   {
      name: "Quick Loader",
      category: "personalCombat",
      cost: 2,
      description:
         "As the last bullet spits from your assault rifle, you rip the clip out and replace it with fluidity and speed.",
      prerequisite:
         "You have just used the last ammo point on a weapon you were firing and have a spare clip.",
      effect:
         "Immediately reload the weapon. This does not use up your next turn's action.",
      source: "espionage",
   },

   // ============================================================
   // EVOLUTION
   // ============================================================

   {
      name: "Adrenaline Junkie",
      category: "personalCombat",
      cost: 4,
      description:
         "Getting a high from being in the action, an adrenaline junkie cares little for their own well-being.",
      prerequisite: "",
      effect:
         "Use the Run Action from one Cover to another and avoid Readied Actions against you. You can avoid one Action per 20 Dodge.",
      source: "evolution",
   },

   {
      name: "Focused Insight",
      category: "any",
      cost: 6,
      description:
         "Using an advanced meditation technique, you focus your thoughts to find a solution to a problem.",
      prerequisite: "",
      effect:
         "Roll an additional 1d10 on your Skill Check. This must be used before the roll.",
      source: "evolution",
   },

   {
      name: "Malware Hack",
      category: "personalCombat",
      cost: 4,
      description:
         "You have done this a thousand times before. Hack into the System, deliver the Virus, and watch the Network burn.",
      prerequisite: "",
      effect:
         "Deal 50% of your Computer Skill Score as Damage to a Device or Drone. Roll 1d10. On a natural 10, this Ability deals 100% Damage instead.",
      source: "evolution",
   },

   {
      name: "Tough It Out",
      category: "personalCombat",
      cost: 6,
      description:
         "You know you are at your limit, but you can't give up yet.",
      prerequisite: "",
      effect:
         "Remove all Nonlethal Damage you have taken. Add it back at the end of Combat.",
      source: "evolution",
   },

   {
      name: "Hand of God",
      category: "combinedScaleCombat",
      cost: 8,
      description:
         "If you need to make an impression, raise your hand skyward holding your com and send a hacked transmission into orbit.",
      prerequisite:
         "Requires a Fleet in orbit. Cannot be performed on civilian or high-security Worlds.",
      effect:
         "Trigger a random Orbital Strike.",
      source: "evolution",
   },

   {
      name: "Poker Face",
      category: "any",
      cost: 6,
      description:
         "Your Poker Face is perfect. Years of Gambling experience made you cold and calculating.",
      prerequisite: "",
      effect:
         "Use your Gambling Skill Bonus instead of another Social Skill Bonus.",
      source: "evolution",
   },

   {
      name: "Lucky Shot",
      category: "personalCombat",
      cost: 2,
      description:
         "Your last Arrow, your last chance. You take aim and fire, hoping that the Poison takes effect.",
      prerequisite: "",
      effect:
         "Your Attack is guaranteed to trigger its On-Hit Effects.",
      source: "evolution",
   },

   {
      name: "Critical Strike",
      category: "personalCombat",
      cost: 8,
      description:
         "Some are simply more lucky than others. Today it is you.",
      prerequisite:
         "You have just hit with an attack.",
      effect:
         "The attack you just hit with is turned into a critical hit.",
      source: "evolution",
   },

   {
      name: "Percussive Maintenance",
      category: "personalCombat",
      cost: 2,
      description:
         "Sometimes the best tool is a good whack.",
      prerequisite: "",
      effect:
         "Immediately clear your Weapon malfunction by hitting it. After combat, you have to fix it the normal way.",
      source: "evolution",
   },
];

export const professions = [
   {
      name: "Animal Tamer",
      description:
         "You can now influence Animals with your Social Skills. If you spend enough time with an Animal, you can attempt to Tame it. The Success has to be decided by the GM.",
      requirements: [
         {
            type: "skills",
            skills: [
               { skill: "survival", value: 40 },
               { skill: "charm", value: 40 },
            ],
         },
      ],
      effect:
         "You can influence Animals with Social Skills and attempt to Tame them.",
      free: false,
   },

   {
      name: "Assassin",
      description:
         "You can now perform the Assassination Action. You can never poison yourself with your own Toxins and you have a +2 Bonus on the Endurance Check to resist Toxins.",
      requirements: [
         {
            type: "or",
            options: [
               {
                  type: "skills",
                  skills: [
                     { skill: "stealth", value: 40 },
                     { skill: "medicine", value: 40 },
                     { type: "anyWeapon", value: 40 },
                  ],
               },
               {
                  type: "background",
                  background: "Trained Assassin",
               },
            ],
         },
      ],
      effect:
         "You can perform the Assassination Action. You cannot poison yourself with your own Toxins and gain +2 on Endurance Checks against Toxins.",
      free: false,
   },

   {
      name: "Digital Shadow",
      description:
         "You will never trigger an Alarm or reveal your Location when you fail a Computer or Security Check, unless you fail critically with a natural 1.",
      requirements: [
         {
            type: "or",
            options: [
               {
                  type: "skills",
                  skills: [
                     { skill: "computer", value: 40 },
                     { skill: "security", value: 40 },
                  ],
               },
               {
                  type: "background",
                  background: "Hacker",
               },
            ],
         },
      ],
      effect:
         "Failed Computer or Security Checks do not trigger an Alarm or reveal your Location unless you roll a natural 1.",
      free: false,
   },

   {
      name: "Drone Commander",
      description:
         "You can identify Drones without a Skill Check and give your own Drones more advanced Commands.",
      requirements: [
         {
            type: "or",
            options: [
               {
                  type: "skills",
                  skills: [
                     { skill: "drones", value: 40 },
                     { skill: "computer", value: 40 },
                  ],
               },
               {
                  type: "background",
                  background: "Drone Controller",
               },
            ],
         },
      ],
      effect:
         "You can identify Drones without a Skill Check and give your own Drones advanced Commands.",
      free: false,
   },

   {
      name: "Experimental Engineer",
      description:
         "You are treated as Engineer when modifying a Module and you are allowed to apply Experimental Engineering to Ship Weapons.",
      requirements: [
         {
            type: "or",
            options: [
               {
                  type: "skills",
                  skills: [
                     { skill: "repair", value: 40 },
                     { skill: "science", value: 40 },
                  ],
               },
               {
                  type: "background",
                  background: "Engineer",
               },
            ],
         },
      ],
      effect:
         "You are treated as Engineer when modifying a Module and may apply Experimental Engineering to Ship Weapons.",
      free: false,
   },

   {
      name: "Grenadier",
      description:
         "You can identify Grenades and other launched explosives without a Skill Check even when they are thrown or fired at you and you know the Blast Radius for all of them. Throwing back a Grenade succeeds with a 6 instead of an 8.",
      requirements: [
         {
            type: "skills",
            skills: [
               { skill: "explosives", value: 40 },
               { skill: "heavyWeapons", value: 40 },
            ],
         },
      ],
      effect:
         "You can identify Grenades and launched explosives without a Skill Check, know their Blast Radius, and Throwing back a Grenade succeeds with a 6 instead of an 8.",
      free: false,
   },

   {
      name: "Mercenary",
      description:
         "Allows you to hunt for Bounties in Stations or Cities without having to be cleared by Authorities.",
      requirements: [
         {
            type: "special",
            condition: "cleanBountyRecord",
         },
      ],
      effect:
         "You can hunt for Bounties in Stations or Cities without being cleared by Authorities.",
      free: true,
   },

   {
      name: "Scientist",
      description:
         "You can identify any Drug or Stim without a Skill Check. You can use Lab Equipment and spend Credits to create Stims and Drugs.",
      requirements: [
         {
            type: "or",
            options: [
               {
                  type: "skills",
                  skills: [
                     { skill: "science", value: 40 },
                     { skill: "medicine", value: 40 },
                  ],
               },
               {
                  type: "background",
                  background: "Scientist",
               },
            ],
         },
      ],
      effect:
         "You can identify Drugs and Stims without a Skill Check and use Lab Equipment to create them.",
      free: false,
   },

   {
      name: "Smuggler",
      description:
         "Once per Between Mission you can request to find a Vendor who sells one specific Item that you want. You can sell illegal and stolen Goods at any Station.",
      requirements: [
         {
            type: "skills",
            skills: [
               { skill: "trading", value: 40 },
               { skill: "streetwise", value: 40 },
            ],
         },
      ],
      effect:
         "Once per Between Mission you can request a Vendor for one specific Item and sell illegal or stolen Goods at any Station.",
      free: false,
   },

   {
      name: "Stunt Driver",
      description:
         "You can re-roll Obstacle Checks by using 1 Karma similar to how you can re-roll a failed Skill Check.",
      requirements: [
         {
            type: "skills",
            skills: [
               { skill: "vehiclePiloting", value: 40 },
               { skill: "perception", value: 40 },
            ],
         },
      ],
      effect:
         "You can spend 1 Karma to re-roll an Obstacle Check.",
      free: false,
   },

   {
      name: "Saboteur",
      description:
         "You can identify explosive Mines and Charges without a Skill Check. When not in Combat, you can place them without a Skill Check. You can spend an additional 1 Minute when deploying an Explosive. Explosives placed this way deal double the Damage to Objects and Structures.",
      requirements: [
         {
            type: "skills",
            skills: [
               { skill: "grenade", value: 40 },
               { skill: "tactics", value: 40 },
            ],
         },
      ],
      effect:
         "You can identify Mines and Charges without a Skill Check, deploy them without a Skill Check outside Combat, and deal double Damage to Objects and Structures when spending an additional minute deploying an Explosive.",
      free: false,
   },

   {
      name: "Surgeon",
      description:
         "You are allowed to use specialised Medical Equipment to perform Surgery or even implant Cybernetics.",
      requirements: [
         {
            type: "or",
            options: [
               {
                  type: "skills",
                  skills: [
                     { skill: "medicine", value: 40 },
                     { skill: "cyber", value: 40 },
                  ],
               },
               {
                  type: "background",
                  background: "Trained Doctor",
               },
            ],
         },
      ],
      effect:
         "You can use specialised Medical Equipment to perform Surgery and implant Cybernetics.",
      free: false,
   },

   {
      name: "Weapon Expert",
      description:
         "You can identify any Weapon where your Skill is above 40 without a Skill Check, so you always know the Range, Ammo and Damage, even if an Enemy is using it.",
      requirements: [
         {
            type: "special",
            condition: "twoWeaponSkills40",
         },
      ],
      effect:
         "You automatically know the Range, Ammo and Damage of Weapons for which your Skill is above 40.",
      free: false,
   },
];
export const specialAbilities = [
   {
      name: "Ace Driver",
      description:
         "Your Car is your love. You can never roll below a 6 when you are driving it. Any Roll below 6 is increased to 6.",
      requirements: [
         {
            type: "skills",
            skills: [
               { skill: "vehiclePiloting", value: 80 },
               { skill: "vehicleWeapons", value: 80 },
            ],
         },
         {
            type: "special",
            condition: "ownVehicleMoreThan5Missions",
         },
      ],
      effect:
         "You can never roll below a 6 when driving your own Car. Any Roll below 6 is increased to 6.",
      disadvantage:
         "You are addicted to driving your Car. For each day you have not driven it, you suffer a -1 to all Rolls, stacking up to -4. Bonding with another Car requires a Between Mission.",
   },

   {
      name: "Living Machine",
      description:
         "You have become a Living Machine, either through extensive cybernetics or by being an Android.",
      requirements: [
         {
            type: "or",
            options: [
               {
                  type: "special",
                  condition: "cyberneticArmsLegsInternalsNervousSystem20Karma",
               },
               {
                  type: "bodyType",
                  value: "android",
               },
            ],
         },
      ],
      effect:
         "You can go below 0 Karma with Cybernetics. While below 0 Karma, you can get healed using the Cyber Skill, but Medicine is only half as effective. Your Karma is set to 1, which can only be used for re-rolls and Escape Death.",
      disadvantage:
         "While below 0 Karma, your Karma is set to 1 and can only be used for re-rolls and Escape Death.",
   },

   {
      name: "Ace Pilot",
      description:
         "You know the Ships of your favoured Manufacturer inside and out. You can never roll below a 6 when flying such a Ship.",
      requirements: [
         {
            type: "skills",
            skills: [
               { skill: "shipPiloting", value: 80 },
               { skill: "shipWeapons", value: 80 },
            ],
         },
         {
            type: "special",
            condition: "focusOnSpecificManufacturer",
         },
      ],
      effect:
         "You can never roll below a 6 when flying a Ship of your favoured Manufacturer. Any Roll below 6 is increased to 6.",
      disadvantage:
         "You can never roll above a 5 when flying a Ship of another Manufacturer. Any Roll above 5 is reduced to 5.",
   },

   {
      name: "Master Craftsman",
      description:
         "You have mastered the ability to recreate advanced technology.",
      requirements: [
         {
            type: "skills",
            skills: [
               { type: "anyWeapon", value: 80 },
               { skill: "repair", value: 80 },
               { skill: "science", value: 80 },
            ],
         },
      ],
      effect:
         "Spending Credits and a Between Mission allows you to craft any Rare Item covered by your Weapon Skill, including Weapons locked behind Powers or Factions. The Item costs only 70% of its original Value.",
      disadvantage:
         "One or more Corporations know that you can recreate their Technology. They are after you and will send Assassins and Saboteurs.",
   },
];
export const enhancements = [
   // CORE
   {
      name: "Ambidextrous",
      source: "Core",
      description:
         "You have no ‘main hand’ and can use either equally well.",
      effect:
         "When attacking with a weapon in either hand you suffer a -1 penalty To Hit instead of -2. If you take this Enhancement again you suffer no penalties To Hit at all.",
   },
   {
      name: "Awareness",
      source: "Core",
      description:
         "You rely on pure instinct, and react quickly to danger.",
      effect:
         "When rolling your initiative you may use your Perception bonus instead of your Tactics bonus.",
   },
   {
      name: "Confident",
      source: "Core",
      description:
         "You are utterly at ease with yourself. You could wear a bin liner and look good in it.",
      effect:
         "You no longer suffer Social Factor penalties due to your equipment, armour or cybernetics.",
   },
   {
      name: "Cybernetic Affinity",
      source: "Core",
      description:
         "Your body is extremely tolerant and accepts cybernetic enhancement without problems.",
      effect:
         "Gain 2 Karma points that can only be spent on Cybernetic upgrades. Each time you choose this Enhancement gain another 2 Karma points for Cybernetic upgrades.",
   },
   {
      name: "Dynamic Karma",
      source: "Core",
      description:
         "When it’s time to go crazy you push yourself to the maximum!",
      effect:
         "When you use two Karma Capabilities during your turn you only pay for the most expensive one. If you take this Enhancement again you can use three Karma Capabilities in your turn and only pay for the most expensive one.",
   },
   {
      name: "Hard to Kill",
      source: "Core",
      description:
         "No matter how hard they try, they just can’t keep you down.",
      effect:
         "The first time you take this Enhancement you only die if your Endurance is reduced to a negative number equal to your Endurance maximum. The second time you take this Enhancement your Escape Death Karma Capability only costs a maximum of 4 Karma points.",
   },
   {
      name: "Natural Genius",
      source: "Core",
      description:
         "You have an unusual aptitude in a single Skill.",
      effect:
         "You receive 10 Points for the Skill you select and its Skill Cap is raised by 10. The Hardcap at 100 has been removed, so you can go above 100 at Elite Rank.",
   },
   {
      name: "Quick Runner",
      source: "Core",
      description:
         "You move quickly from one place to another.",
      effect:
         "You can move an additional two metres per turn. You can take this Enhancement a maximum of three times.",
   },
   {
      name: "Strong",
      source: "Core",
      description:
         "You do more damage in close combat and can lift more.",
      effect:
         "You gain a +2 damage bonus in Fighting and Melee combat, and can lift an additional 20kg of weight. Each time you take this Enhancement the bonuses stack, except your Damage bonus cannot go higher than +10.",
   },
   {
      name: "Tough",
      source: "Core",
      description:
         "You can take more damage before falling unconscious.",
      effect:
         "Your Endurance is 5 higher. Each time you gain this Enhancement your Endurance increases by another 5 points, but the maximum human Endurance is 80 without cybernetics.",
   },

   // DLC EXPLORATION
   {
      name: "Survivalist",
      source: "DLC Exploration",
      description:
         "You are particularly skilled at surviving in natural environments.",
      effect:
         "When making Skill checks in a natural environment, you can add your Survival bonus to the check in addition to the relevant Skill bonus. This cannot be applied to technological hurdles or attack rolls.",
   },

   // DLC ESPIONAGE
   {
      name: "Overclocking",
      source: "DLC Espionage",
      description:
         "You are never satisfied with a new ship. You just have to fiddle with it to get that extra level of performance.",
      effect:
         "Whenever you buy a new ship, you can apply engineering enhancements to its components. A Repair Skill score of 40 grants one improvement, 50 grants two and 70 grants three.",
   },

   // DLC SUPERTRADERS
   {
      name: "Vengeful",
      source: "DLC SuperTraders",
      description:
         "Your adrenaline kicks in when you are close to death.",
      effect:
         "If an enemy attack reduces your Endurance to a single digit between 1 and 9, you can immediately make an attack against that enemy if they are in range and visible.",
   },

   // EVOLUTION
   {
      name: "Urbanist",
      source: "Evolution",
      description:
         "You are a child of the big City. Living there is easy. Surviving is not.",
      effect:
         "When making Skill checks in an urban environment, you can add your Streetwise bonus to the check in addition to the relevant Skill bonus.",
   },
   {
      name: "Roboticist",
      source: "Evolution",
      description:
         "You studied Drones, you know their working, their advantages, and their flaws.",
      effect:
         "You gain +1 Critical Hit Chance against Drones and Androids and +2 for Repair and Modification. Assassins can use their Ability against them.",
   },
   {
      name: "Xenoarchaeologist",
      source: "Aliens of the Milkyway",
      description:
         "You have knowledge of alien ruins and their technologies.",
      effect:
         "When making Skill checks in Alien Ruins such as a Thargoid or Guardian Ruin, you can add your Xenotech Bonus to the check in addition to the relevant Skill bonus.",
   },
];