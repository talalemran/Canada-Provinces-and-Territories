function select1() {
    let txt;
    let image;
    let info;
    let provinces = document.getElementById('prov').value;
    
    switch(provinces) {
        case "Ontario":
        txt = '<h2>Ontario</h2>';
        image = '<img src="./img/ontario.png">';
        info = '<ul><li>Capital City: Toronto</li><li>Entered Confederation: July 1, 1867</li><li>Population: 14,711,827</li><li>Official Language(s): English</li></ul>';
        break;
        case "Quebec":
        txt = '<h2>Quebec</h2>';
        image = '<img src="./img/quebec.png">';
        info = '<ul><li>Capital City: Quebec City</li><li>Entered Confederation: July 1, 1867</li><li>Population: 8,537,674</li><li>Official Language(s): French</li></ul>';
        break;
        case "Nova Scotia":
        txt = '<h2>Nova Scotia</h2>';
        image = '<img src="./img/nova-scotia.png">';
        info = '<ul><li>Capital City: Halifax</li><li>Entered Confederation: July 1, 1867</li><li>Population: 977,457</li><li>Official Language(s): English</li></ul>';
        break;
        case "New Brunswick":
        txt = '<h2>New Brunswick</h2>';
        image = '<img src="./img/new-brunswick.png">';
        info = '<ul><li>Capital City: Fredericton</li><li>Entered Confederation: July 1, 1867</li><li>Population: 779,993</li><li>Official Language(s): English, French</li></ul>';
        break;
        case "Manitoba":
        txt = '<h2>Manitoba</h2>';
        image = '<img src="./img/manitoba.png">';
        info = '<ul><li>Capital City: Winnipeg</li><li>Entered Confederation: July 15, 1870</li><li>Population: 1,377,517</li><li>Official Language(s): English</li></ul>';
        break;
        case "British Columbia":
        txt = '<h2>British Columbia</h2>';
        image = '<img src="./img/british-columbia.png">';
        info = '<ul><li>Capital City: Victoria</li><li>Entered Confederation: July 20, 1871</li><li>Population: 5,110,917</li><li>Official Language(s): English</li></ul>';
        break;
        case "Prince Edward Island":
        txt = '<h2>Prince Edward Island</h2>';
        image = '<img src="./img/prince-edward-island.png">';
        info = '<ul><li>Capital City: Charlottetown</li><li>Entered Confederation: July 1, 1873</li><li>Population: 158,158</li><li>Official Language(s): English</li></ul>';
        break;
        case "Saskatchewan":
        txt = '<h2>Saskatchewan</h2>';
        image = '<img src="./img/saskatchewan.png">';
        info = '<ul><li>Capital City: Regina</li><li>Entered Confederation: September 1, 1905</li><li>Population: 1,181,666</li><li>Official Language(s): English</li></ul>';
        break;
        case "Alberta":
        txt = '<h2>Alberta</h2>';
        image = '<img src="./img/alberta.png">';
        info = '<ul><li>Capital City: Edmonton</li><li>Entered Confederation: September 1, 1905</li><li>Population: 4,413,146</li><li>Official Language(s): English</li></ul>';
        break;
        case "Newfoundland and Labrador":
        txt = '<h2>Newfoundland and Labrador</h2>';
        image = '<img src="./img/newfoundland-and-labrador.png">';
        info = '<ul><li>Capital City: St. John\'s</li><li>Entered Confederation: March 31, 1949</li><li>Population: 521,365</li><li>Official Language(s): English</li></ul>';
        case "Northwest Territories":
        txt = '<h2>Northwest Territories</h2>';
        image = '<img src="./img/northwest-territories.png">';
        info = '<ul><li>Capital City: Yellowknife</li><li>Entered Confederation: July 15, 1870</li><li>Population: 44,904</li><li>Official Language(s): Chipewyan, Cree, English, French, Gwich\'in, Inuinnaqtun, Inuktitut, Inuvialuktun, North Slavey, South Slavey, Tłįchǫ</li></ul>';
        break;
        case "Yukon":
        txt = '<h2>Yukon</h2>';
        image = '<img src="./img/yukon.png">';
        info = '<ul><li>Capital City: Whitehorse</li><li>Entered Confederation: June 13, 1898</li><li>Population: 41,078</li><li>Official Language(s): English, French</li></ul>';
        break;
        case "Nunavut":
        txt = '<h2>Nunavut</h2>';
        image = '<img src="./img/nunavut.png">';
        info = '<ul><li>Capital City: Iqaluit</li><li>Entered Confederation: April 1, 1999</li><li>Population: 39,097</li><li>Official Language(s): Inuinnaqtun, Inuktitut, English, French</li></ul>';
        break;
    }
    document.getElementById('text').innerHTML = txt;
    document.getElementById('img').innerHTML = image;
    document.getElementById('info').innerHTML = info;

    if (document.getElementById('prov').selected = true) {
        document.getElementById('canada').style.display = 'none';
    }

    }