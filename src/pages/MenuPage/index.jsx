import React from 'react';
import MenuHeader from '../../components/Headers/MenuHeader';
import DocumentList from '../../components/DocumentList';
import CreateDocumentButton from '../../components/CreateDocumentButton';
import "../../styles/menuPageStyles/menuPage.css"

function MenuPage() {
  return (
    <div className="MenuPage">
      <MenuHeader />
      <DocumentList />
      <CreateDocumentButton />
    </div>
  );
}

export default MenuPage;