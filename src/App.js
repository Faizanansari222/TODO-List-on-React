import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  function addFun() {
    const copyList = [...list];
    copyList.push(inputValue);
    setList(copyList);
    setInputValue("");
  }

  function deleteItem(index) {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editItem(index) {
    const itemValue = list[index];
    setInputValue(itemValue);
    setEditMode(true);
    setCurrentIndex(index);
  }

  function updateFun() {
    const copyList = [...list];
    copyList[currentIndex] = inputValue;
    setList(copyList);

    setEditMode(false);
    setInputValue("");
  }

  function textUpdate(e) {
    const value = e.target.value;
    setInputValue(value);
  }
  return (
  <>
    <div className="App">
      <header className="App-header">
        <input
          placeholder="enter any text"
          onChange={textUpdate}
          value={inputValue}
        />
        {editMode ? (
          <button onClick={updateFun}>Update</button>
        ) : (
          <button onClick={addFun}>add</button>
        )}

        <ul>
          {list.map(function (item, index) {
            return (
              <li>
                {item}
                <button onClick={() => editItem(index)}>Edit</button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
    </>
  );
}

export default App;
