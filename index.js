"use strict";

function takeANumber(deliLine,newPerson) {

  deliLine.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`;
}

function nowServing (deliLine) {
  const emptyLineMsg="There is nobody waiting to be served!";
  return ( deliLine.shift() || emptyLineMsg); //shift() returns undefined for emply array:
    //( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift#Syntax )
}

function currentLine (deliLine) {
  const emptyLineMsg="The line is currently empty.";
  
}