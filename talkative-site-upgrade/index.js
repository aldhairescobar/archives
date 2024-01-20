
const API_KEY = "AIzaSyBJmJJmHmJKwnMlfVhUdVUeyXL2TswD684";

const sheetId = "1JSQ3urgcQKvd56-adZbvUZYJXw5AJQMCmiyTHaSHt4U";


window.onload = () => {
  getGoogleSheet();
}
 
const urlSheetHyper = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/?key=${API_KEY}&includeGridData=true`


const getGoogleSheet = () => {
      
      fetch(urlSheetHyper, {
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        postArticles(data);
      })
}

const postArticles = (data) => {
        const firstTopicName = data.sheets[0].data[0].rowData[0].values[0].effectiveValue.stringValue;

        const firstTopicLink = data.sheets[0].data[0].rowData[0].values[0].hyperlink;

        const secondTopicName = data.sheets[0].data[0].rowData[1].values[0].effectiveValue.stringValue;

        const secondTopicLink = data.sheets[0].data[0].rowData[1].values[0].hyperlink;

        const thirdTopicName = data.sheets[0].data[0].rowData[2].values[0].effectiveValue.stringValue;

        const thirdTopicLink = data.sheets[0].data[0].rowData[2].values[0].hyperlink;

        document.querySelector(".first-topic").innerHTML = firstTopicName;

        document.querySelector(".first-topic").setAttribute("href", firstTopicLink);

        document.querySelector(".second-topic").innerHTML = secondTopicName;

        document.querySelector(".second-topic").setAttribute("href", secondTopicLink);

        document.querySelector(".third-topic").innerHTML = thirdTopicName

        document.querySelector(".third-topic").setAttribute("href", thirdTopicLink)

}