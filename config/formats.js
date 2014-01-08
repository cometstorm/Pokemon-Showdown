// Note: This is the list of formats
// The rules that formats use are stored in data/formats.js

exports.Formats = [

        // XY Singles
        ///////////////////////////////////////////////////////////////////

        {
                name: "Random Battle",
                section: "XY Singles",

                team: 'random',
                ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
        },
        {
                name: "Unrated Random Battle",
                section: "XY Singles",

                team: 'random',
                challengeShow: false,
                rated: false,
                ruleset: ['Random Battle']
        },
		{
                name: "OU",
                section: "XY Singles",

                ruleset: ['Pokemon', 'Standard', 'Team Preview'],
                banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Leppa Berry + Recycle', 'Leppa Berry + Heal Pulse']
        },
        {
                name: "Ubers",
                section: "XY Singles",

                ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
                banlist: ['Leppa Berry + Recycle', 'Leppa Berry + Heal Pulse']
        },
        {
                name: "LC",
                section: "XY Singles",

                maxLevel: 5,
                ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
                banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel', 'Leppa Berry + Recycle', 'Leppa Berry + Heal Pulse']
        },
		{
                name: "UU (beta)",
                section: "XY Singles",

                ruleset: ['Pokemon', 'Standard', 'Team Preview'],
                banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite',
                        'Aegislash',
                        'Alakazam', 'Alakazam-Mega',
                        'Azumarill',
                        'Blissey',
                        'Breloom',
                        'Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y',
                        'Clefable',
                        'Cloyster',
                        'Conkeldurr',
                        'Donphan',
                        'Dragonite',
                        'Espeon',
                        'Excadrill',
                        'Ferrothorn',
                        'Forretress',
                        'Galvantula',
                        'Garchomp', 'Garchomp-Mega',
                        'Genesect',
                        'Gengar', 'Gengar-Mega',
                        'Gliscor',
                        'Goodra',
                        'Greninja',
                        'Gyarados', 'Gyarados-Mega',
                        'Heatran',
                        'Infernape',
                        'Jirachi',
                        'Kangaskhan', 'Kangaskhan-Mega',
                        'Klefki',
                        'Landorus',
                        'Landorus-Therian',
                        'Latios',
                        'Lucario', 'Lucario-Mega',
                        'Mamoswine',
                        'Mandibuzz',
                        'Mawile', 'Mawile-Mega',
                        'Pinsir', 'Pinsir-Mega',
                        'Rotom-Wash',
                        'Sableye',
                        'Salamence',
                        'Scizor', 'Scizor-Mega',
                        'Skarmory',
                        'Smeargle',
                        'Starmie',
                        'Sylveon',
                        'Talonflame',
                        'Tentacruel',
                        'Terrakion',
                        'Thundurus',
                        'Togekiss',
                        'Trevenant',
                        'Tyranitar', 'Tyranitar-Mega',
                        'Venusaur', 'Venusaur-Mega',
                        'Volcarona']
        },
        {
                name: "XY Battle Spot Singles",
                section: "XY Singles",

                onBegin: function() {
                        this.debug('cutting down to 3');
                        this.p1.pokemon = this.p1.pokemon.slice(0,3);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,3);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                maxForcedLevel: 50,
                ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
                banlist: [], // The neccessary bans are in Standard GBU
                validateTeam: function(team, format) {
                        if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
                }
        },
        {
                name: "Custom Game",
                section: "XY Singles",

                searchShow: false,
                canUseRandomTeam: true,
                debug: true,
                maxLevel: 9999,
                defaultLevel: 100,
                // no restrictions, for serious (other than team preview)
                ruleset: ['Team Preview']
        },
		{
                name: "Mega Battles (beta)",
                section: "XY Singles",

                ruleset: ['Pokemon', 'OHKO Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Evasion Abilities Clause', 'megaonly', 'Team Preview'],
                banlist: []
        },

        // XY Doubles
        ///////////////////////////////////////////////////////////////////

        {
                name: "Smogon Doubles",
                section: "XY Doubles",

                gameType: 'doubles',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Dark Void', 'Soul Dew',
                        'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White',
                        'Xerneas',
                        'Yveltal'
                ]
        },
        {
                name: "XY Battle Spot Doubles",
                section: "XY Doubles",

                gameType: 'doubles',
                onBegin: function() {
                        this.debug('cutting down to 4');
                        this.p1.pokemon = this.p1.pokemon.slice(0,4);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,4);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                maxForcedLevel: 50,
                ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
                validateTeam: function(team, format) {
                        if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
                }
        },
        {
                name: "VGC 2014",
                section: "XY Doubles",

                gameType: 'doubles',
                onBegin: function() {
                        this.debug('cutting down to 4');
                        this.p1.pokemon = this.p1.pokemon.slice(0,4);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,4);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                maxForcedLevel: 50,
                ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
                requirePentagon: true,
                banlist: [], // The neccessary bans are in Standard GBU
                validateTeam: function(team, format) {
                        if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
                }
        },
        {
                name: "Doubles Challenge Cup",
                section: 'XY Doubles',

                gameType: 'doubles',
                team: 'randomCC',
                searchShow: false,
                ruleset: ['Pokemon', 'HP Percentage Mod']
        },
        {
                name: "Doubles Custom Game",
                section: "XY Doubles",

                gameType: 'doubles',
                searchShow: false,
                canUseRandomTeam: true,
                maxLevel: 9999,
                defaultLevel: 100,
                debug: true,
                ruleset: ['Team Preview']
        },

        // BW2 Singles
        ///////////////////////////////////////////////////////////////////

        // {
        //         name: "[Gen 5] CAP Cawmodore Playtest",
        //         section: "BW2 Singles",

        //         mod: 'gen5',
        //         ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
        //         banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', "Tomohawk", "Necturna", "Mollux", "Aurumoth", "Malaconda", "Syclant", "Revenankh", "Pyroak", "Fidgit", "Stratagem", "Arghonaut", "Kitsunoh", "Cyclohm", "Colossoil", "Krilowatt", "Voodoom"]
        // },
        {
                name: "[Gen 5] Random Battle",
                section: "BW2 Singles",

                mod: 'gen5',
                team: 'random',
                ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
        },
        {
                name: "[Gen 5] Unrated Random Battle",
                section: "BW2 Singles",

                mod: 'gen5',
                team: 'random',
                challengeShow: false,
                rated: false,
                ruleset: ['Random Battle']
        },
        {
                name: "[Gen 5] OU",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
        {
                name: "[Gen 5] OU Clear Skies",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Hail', 'Snow Warning', 'Sand Stream', 'Sandstorm', 'Rain Dance', 'Drizzle', 'Drought', 'Sunny Day']
        },
        {
                name: "[Gen 5] OU Clear Skies - Perm",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Hail', 'Sandstorm', 'Rain Dance', 'Sunny Day']
        },
        {
                name: "[Gen 5] OU No Hazards",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Spikes', 'Stealth Rocks', 'Toxic Spikes']
        },
        {
                name: "[Gen 5] Point Score",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview', 'Point System'],
                banlists: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Arceus', 'Shadow Tag']
        },
        {
                name: "[Gen 5] Perseverance",
                section: "BW2 Singles",

                mod: 'gen5',
                defaultLevel: 100,
                onFaint: function(pokemon) {
                                var name = pokemon.side.name;
                                var winner = '';
                                if (pokemon.side.id === 'p1') {
                                        winner = 'p2';
                                } else {
                                        winner = 'p1';
                                }
                                pokemon.battle.win(winner);

                },
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Shuckle', 'Sableye']
        },
        {
                name: "[Gen 5] Ubers",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
                banlist: []
        },
        {
                name: "[Gen 5] UU",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['[Gen 5] OU'],
                banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
        },
        {
                name: "[Gen 5] RU",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['[Gen 5] UU'],
                banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
        },
        {
                name: "[Gen 5] NU",
                section: "BW2 Singles",

                mod: 'gen5',
                ruleset: ['[Gen 5] RU'],
                banlist: ['RU','BL3', 'Prankster + Assist']
        },
        {
                name: "[Gen 5] LC",
                section: "BW2 Singles",

                mod: 'gen5',
                maxLevel: 5,
                ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
                banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
        },
        {
                name: "[Gen 5] GBU Singles",
                section: "BW2 Singles",

                mod: 'gen5',
                validateSet: function(set) {
                        if (!set.level || set.level >= 50) set.forcedLevel = 50;
                        return [];
                },
                onBegin: function() {
                        this.debug('cutting down to 3');
                        this.p1.pokemon = this.p1.pokemon.slice(0,3);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,3);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['Pokemon', 'Species Clause', 'Item Clause', 'Team Preview GBU'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo', 'Mew', 'Lugia', 'Ho-Oh', 'Celebi', 'Kyogre', 'Groudon',
                        'Rayquaza', 'Jirachi',  'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
                        'Chatot', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Phione',
                        'Manaphy',  'Darkrai', 'Shaymin', 'Shaymin-Sky',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire',
                        'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison',
                        'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Kyurem-Black', 'Kyurem-White',
                        'Keldeo', 'Keldeo-Resolute',  'Meloetta', 'Genesect'
                ]
        },
        {
                name: "[Gen 5] Custom Game",
                section: "BW2 Singles",

                mod: 'gen5',
                searchShow: false,
                canUseRandomTeam: true,
                debug: true,
                maxLevel: 1000,
                defaultLevel: 100,
                // no restrictions, for serious (other than team preview)
                ruleset: ['Team Preview']
        },

        // BW2 Doubles
        ///////////////////////////////////////////////////////////////////

        {
                name: "[Gen 5] Smogon Doubles",
                section: 'BW2 Doubles',
                column: 2,

                mod: 'gen5',
                gameType: 'doubles',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
                        'Mewtwo',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White'
                ]
        },
        {
                name: "[Gen 5] Doubles VGC 2013",
                section: 'BW2 Doubles',

                mod: 'gen5',
                gameType: 'doubles',
                onBegin: function() {
                        this.debug('cutting down to 4');
                        this.p1.pokemon = this.p1.pokemon.slice(0,4);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,4);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                maxForcedLevel: 50,
                ruleset: ['Pokemon', 'Team Preview VGC', 'Species Clause', 'Item Clause'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo',
                        'Mew',
                        'Lugia',
                        'Ho-Oh',
                        'Celebi',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Jirachi',
                        'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
                        'Chatot',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Phione',
                        'Manaphy',
                        'Darkrai',
                        'Shaymin', 'Shaymin-Sky',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Victini',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem', 'Kyurem-Black', 'Kyurem-White',
                        'Keldeo', 'Keldeo-Resolute',
                        'Meloetta',
                        'Genesect'
                ]
        },
        {
                name: "[Gen 5] Doubles Custom Game",
                section: 'BW2 Doubles',

                mod: 'gen5',
                gameType: 'doubles',
                searchShow: false,
                canUseRandomTeam: true,
                debug: true,
                maxLevel: 9999,
                defaultLevel: 100,
                // no restrictions, for serious (other than team preview)
                ruleset: ['Team Preview']
        },

        // Other Metagames
        ///////////////////////////////////////////////////////////////////

        {
                name: "[Seasonal] Winter's Wont",
                section: "OM of the Month",

                mod: 'inverse',
                gameType: 'doubles',
                team: 'randomSeasonalWinter',
                ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
                maxLevel: 1000,
                onBegin: function() {
                        this.setWeather('Hail');
                        delete this.weatherData.duration;
                }
        },
		{
                name: "Averagemons",
                section: "Other Metagames",

                mod: 'averagemons',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Soul Dew', 'Thick Club', 'Deepseatooth', 'Deepseascale', 'Light Ball', 'Mawilite', 'Medichamite', 'Eviolite', 'Shedinja', 'Smeargle', 'Huge Power', 'Pure Power']
        },
        {
                name: "Inverse Battle",
                section: "Other Metagames",

                mod: 'inverse',
                ruleset: ['Pokemon', 'Standard', 'Team Preview'],
                banlist: [
                        'Ho-Oh',
                        'Kangaskhanite',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
                        'Xerneas'
                ]
        },
        {
                name: "CAP (beta)",
                section: "Other Metagames",

                searchShow: false,
                ruleset: ['CAP Pokemon', 'Standard Pokebank', 'Team Preview'],
                banlist: ['Uber', 'Cawmodore', 'Soul Dew']
        },
        {
                name: "Challenge Cup",
                section: "Other Metagames",

                team: 'randomCC',
                ruleset: ['Pokemon', 'HP Percentage Mod']
        },
        {
                name: "Challenge Cup 1-vs-1",
                section: "Other Metagames",

                team: 'randomCC',
                ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
                onBegin: function() {
                        this.debug('Cutting down to 1');
                        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                }
        },
        {
                name: "Hackmons",
                section: "Other Metagames",

                ruleset: ['Pokemon'],
                banlist: []
        },
        {
                name: "Balanced Hackmons",
                section: "Other Metagames",

                ruleset: ['Pokemon', 'OHKO Clause'],
                banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power']
        },
        {
                name: "Gen-NEXT OU",
                section: "Other Metagames",

                mod: 'gennext',
                searchShow: false,
                ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
                banlist: ['Uber']
        },
        {
                name: "[Gen 5] OU Monotype",
                section: "Other Metagames",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Standard', 'Same Type Clause', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
        {
                name: "[Gen 6] OU Monotype",
                section: "Other Metagames",

                ruleset: ['Pokemon', 'Standard Pokebank', 'Same Type Clause', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Soul Dew']
        },
		{
                name: "[Gen 6] Ubers Monotype",
                section: "Other Metagames",

                ruleset: ['Same Type Clause', 'Pokemon', 'Standard Ubers', 'Team Preview'],
                banlist: ['Leppa Berry + Recycle', 'Leppa Berry + Heal Pulse']
        },
        {
                name: "[Gen 5] Glitchmons",
                section: "Other Metagames",

                mod: 'gen5',
                searchShow: false,
                ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
                banlist: ['Illegal', 'Unreleased'],
                mimicGlitch: true
        },
        {
                name: "[Gen 5] 1v1",
                section: 'Other Metagames',

                mod: 'gen5',
                onBegin: function() {
                        this.p1.pokemon = this.p1.pokemon.slice(0,1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Unreleased', 'Illegal', 'Soul Dew',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Blaziken',
                        'Darkrai',
                        'Deoxys', 'Deoxys-Attack',
                        'Dialga',
                        'Giratina', 'Giratina-Origin',
                        'Groudon',
                        'Ho-Oh',
                        'Kyogre',
                        'Kyurem-White',
                        'Lugia',
                        'Mewtwo',
                        'Palkia',
                        'Rayquaza',
                        'Reshiram',
                        'Shaymin-Sky',
                        'Zekrom',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit',
                        'Focus Sash'
                ]
        },
        {
                name: "[Gen 5] PU",
                section: "Other Metagames",

                mod: 'gen5',
                searchShow: false,
                ruleset: ['NU'],
                banlist: ["Charizard", "Wartortle", "Kadabra", "Golem", "Haunter", "Exeggutor", "Weezing", "Kangaskhan", "Pinsir", "Lapras", "Ampharos", "Misdreavus", "Piloswine", "Miltank", "Ludicolo", "Swellow", "Gardevoir", "Ninjask", "Torkoal", "Cacturne", "Altaria", "Armaldo", "Gorebyss", "Regirock", "Regice", "Bastiodon", "Floatzel", "Drifblim", "Skuntank", "Lickilicky", "Probopass", "Rotom-Fan", "Samurott", "Musharna", "Gurdurr", "Sawk", "Carracosta", "Garbodor", "Sawsbuck", "Alomomola", "Golurk", "Braviary", "Electabuzz", "Electrode", "Liepard", "Tangela", "Eelektross", "Ditto", "Seismitoad", "Zangoose", "Roselia", "Serperior", "Metang", "Tauros", "Cradily", "Primeape", "Scolipede", "Jynx", "Basculin", "Gigalith", "Camerupt", "Golbat"]
        },
        {
                name: "[Gen 5] STABmons",
                section: "Other Metagames",

                mod: 'gen5',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Soul Dew',
                        'Mewtwo', 'Lugia', 'Ho-Oh', 'Blaziken', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Shaymin-Sky',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram', 'Zekrom', 'Kyurem-White', 'Genesect'
                ]
        },
        {
                name: "[Gen 5] Budgetmons",
                section: "Other Metagames",

                mod: 'gen5',
                searchShow: false,
                ruleset: ['OU'],
                banlist: [],
                validateTeam: function(team, format) {
                        var bst = 0;
                        for (var i=0; i<team.length; i++) {
                                var template = this.getTemplate(team[i].species);
                                Object.values(template.baseStats, function(value) {
                                        bst += value;
                                });
                        }
                        if (bst > 2300) return ['The combined BST of your team is greater than 2300.'];
                }
        },
        {
                name: "[Gen 5] Ability Exchange",
                section: "Other Metagames",

                mod: 'gen5',
                searchShow: false,
                ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
                banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush',
                        'Mewtwo', 'Lugia', 'Ho-Oh', 'Blaziken', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Darkrai', 'Shaymin-Sky',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Excadrill', 'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem-White', 'Genesect', 'Slaking', 'Regigigas'
                ]
        },
		{
                name: "C&E",
                section: "Other Metagames",
 
                searchShow: false,
                ruleset: ['Pokemon', 'Standard Pokebank', 'Team Preview', 'ce clause'],
                banlist: ['Soul Dew', 'Uber', 'Farfetchd', 'Kangaskhan', 'Pinsir', 'Heracross', 'unown', 'girafarig', 'dunsparce', 'shuckle', 'articuno', 'zapdos', 'moltres', 'qwilfish', 'corsola', 'delibird', 'stantler', 'smeargle', 'skarmory', 'miltank', 'tauros', 'lapras', 'ditto', 'aerodactyl', 'sableye', 'mawile', 'plusle', 'minum', 'volbeat', 'illumise', 'torkoal', 'spinda', 'seviper', 'zangoose', 'lunatone', 'solrock', 'castform', 'kecleon', 'tropius', 'absol', 'relicanth', 'luvdisc', 'pachirisu', 'chatot', 'spiritomb', 'carnivine', 'rotom', 'audino', 'throh', 'sawk', 'basculin', 'maractus', 'sigilyph', 'alomomola', 'cryogonal', 'stunfisk', 'bouffalant', 'druddigon', 'heatmor', 'durant', 'furfrou', 'hawlucha', 'carbink', 'klefki', 'dedenne']
        },
		{		
				name: "Tier Shift",
                section: "Other Metagames",
				
				searchShow: false,
                mod: 'tiershift',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
		},
		{
				name: "Negative Metagame",
				section: "Other Metagames",

				mod: 'negative',
				ruleset: ['OU'],
				banlist: ['Smeargle', 'Eviolite']
		},
		{
				name: "Stat Exchange",
				section: "Other Metagames",

				mod: 'statexchange',
				ruleset: ['OU'],
				banlist: []
		},
		 {
                name: "Sky Battles",
                section: "Other Metagames",

                validateSet: function(set) {
                        var template = this.getTemplate(set.species || set.name);
                        if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
                                return [set.species+" is not a Flying type and does not have the ability Levitate."];
                        }
                },
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: [
                        // Banned items
                        'Soul Dew', 'Iron Ball', 'Pinsirite', 'Gengarite',
                        // Banned moves
                        'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure',
                        'Flying Press', 'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heavy Slam',
                        'Ingrain', "Land's Wrath", 'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller',
                        'Seismic Toss', 'Slam', 'Smack Down', 'Spikes', 'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
                        // Banned Pok�mon
                        // Illegal Flying-types
                        'Pidgey', 'Spearow', "Farfetch'd", 'Doduo', 'Dodrio', 'Hoothoot', 'Natu', 'Murkrow', 'Delibird', 'Taillow', 'Starly', 'Chatot',
                        'Shaymin-Sky', 'Pidove', 'Archen', 'Ducklett', 'Rufflet', 'Vullaby', 'Fletchling', 'Hawlucha',
                        // Illegal Levitators
                        'Gastly', 'Gengar',
                        // Illegal Megas
                        'Pinsir-Mega', 'Gengar-Mega',
                        // Illegal Ubers
                        'Arceus-Flying', 'Giratina', 'Giratina-Origin', 'Ho-Oh', 'Lugia', 'Rayquaza', 'Yveltal'
                ]
        },

        // Past Generations
        ///////////////////////////////////////////////////////////////////

        {
                name: "[Gen 4] OU (beta)",
                section: "Past Generations",

                mod: 'gen4',
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Uber'],
                
                column: 2
        },
        {
                name: "[Gen 4] UU (beta)",
                section: "Past Generations",

                mod: 'gen4',
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Uber', 'OU', 'BL']
        },
        {
                name: "[Gen 4] Hackmons",
                section: "Past Generations",

                mod: 'gen4',
                searchShow: false,
                ruleset: ['Pokemon', 'HP Percentage Mod'],
                banlist: []
        },
        {
                name: "[Gen 4] Custom Game",
                section: "Past Generations",

                mod: 'gen4',
                searchShow: false,
                debug: true,
                ruleset: []
        },
        {
                name: "[Gen 3] Hackmons",
                section: "Past Generations",

                mod: 'gen3',
                searchShow: false,
                debug: true,
                ruleset: ['Pokemon', 'HP Percentage Mod'],
                banlist: []
        },
        {
                name: "[Gen 3] Custom Game",
                section: "Past Generations",

                mod: 'gen3',
                searchShow: false,
                debug: true,
                ruleset: []
        },
        {
                name: "[Gen 2] OU (beta)",
                section: "Past Generations",

                mod: 'gen2',
                debug: true,
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Uber', 'Mean Look + Hypnosis + Perish Song']
        },
        {
                name: "[Gen 2] Custom Game",
                section: "Past Generations",

                mod: 'gen2',
                searchShow: false,
                debug: true,
                ruleset: ['Pokemon']
        },
        {
                name: "[Gen 1] OU (beta)",
                section: "Past Generations",

                mod: 'gen1',
                ruleset: ['Pokemon', 'Standard'],
                banlist: ['Uber']
        },
        {
                name: "[Gen 1] Custom Game",
                section: "Past Generations",

                mod: 'gen1',
                searchShow: false,
                debug: true,
                ruleset: ['Pokemon']
        }

];