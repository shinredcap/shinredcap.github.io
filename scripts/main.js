const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image1.jpg") {
    myImage.setAttribute("src", "images/image2.jpg");
  } else {
    myImage.setAttribute("src", "images/image1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName}様の駐車場は本当に便利ですか？`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}様の駐車場は本当に便利ですか？`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  