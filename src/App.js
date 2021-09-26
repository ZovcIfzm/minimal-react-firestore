import db from "./firestore.js";

import { doc, setDoc } from "firebase/firestore";

const sendData = async () => {
  await setDoc(doc(db, "collection_name", "doc_name"), {
    field: "value",
  });
};

function App() {
  return (
    <div>
      <button onClick={sendData}>Press</button>
    </div>
  );
}

export default App;
