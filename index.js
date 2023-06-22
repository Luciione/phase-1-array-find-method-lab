// code your solution here
function superbowlWin(record) {
    const winRecord = record.find(obj => obj.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  