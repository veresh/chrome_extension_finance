async function fetchData() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].url);
        currentURL = tabs[0].url;
        /* 
        find the domain on which we are present
        could be either of sensibull or ZD (others we can do latter)
        based on the domain we are find scrip name and then create dynamic links 
        */
        //document.getElementById("zd-url").innerHTML = "Zerodha";
        zd = document.getElementById("zd-url");
        zd.setAttribute("href", "http://www.zerodha.com");
        sc = document.getElementById("screener-url");
        sc.setAttribute("href", "https://www.screener.in/");
    });
    /*
        const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
        const record = await res.json();
        console.log(record);
        document.getElementById("date").innerHTML = record.data[0].date;
        document.getElementById("areaName").innerHTML = record.data[0].areaName;
        document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
        document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
    */
}
fetchData();