var fs = require('fs');

var filename = 'brit-a-z.txt';
var tlds = [
	'academy',
	'agency',
	'bargains',
	'berlin',
	'bike',
	'blue',
	'boutique',
	'builders',
	'buzz',
	'cab',
	'camera',
	'camp',
	'careers',
	'center',
	'cheap',
	'clothing',
	'club',
	'codes',
	'coffee',
	'company',
	'computer',
	'construction',
	'contractors',
	'cool',
	'diamonds',
	'directory',
	'domains',
	'education',
	'email',
	'entreprises',
	'equipment',
	'estate',
	'expert',
	'farm',
	'florist',
	'gallery',
	'gift',
	'glass',
	'graphics',
	'guitars',
	'guru',
	'holdings',
	'holiday',
	'house',
	'institute',
	'international',
	'kim',
	'kitchen',
	'kiwi',
	'land',
	'lighting',
	'limo',
	'link',
	'management',
	'marketing',
	'menu',
	'photo',
	'photography',
	'photos',
	'pics',
	'pink',
	'plumbing',
	'recipes',
	'red',
	'repair',
	'sexy',
	'shiksha',
	'shoes',
	'singles',
	'solar',
	'solutions',
	'support',
	'systems',
	'tattoo',
	'technology',
	'tips',
	'today',
	'training',
	'uno',
	'ventures',
	'viajes',
	'voyage',
	'watch',
	'works',
	'zone'
];

function loopTLDs (word) {
	var wordplays = [];
	var tld;
	for(var i = 0, len = tlds.length; i < len; i++) {
		tld = tlds[i];
		if((word.slice(-1 * tld.length) === tld) && (word.length >= tld.length + 2)) {
			wordplays.push(word + ', ' + tld);
		}
	}
	return wordplays;
}

function loopWords (data) {
	var lines = data.split(/\n|\r?\n/g);
	var wordplays = [];
	var tmp_wordplays;
	var word;
	for(var i = 0, len = lines.length; i < len; i++) {
		word = lines[i];
		if((i % 1000) === 0) {
			console.log('Looped through ' + i + '/' + len + ' words ...');
		}
		tmp_wordplays = loopTLDs(word);
		wordplays = wordplays.concat(tmp_wordplays);
	}
	return wordplays;
}

(function main () {
	fs.readFile(__dirname + '/data/' + filename, 'utf8', function (e, data) {
		if(e) {
			return console.log(e);
		}

		wordplays = loopWords(data);
		wordplays = wordplays.join('\n');

		fs.writeFile(__dirname + '/wordplays.txt', wordplays, function (e) {
			if(e) {
				return console.log(e);
			}
		});
	});
})();
