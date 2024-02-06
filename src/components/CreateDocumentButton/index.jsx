import React from 'react';

function CreateDocumentButton() {
  return (
    <button onClick={() => alert('Create new document')}>
      Create New Document
    </button>
  );
}

export default CreateDocumentButton;