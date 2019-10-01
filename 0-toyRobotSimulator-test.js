const { test } = require("tape");

let board = []
let direction = 'north'
let position = { x: 0, y: 0, f: '', face: ''}
const {place, report, generateBoard} = require('./toyRobotSimulator');

test("place(0,0, 'north')", t=> {
  let board = generateBoard()
  console.log(board)
  // report(board)
  // t.equal(report, "place(0,0, 'north')")
  t.end()
})