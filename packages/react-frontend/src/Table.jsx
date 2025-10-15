// src/Table.jsx
import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
	      <th>Remove</th>
      </tr>
    </thead>
  );
}

function TableBody({characterData, removeCharacter}) {
  const rows = characterData.map((row) => {
    return (
      <tr key={row._id}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeCharacter(row._id)}>
            Delete
          </button>
        </td>
      </tr>
    );
   }
  );
  return (
      <tbody>
        {rows}
       </tbody>
   );
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
      />
    </table>
  );
}

export default Table;
