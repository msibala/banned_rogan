 var options = {
     valueNames: [ 'Episode', 'Name', 'Link' ],
     //item: '<li><h3 class="Episode"></h3><a href="#" class="Name" ></a></li>'
	 item: function(values){
		 return `<li><h3 class="Episode">${values.Episode}</h3><a href="#" class="Name" href="#" onclick="document.getElementById('my-video').src='${values.Link}'">${values.Episode}</a></li>`;

	 }
 };


var values = [
    {
		"Episode": "#1458 ",
		"Name": "Chris D'Elia ",
		"Date": "April 15, 2020",
		"Link": "https://ia601708.us.archive.org/35/items/jre-1251-1476/JRE_1251-1476/Joe%20Rogan%20Experience%20%231458%20-%20Chris%20D%27Elia.mp4"
	},{
		"Episode": "#1255",
		"Name": "Alex Jones Returns",
		"Link": "https://archive.org/download/jre-1251-1476/JRE_1251-1476/Joe%20Rogan%20Experience%20%231255%20-%20Alex%20Jones%20Returns%21.mp4"
	},{
		"Episode": "#1218",
		"Name": "Gad Saad",
		"Link": "https://archive.org/download/jre-1095-1250/JRE_1095-1250/Joe%20Rogan%20Experience%20%231218%20-%20Gad%20Saad.mp4"
	},{
		"Episode": "#1206",
		"Name": "Mike Ward & Pantelis",
		"Link": "https://archive.org/download/jre-1095-1250/JRE_1095-1250/Joe%20Rogan%20Experience%20%231206%20-%20Mike%20Ward%20%26%20Pantelis.mp4"
	},{
		"Episode": "#1197",
		"Name": "Michael Malice",
		"Link": "https://archive.org/download/jre-1095-1250/JRE_1095-1250/Joe%20Rogan%20Experience%20%231197%20-%20Michael%20Malice.mp4"
	},{
		"Episode": "#1187",
		"Name": "Kyle Kulinski",
		"Link": "https://archive.org/download/jre-1095-1250/JRE_1095-1250/Joe%20Rogan%20Experience%20%231187%20-%20Kyle%20Kulinski.mp4"
	},{
		"Episode": "#1141",
		"Name": "Theo Von",
		"Link": "https://archive.org/download/jre-1095-1250/JRE_1095-1250/Joe%20Rogan%20Experience%20%231141%20-%20Theo%20Von.mp4"
	},{
		"Episode": "#1103",
		"Name": "Tom Segura",
		"Link": "https://archive.org/download/jre-1095-1250/JRE_1095-1250/Joe%20Rogan%20Experience%20%231103%20-%20Tom%20Segura.mp4"
	},{
		"Episode": "#1093",
		"Name": "Owen Benjamin, Kurt Metzger",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%231093%20-%20Owen%20Benjamin%20%26%20Kurt%20Metzger.mp4"
	},{
		"Episode": "#1036",
		"Name": "Ari Shaffir, Bert Kreischer & Tom Segura",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%231036%20-%20Ari%20Shaffir%2C%20Bert%20Kreischer%20%26%20Tom%20Segura.mp4"
	},{
		"Episode": "#1033",
		"Name": "Owen Benjamin",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%231033%20-%20Owen%20Benjamin.mp4"
	},{
		"Episode": "#998",
		"Name": "Owen Benjamin",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23998%20-%20Owen%20Benjamin.mp4"
	},{
		"Episode": "#980",
		"Name": "Chris D’Elia",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23980%20-%20Chris%20D%27Elia.mp4"
	},{
		"Episode": "#979",
		"Name": "Sargon of Akkad",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23979%20-%20Sargon%20of%20Akkad.mp4"
	},{
		"Episode": "#963",
		"Name": "Michael Malice",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23963%20-%20Michael%20Malice.mp4"
	},{
		"Episode": "#925",
		"Name": "Theo Von",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23925%20-%20Theo%20Von.mp4"
	},{
		"Episode": "#920",
		"Name": "Gavin McInnes",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23920%20-%20Gavin%20McInnes.mp4"
	},{
		"Episode": "#912",
		"Name": "Pete Holmes",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23912%20-%20Pete%20Holmes.mp4"
	},{
		"Episode": "#911",
		"Name": "Alex Jones, Eddie Bravo",
		"Link": "https://archive.org/download/jre-838-1094/JRE_838-1094/Joe%20Rogan%20Experience%20%23911%20-%20Alex%20Jones%20%26%20Eddie%20Bravo.mp4"
	},{
		"Episode": "#820",
		"Name": "Milo Yiannopoulos",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23820%20-%20Milo%20Yiannopoulos.mp4"
	},{
		"Episode": "#810",
		"Name": "Big Jay Oakerson",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23810%20-%20Big%20Jay%20Oakerson.mp4"
	},{
		"Episode": "#750",
		"Name": "Andersen, Keegan Kuhn, producers of Conspiracy",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23750%20-%20Kip%20Andersen%20%26%20Keegan%20Kuhn%2C%20producers%20of%20Cowspiracy.mp4"
	},{
		"Episode": "#742",
		"Name": "Aubrey Marcus",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23742%20-%20Aubrey%20Marcus.mp4"
	},{
		"Episode": "#710",
		"Name": "Gavin McInnes",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23710%20-%20Gavin%20McInnes.mp4"
	},{
		"Episode": "#702",
		"Name": "Milo Yiannopoulos",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23702%20-%20Milo%20Yiannopoulos.mp4"
	},{
		"Episode": "#674",
		"Name": "Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23674%20-%20Brian%20Redban.mp4"
	},{
		"Episode": "#664",
		"Name": "Tom Segura & Christina Pazsitzky",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23664%20-%20Tom%20Segura%20%26%20Christina%20Pazsitzky.mp4"
	},{
		"Episode": "#640",
		"Name": "Charles C. Johnson",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23640%20-%20Charles%20C.%20Johnson.mp4"
	},{
		"Episode": "#594",
		"Name": "Russell Peters",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23594%20-%20Russell%20Peters.mp4"
	},{
		"Episode": "#582",
		"Name": "David Seaman",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23582%20-%20David%20Seaman.mp4"
	},{
		"Episode": "#570",
		"Name": "Ryan Parsons",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23570%20-%20Ryan%20Parsons.mp4"
	},{
		"Episode": "#538",
		"Name": "Stefan Molyneux",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23538%20-%20Stefan%20Molyneux.mp4"
	},{
		"Episode": "#537",
		"Name": "Rich Vos",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23537%20-%20Rich%20Vos.mp4"
	},{
		"Episode": "#533",
		"Name": "Chris D’elia",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23533%20-%20Chris%20D%27Elia.mp4"
	},{
		"Episode": "#525",
		"Name": "Bert Kreischer",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23525%20-%20Bert%20Kreischer.mp4"
	},{
		"Episode": "#520",
		"Name": "David Seaman",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23520%20-%20David%20Seaman.mp4"
	},{
		"Episode": "#512",
		"Name": "Dan Savage",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23512%20-%20Dan%20Savage.mp4"
	},{
		"Episode": "#506",
		"Name": "Moshe Kasher",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23506%20-%20Moshe%20Kasher.mp4"
	},{
		"Episode": "#488",
		"Name": "Iliza Shlesinger",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23488%20-%20Iliza%20Shlesinger.mp4"
	},{
		"Episode": "#487",
		"Name": "David Seaman",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23487%20-%20David%20Seaman.mp4"
	},{
		"Episode": "#463",
		"Name": "Louis Theroux",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23463%20-%20Louis%20Theroux.mp4"
	},{
		"Episode": "#461",
		"Name": "David Seaman",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23461%20-%20David%20Seaman.mp4"
	},{
		"Episode": "#454",
		"Name": "War Machine",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23454%20-%20War%20Machine.mp4"
	},{
		"Episode": "#443",
		"Name": "Neal Brennan",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23443%20-%20Neal%20Brennan.mp4"
	},{
		"Episode": "#441",
		"Name": "Brian Dunning",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23441%20-%20Brian%20Dunning.mp4"
	},{
		"Episode": "#411",
		"Name": "Dave Asprey",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23411%20-%20Dave%20Asprey.mp4"
	},{
		"Episode": "#375",
		"Name": "Shane Smith",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23375%20-%20Shane%20Smith.mp4"
	},{
		"Episode": "#374",
		"Name": "Marc Maron",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23374%20-%20Marc%20Maron.mp4"
	},{
		"Episode": "#368",
		"Name": "David Seaman",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23368%20-%20David%20Seaman.mp4"
	},{
		"Episode": "#361",
		"Name": "Dave Asprey, Tait Fletcher",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23361%20-%20Dave%20Asprey%2C%20Tait%20Fletcher.mp4"
	},{
		"Episode": "#358",
		"Name": "Bert Kreischer",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23358%20-%20Bert%20Kreischer.mp4"
	},{
		"Episode": "#354",
		"Name": "Ari Shaffir, Amy Schumer",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23354%20-%20Ari%20Shaffir%2C%20Amy%20Schumer.mp4"
	},{
		"Episode": "#349",
		"Name": "Greg Fitzsimmons",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23349%20-%20Greg%20Fitzsimmons.mp4"
	},{
		"Episode": "#344",
		"Name": "Stanley Krippner, Christopher Ryan",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23344%20-%20Stanley%20Krippner%2C%20Christopher%20Ryan.mp4"
	},{
		"Episode": "#340",
		"Name": "JD Kelley",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23340%20-%20JD%20Kelley.mp4"
	},{
		"Episode": "#331",
		"Name": "Dr. Steven Greer",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23331%20-%20Dr.%20Steven%20Greer.mp4"
	},{
		"Episode": "#324",
		"Name": "Sam Sheridan",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23324%20-%20Sam%20Sheridan.mp4"
	},{
		"Episode": "#320",
		"Name": "Tim Ferriss",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23320%20-%20Tim%20Ferriss.mp4"
	},{
		"Episode": "#314",
		"Name": "Ian Edwards",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23314%20-%20Ian%20Edwards.mp4"
	},{
		"Episode": "#303",
		"Name": "Matt Vengrin, Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23303%20-%20Matt%20Vengrin.mp4"
	},{
		"Episode": "#294",
		"Name": "Ari Shaffir",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23294%20-%20Ari%20Shaffir.mp4"
	},{
		"Episode": "#276",
		"Name": "David Seaman, Abby Martin, Dell Cameron, Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23276%20-%20David%20Seaman%2C%20Abby%20Martin%2C%20Dell%20Cameron.mp4"
	},{
		"Episode": "#275",
		"Name": "Dave Asprey",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23275%20-%20Dave%20Asprey.mp4"
	},{
		"Episode": "#256",
		"Name": "David Seaman",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23256%20-%20David%20Seaman.mp4"
	},{
		"Episode": "#246",
		"Name": "Maynard J Keenan (Part 1)",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23246%20-%20Maynard%20James%20Keenan%20%28Part%201%29.mp4"
	},{
		"Episode": "#246",
		"Name": "Maynard J Keenan (Part 2)",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23246%20-%20Maynard%20James%20Keenan%20%28Part%202%29.mp4"
	},{
		"Episode": "#239",
		"Name": "Adam Kokesh",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23239%20-%20Adam%20Kokesh.mp4"
	},{
		"Episode": "#232",
		"Name": "Giorgio Tsoukalos",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23232%20-%20Giorgio%20Tsoukalos.mp4"
	},{
		"Episode": "#227",
		"Name": "Ari Shaffir",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23227%20-%20Ari%20Shaffir.mp4"
	},{
		"Episode": "#213",
		"Name": "Eddie Bravo",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23213%20-%20Eddie%20Bravo.mp4"
	},{
		"Episode": "#198",
		"Name": "Brody Stevens",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23198%20-%20Brody%20Stevens.mp4"
	},{
		"Episode": "#182",
		"Name": "Bryan Callen, Jimmy Burke, Brian Redban",
		"Link": "MISSING"
	},{
		"Episode": "#176",
		"Name": "Steven Rinella",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23176%20--%20Steven%20Rinella.mp4"
	},{
		"Episode": "#159",
		"Name": "Nick Thune",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23159%20--%20Nick%20Thune.mp4"
	},{
		"Episode": "#155",
		"Name": "Dave Attell",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23155%20-%20Dave%20Attell.mp4"
	},{
		"Episode": "#152",
		"Name": "Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23152%20-%20Brian%20Redban.mp4"
	},{
		"Episode": "#149",
		"Name": "9LIVE FROM THE ICEHOUSE (PART ONE)",
		"Link": "MISSING"
	},{
		"Episode": "#134",
		"Name": "Kevin Smith (Part 4)",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23134%20-%20Kevin%20Smith%20%28Part%202%29.mp4"
	},{
		"Episode": "#132",
		"Name": "Bert Kreischer",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23132%20-%20Bert%20Kreischer.mp4"
	},{
		"Episode": "#128",
		"Name": "Joey Diaz, Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23128%20-%20Joey%20Diaz.mp4"
	},{
		"Episode": "#122",
		"Name": "Jamie Kilstein",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23122%20-%20Jamie%20Kilstein.mp4"
	},{
		"Episode": "#119",
		"Name": "Jan Irvin",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23119%20-%20Jan%20Irvin.mp4"
	},{
		"Episode": "#118",
		"Name": "Ari Shaffir",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23118%20-%20Ari%20Shaffir.mp4"
	},{
		"Episode": "#116",
		"Name": "Russell Peters, Junior Simpson",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23116%20-%20Russell%20Peters%20%26%20Junior%20Simpson.mp4"
	},{
		"Episode": "#114",
		"Name": "Neal Brennan",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23114%20-%20Neal%20Brennan.mp4"
	},{
		"Episode": "#113",
		"Name": "Brian Posehn",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23113%20-%20Brian%20Posehn.mp4"
	},{
		"Episode": "#112",
		"Name": "Cliffy B, Johnny Cristo",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23112%20-%20Cliff%20Bleszinski%20%26%20Jon%20Christofaris.mp4"
	},{
		"Episode": "#110",
		"Name": "Duncan Trussell",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23110%20-%20Duncan%20Trussell.mp4"
	},{
		"Episode": "#108",
		"Name": "Joey Diaz, Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23108%20-%20Joey%20Diaz.mp4"
	},{
		"Episode": "#107",
		"Name": "Doug Benson",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23107%20-%20Doug%20Benson.mp4"
	},{
		"Episode": "#102",
		"Name": "2John Heffron",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%23102%20-%20John%20Heffron.mp4"
	},{
		"Episode": "#98",
		"Name": "Daryl Wright, Brian Whitaker",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2398%20-%20Daryl%20Wright%20%26%20Brian%20Whitaker.mp4"
	},{
		"Episode": "#97",
		"Name": "Freddy Lockhart, Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2397%20-%20Freddy%20Lockhart.mp4"
	},{
		"Episode": "#92",
		"Name": "Jim Norton",
		"Link": "MISSING"
	},{
		"Episode": "#91",
		"Name": "Bill Burr",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2391%20-%20Bill%20Burr.mp4"
	},{
		"Episode": "#88",
		"Name": "Andy Dick",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2388%20-%20Andy%20Dick.mp4"
	},{
		"Episode": "#82",
		"Name": "Dave Foley",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2382%20-%20Dave%20Foley.mp4"
	},{
		"Episode": "#81",
		"Name": "Pete Johansson",
		"Link": "MISSING"
	},{
		"Episode": "#75",
		"Name": "Sam Tripoli",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2375%20-%20Sam%20Tripoli.mp4"
	},{
		"Episode": "#72",
		"Name": "Ari Shaffir",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2372%20-%20Ari%20Shaffir.mp4"
	},{
		"Episode": "#66",
		"Name": "Nick Swardson",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2366%20-%20Nick%20Swardson.mp4"
	},{
		"Episode": "#57",
		"Name": "Jayson Thibault, Brian Redban",
		"Link": "MISSING"
	},{
		"Episode": "#55",
		"Name": "Duncan Trussell",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2355%20-%20Duncan%20Trussell.mp4"
	},{
		"Episode": "#50",
		"Name": "Little Esther",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2350%20-%20Little%20Esther.mp4"
	},{
		"Episode": "#48",
		"Name": "Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2348%20-%20Brian%20Redban.mp4"
	},{
		"Episode": "#42",
		"Name": "Duncan Trussell",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2342%20-%20Duncan%20Trussell.mp4"
	},{
		"Episode": "#40",
		"Name": "Tyler Knight",
		"Link": "MISSING"
	},{
		"Episode": "#27",
		"Name": "Sam Tripoli",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2327%20-%20Sam%20Tripoli.mp4"
	},{
		"Episode": "#21",
		"Name": "Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2321%20-%20Brian%20Redban.mp4"
	},{
		"Episode": "#20",
		"Name": "Tom Segura",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%2320%20-%20Tom%20Segura.mp4"
	},{
		"Episode": "#4",
		"Name": "Brian Redban",
		"Link": "https://archive.org/download/jre-001-837/JRE_001-837/Joe%20Rogan%20Experience%20%234%20-%20Brian%20Redban.mp4"
	}
];

var episodeList = new List('episode-list', options, values);