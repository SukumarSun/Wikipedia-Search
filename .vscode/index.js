let inputEle = document.getElementById("searchInput");
let resultEle = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner");

function createachresult(eachResult) {
  let { title, link, description } = eachResult;
  console.log(title, link, description);
  //outside div
  let outsidediv = document.createElement("div");
  outsidediv.classList.add("mb-2");
  resultEle.appendChild(outsidediv);
  //anchor title
  let anchortitle = document.createElement("a");
  anchortitle.textContent = title;
  anchortitle.href = link;
  anchortitle.target = "_blank";
  outsidediv.appendChild(anchortitle);
  //break//
  let breakele1 = document.createElement("br");
  outsidediv.appendChild(breakele1);

  //anchor link
  let anchorlink = document.createElement("a");
  anchorlink.textContent = link;
  anchorlink.href = link;
  anchorlink.target = "_blank";
  outsidediv.appendChild(anchorlink);
  //break
  let breakele2 = document.createElement("br");
  outsidediv.appendChild(breakele2);
  //description
  let des = document.createElement("p");
  des.textContent = description;
  outsidediv.appendChild(des);
}

function searchResultList(search_results) {
  spinnerEle.classList.toggle("d-none");
  for (let each of search_results) {
    createachresult(each);
  }
}

function getresults(event) {
  resultEle.textContent = "";
  if (event.key === "Enter") {
    spinnerEle.classList.toggle("d-none");
    let option = {
      method: "GET",
    };
    let number = inputEle.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + number;

    fetch(url, option)
      .then(function (response) {
        return response.json();
      })
      .then(function (x) {
        let { search_results } = x;
        console.log(search_results);
        searchResultList(search_results);
      });
  }
}

inputEle.addEventListener("keydown", getresults);
