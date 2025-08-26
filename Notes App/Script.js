
const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function deleteNote(noteElement) {
    noteElement.remove();
    updateStorage();
}

function updateStorage() {
    const allNotes = document.querySelectorAll(".input-box");
    const notesData = [];
    allNotes.forEach(note => {
        notesData.push(note.innerText);
    });

    localStorage.setItem("notes", JSON.stringify(notesData));
}

function showNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(noteText => {
        createNoteElement(noteText);
    });
}

function createNoteElement(text = "") {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    inputbox.innerText = text;

    img.src = "delete.png";
    img.className = "delete-btn";
    img.alt = "Delete";

    img.addEventListener('click', () => {
        deleteNote(inputbox);
    });

    inputbox.addEventListener('keyup', updateStorage);

    inputbox.appendChild(img);
    notesContainer.appendChild(inputbox);
}

createbtn.addEventListener('click', () => {
    createNoteElement();
    updateStorage();
});

showNotes();