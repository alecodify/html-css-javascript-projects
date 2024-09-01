const container = document.getElementById("container");
const btn = document.getElementById("btn");

getNotes().forEach((noteData) => {
  const note = createNoteEl(noteData.id, noteData.content);
  container.insertBefore(note, btn);  
});

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNote(notes);
  container.removeChild(element); 
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.find((note) => note.id === id); 
  target.content = content;
  saveNote(notes);
}

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const note = createNoteEl(noteObj.id, noteObj.content);
  container.insertBefore(note, btn);

  notes.push(noteObj);
  saveNote(notes);
}

function saveNote(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

btn.addEventListener("click", addNote);