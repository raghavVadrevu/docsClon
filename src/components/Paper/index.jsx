import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFormat, setFormat } from '../../reducers/heroPageReducer';
import "../../styles/PageStyles/a4.css";

function Paper() {

  const dispatch = useDispatch();
  const contentFormat = useSelector((state) => state.heroPage);
  const contentEditableRef = useRef(null);

  useEffect(()=>{
    dispatch(getFormat());
  },[dispatch]);

  useEffect(()=>{

    const cfAlign = contentFormat.align.description;
    let align = "left";

    switch(cfAlign){
      case 'Left align':
        align = "left"
        break;
      case 'Center align':
        align = "center"
        break;
      case 'Right align':
        align = "right"
        break;
      case 'Justify':
        align = "justify"
        break;
      default:
        align = "center"
        break;
    }

    handleStyle({fontWeight: contentFormat.bold?'bold':'normal', fontStyle: contentFormat.italic?'italic':'normal', textDecoration: contentFormat.underlined?'underline':'none', color: contentFormat.textColor, backgroundColor: contentFormat.highlightColor, textAlign: align});

  },[contentFormat]);

  useEffect(() => {

    const handleSelectionChange = () => {
      const formatting = getSelectionFormatting();
      if (formatting) {
        dispatch(setFormat(formatting))
      }
    };
    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  function getSelectionFormatting() {
    const selection = window.getSelection();

    // Check if there is a selection
    if (!selection.rangeCount) return null;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    // Check if the selection is not empty
    if (!selectedText) return null;

    // Get the common ancestor container and find a block-level parent
    let container = range.commonAncestorContainer;
    while (container && container.nodeType === Node.TEXT_NODE) {
      container = container.parentNode;
    }

    // Use computed styles to get formatting information
    const style = window.getComputedStyle(container);
    const isBold = style.fontWeight === 'bold' || style.fontWeight >= 700;
    const isItalic = style.fontStyle === 'italic';
    const isUnderlined = style.textDecorationLine.includes('underline');
    const color = style.color;
    const alignment = style.textAlign;

    return {
      bold: isBold,
      italic: isItalic,
      underlined: isUnderlined,
      color: color,
      alignment: alignment
    }
  }

  const handleInput = () => {
    const contentEditable = contentEditableRef.current;

    // Get the text content of the div
    const text = contentEditable.textContent;

    // Split the text into sentences using a regular expression
    const sentences = text.split(/(?<=\. )/);

    // Capitalize the first character of each sentence
    const capitalizedSentences = sentences.map((sentence) => {
      if (sentence) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      }
      return sentence;
    });

    // Join the capitalized sentences back together
    const newText = capitalizedSentences.join('');

    // Set the new text content
    contentEditable.textContent = newText;

    // Move the cursor to the end
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(contentEditable);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleStyle = (val) => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      const fragment = document.createDocumentFragment();

      const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const styledNode = document.createElement('div');
          Object.entries(val).forEach(([styleKey, styleValue]) => {
            styledNode.style[styleKey] = styleValue;
          });
          styledNode.textContent = node.textContent;
          fragment.appendChild(styledNode);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const clonedNode = node.cloneNode(false);
          for (let i = 0; i < node.childNodes.length; i++) {
            processNode(node.childNodes[i]);
          }
          fragment.appendChild(clonedNode);
        }
      };

      for (let i = 0; i < range.cloneContents().childNodes.length; i++) {
        const node = range.cloneContents().childNodes[i].cloneNode(true);

        processNode(node);

      }
  
      range.deleteContents();
      range.insertNode(fragment);
    }
  };

  return (
    <div ref={contentEditableRef} className='a4-paper' contentEditable={true} onInput={handleInput}>
    </div>
  );
}

export default Paper;
