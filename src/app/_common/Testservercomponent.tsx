import Expandable from './Testclientcomponent';

export default async function Notes() {
  const notes = [{id: 1, text: 'Note 1'}, {id: 2, text: 'Note 2'}, {id: 3, text: 'Note 3'}];
  return (
    <div>
      {notes.map(note => (
        <Expandable key={note.id}>
          <p note={note} >{note.text}</p>
        </Expandable>
      ))}
    </div>
  )
}