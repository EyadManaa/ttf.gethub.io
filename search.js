 function doSearch() {

    const page = document.getElementById('searchInput').value.toLowerCase();

    let destination;

    if (page.includes('mice') || page.includes('matts')) 
        destination = 'mice&matts.html';

    else if (page.includes('keyboard')) 
        destination = 'keyboards.html';

    else if (page.includes('laptop'))   
        destination = 'laptops.html';

    else if (page.includes('monitor'))  
        destination = 'monitors.html';

    else if (page.includes('camera') || page.includes('mic'))  
        destination = 'camera&mic.html';

    else if (page.includes('headset'))  
        destination = 'headsets.html';

    else if (page.includes('table') || page.includes('chair'))  
        destination = 'tables&chairs.html';

    else                             
        destination = 'homePage.html';

    window.location.href = destination;
    return false;  
  }