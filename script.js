let myLibrary = [];

function Book(name,  author , pages , readStatus) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const addBookBtn = document.querySelector(".addBookBtn");
const addBookForm = document.querySelector(".addBookForm");
const submitBtn = document.querySelector(".submitBtn");
const legendBtn = document.querySelector(".legendBtn");
const resetBtn = document.querySelector(".resetBtn");
const displayContainer = document.querySelector(".displayContainer");
const bookForm = document.querySelector(".bookForm");

addBookBtn.addEventListener("click", ()=>{
    addBookForm.classList.remove("hidden");
});

legendBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    addBookForm.classList.add("hidden");

});

// submitBtn.addEventListener("click", (event)=>{
//     event.preventDefault();
//     let bookTitle = document.querySelector(".bookTitle").value;
//     let authorName = document.querySelector(".authorName").value;
//     let totalPages = document.querySelector(".totalPages").value;
//     let bookStatus = document.querySelector(".bookStatus").value;
//     let book = new Book(bookTitle , authorName , totalPages , bookStatus);

// //----------------------------------------------------------------------------
//     const createCard = document.createElement("div");
//     //----------------------------------
    
//     createCard.setAttribute("style" ,"border: solid red 1px;margin: 8px; padding:8px; font-family:'Courier New', Courier, monospace; font-size:1rem ");    //----------------------------------

//     const headingTitle = document.createElement("p");
//     headingTitle.textContent = `Book Title: ${bookTitle}`;
//     headingTitle.setAttribute("style","padding:8px");

//     const headingAuthor = document.createElement("p");
//     headingAuthor.textContent = `Author Name: ${authorName}`;
//     headingAuthor.setAttribute("style","padding:8px" );

//     const headingPages = document.createElement("p");
//     headingPages.textContent = `Total Pages:${totalPages} `;
//     headingPages.setAttribute("style","padding:8px" );
    
//     const headingread = document.createElement("p");
//     headingread.textContent = `Book read: ${bookStatus}`;
//     headingread.setAttribute("style","padding:8px" );

//     createCard.append(headingTitle);
//     createCard.append(headingAuthor);
//     createCard.append(headingPages);
//     createCard.append(headingread);

//     displayContainer.append(createCard);
// //----------------------------------------------------------------


//     myLibrary.push(book);
//     addBookForm.classList.add("hidden");
// });

bookForm.addEventListener("submit",(event)=>{
    event.preventDefault();
        let bookTitle = document.querySelector(".bookTitle").value;
        let authorName = document.querySelector(".authorName").value;
        let totalPages = document.querySelector(".totalPages").value;
        let book = new Book(bookTitle , authorName , totalPages);
    if(validateForm()){
    //----------------------------------------------------------------------------
        const createCard = document.createElement("div");
        const createCardStyle = `
            border: solid black 2px;
            margin:5px;
            padding:8px;
            font-family:'Courier New', Courier, monospace;
            font-size:1rem;
        `;
        createCard.setAttribute("style" ,createCardStyle);    //----------------------------------
    
        const headingTitle = document.createElement("p");
        headingTitle.textContent = `Book Title: ${bookTitle}`;
        headingTitle.setAttribute("style", `padding:10px 18px; 
            font-family:'Courier New', Courier, monospace;
            font-size:1rem;
            font-weight:bold;`
        );
    
        const headingAuthor = document.createElement("p");
        headingAuthor.textContent = `Author Name: ${authorName}`;
        headingAuthor.setAttribute("style", `padding:10px 18px; 
        font-family:'Courier New', Courier, monospace;
        font-size:1rem;
        font-weight:bold;`);
    
        const headingPages = document.createElement("p");
        headingPages.textContent = `Total Pages:${totalPages} `;
        headingPages.setAttribute("style",`padding:10px 18px; 
        font-family:'Courier New', Courier, monospace;
        font-size:1rem;
        font-weight:bold;` );

        const headingReadLabel = document.createElement("label");
        headingReadLabel.textContent="Read book";
        const labelStyles = `
            font-family: 'Courier New', Courier, monospace;
            font-size: 1rem;`;
        headingReadLabel.setAttribute("style", labelStyles);

        const headingread = document.createElement("input");
        headingread.setAttribute("type","checkbox")

        const deleteCard = document.createElement("button");
        deleteCard.textContent="DELETE";
        const deleteCardStyle = `
            display:block;
            padding: 10px;
            margin: 18px 45px;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
        `;
        deleteCard.setAttribute("style", deleteCardStyle);
        deleteCard.addEventListener("click" , ()=>{
            createCard.remove();
        });
        // last card in the array is deleted{find a way to delete the selected card}
    
        createCard.append(headingTitle);
        createCard.append(headingAuthor);
        createCard.append(headingPages);
        createCard.append(headingReadLabel);
        createCard.append(headingread);
        createCard.append(deleteCard);
    
        displayContainer.append(createCard);
    //----------------------------------------------------------------
    
    
        myLibrary.push(book);
        addBookForm.classList.add("hidden");
    }
    else{
        if(typeof(totalPages)!== Number)
            alert("enter only numbers in total pages");

        alert("please fill all details");
    }
} );

function validateForm() {
    const bookTitle = document.querySelector(".bookTitle").value;
    const authorName = document.querySelector(".authorName").value;
    const totalPages = document.querySelector(".totalPages").value;
  
    if (bookTitle === "" || authorName === "" || totalPages === "") {
      return false; 
    }
    return true; 
  }



