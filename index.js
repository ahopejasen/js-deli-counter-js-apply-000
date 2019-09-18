"use strict";

function takeANumber(deliLine,newPerson) {

  deliLine.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`;
}

function nowServing (deliLine) {
  const emptyLineMsg="There is nobody waiting to be served!";
  return ( deliLine.shift() || emptyLineMsg); //shift() returns undefined for emply array
}