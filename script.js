

const BORDERS = document.querySelector('.game-box').getBoundingClientRect()

const USED = {}

var CURRENT = null
var POINT = null


var NUMBERS_TO_CHOOSE = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var POSITIONS_TO_CHOOSE = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]



const POSITIONS = [

  [ BORDERS['top'] , BORDERS['left'] ] ,
  [ BORDERS['top'] , BORDERS['left'] + 127 ] ,
  [ BORDERS['top'] , BORDERS['left'] + 127*2] ,
  [ BORDERS['top'] , BORDERS['left'] + 127*3] ,

  [ BORDERS['top'] + 127 , BORDERS['left']] ,
  [ BORDERS['top'] + 127 , BORDERS['left'] + 127 ] ,
  [ BORDERS['top'] + 127 , BORDERS['left'] + 127*2 ] ,
  [ BORDERS['top'] + 127 , BORDERS['left']  + 127*3 ] ,

  [ BORDERS['top']  + 127 * 2, BORDERS['left'] ] ,
  [ BORDERS['top']  + 127 * 2, BORDERS['left'] +127 ] ,
  [ BORDERS['top']  + 127 * 2, BORDERS['left'] +127*2] ,
  [ BORDERS['top']  + 127 * 2, BORDERS['left'] +127*3] ,

  [ BORDERS['top'] + 127 * 3, BORDERS['left'] ] ,
  [ BORDERS['top'] + 127 * 3, BORDERS['left'] +127] ,
  [ BORDERS['top'] + 127 * 3, BORDERS['left'] +127*2] ,
  [ BORDERS['top'] + 127 * 3, BORDERS['left'] +127*3] ,

]

function add_block(POSITION){



  let block_id = NUMBERS_TO_CHOOSE.splice(chance.integer({ min: 0, max: NUMBERS_TO_CHOOSE.length-1 }), 1)[0]

  let choose_position = POSITIONS_TO_CHOOSE.splice(chance.integer({ min: 0, max: POSITIONS_TO_CHOOSE.length-1 }), 1)[0]






  let temp_top = POSITIONS[choose_position][0]
  let temp_left = POSITIONS[choose_position][1]


  let element = document.createElement('div')
  element.setAttribute('class', 'block flex-centered')
  element.setAttribute('id', block_id)
  element.innerHTML = block_id
  element.style.top = POSITIONS[choose_position][0] + 'px'
  element.style.left = POSITIONS[choose_position][1] + 'px'

  document.querySelector('.game-box').appendChild(element)





  element.onmousedown = function(e){
    CURRENT = element
    POINT = [e.clientX, e.clientY]
  }




  // USED[block_id] = choose_position

  USED[block_id] = choose_position
  return element
}











document.onmouseup = function(e){
  setTimeout(function(){
    if (
      USED[1] == 0 && USED[2] == 1 && USED[3] == 2 && USED[4] == 3 &&
      USED[5] == 4 && USED[6] == 5 && USED[7] == 6 && USED[8] == 7 &&
      USED[9] == 8 && USED[10] == 9 && USED[11] == 10 && USED[12] == 11 &&
      USED[13] == 12 && USED[14] == 13 && USED[15] == 14
       ){
         alert('Congratulations')
         location.reload()
       }
  }, 675)


  let radius = 45

//to right
  if (e.clientX > POINT[0] + 35 && e.clientY > POINT[1] - radius && e.clientY < POINT[1] + radius){


          function myMove(elem) {





        var elem = elem;
        var pos = CURRENT.offsetLeft;
        var stop = CURRENT.offsetLeft+127

        if (stop + 5 > BORDERS['right']){
          return
        }

        var id = setInterval(frame, 1.5);
        function frame() {
          if (pos == stop) {
            clearInterval(id);
          } else {
            pos++;
            elem.style.left = pos + 'px';

          }
        }



      }

//continue//continue//continue//continue//continue//continue//continue//continue//continue//continue


        //proverochnaya funckciya
        let current_id = CURRENT.getAttribute('id')
        let current_position = USED[current_id]
        let next_position = current_position + 1

        for(let id of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]){
          if(USED[id] == next_position && id != current_id){
            // alert('stop')
            return
          }
        }


        USED[CURRENT.getAttribute('id')]++
        myMove(CURRENT, function(){alert(1)})





}
//to right


  //to left
  if (e.clientX < POINT[0] - 35 && e.clientY > POINT[1] - radius && e.clientY < POINT[1] + radius){



    function myMove(elem) {
  var elem = elem;
  var pos = CURRENT.offsetLeft;
  var stop = CURRENT.offsetLeft-127

  if (stop < BORDERS['left']){
    return
  }

  var id = setInterval(frame, 1.5);
  function frame() {
    if (pos == stop) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + 'px';
    }
  }
}

                              //proverochnaya funckciya
                              let current_id = CURRENT.getAttribute('id')
                              let current_position = USED[current_id]
                              let next_position = current_position - 1

                              for(let id of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]){
                                if(USED[id] == next_position && id != current_id){
                                  // alert('stop')
                                  return
                                }
                              }



  USED[CURRENT.getAttribute('id')]--
  myMove(CURRENT)
}
//to left






  //to up
  if (e.clientY < POINT[1] - 35 && e.clientX > POINT[0] - radius && e.clientX < POINT[0] + radius){

    function myMove(elem) {
  var elem = elem;
  var pos = CURRENT.offsetTop;
  var stop = CURRENT.offsetTop-127

  if (stop  <  BORDERS['top']){
    return
  }


  var id = setInterval(frame, 1.5);
  function frame() {
    if (pos == stop) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
    }
  }
}




                      //proverochnaya funckciya
                      let current_id = CURRENT.getAttribute('id')
                      let current_position = USED[current_id]
                      let next_position = current_position - 4

                      for(let id of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]){
                        if(USED[id] == next_position && id != current_id){
                          // alert('stop')
                          return
                        }
                      }






USED[CURRENT.getAttribute('id')] -= 4
myMove(CURRENT)
  }
//to top



  //to mousedown
  if (e.clientY > POINT[1] + 35 && e.clientX > POINT[0] - radius && e.clientX < POINT[0] + radius){

    function myMove(elem) {
  var elem = elem;
  var pos = CURRENT.offsetTop;
  var stop = CURRENT.offsetTop+127


  if (stop + 5 >  BORDERS['bottom']){
    return
  }



  var id = setInterval(frame, 1.5);
  function frame() {
    if (pos == stop) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}





                      //proverochnaya funckciya
                      let current_id = CURRENT.getAttribute('id')
                      let current_position = USED[current_id]
                      let next_position = current_position + 4

                      for(let id of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]){
                        if(USED[id] == next_position && id != current_id){
                          // alert('stop')
                          return
                        }
                      }








USED[CURRENT.getAttribute('id')] += 4
myMove(CURRENT)

  }
//to move down










  CURRENT = null
  POINT = null





}





for(let i =0; i < 15; i++){
  add_block()
}






//MOVING ELEMENT //MOVING ELEMENT //MOVING ELEMENT//MOVING ELEMENT //MOVING ELEMENT //MOVING ELEMENT//MOVING ELEMENT //MOVING ELEMENT //MOVING ELEMENT
//
// let x = document.createElement('div')
// x.style.width = '160px'
// x.style.height = '160px'
// x.style.background = 'green'
// x.style.position = 'absolute'
// x.style.top = '500px'
// x.style.left = '230px'
//
//
//
// document.querySelector('body').appendChild(x)
//
//
// x.onmousedown = function(e){
//   let dx = e.pageX-e.target.offsetLeft
//   let dy = e.pageY-e.target.offsetTop
//
//   document.onmousemove = function(e){
//     x.style.left = e.pageX - dx + 'px'
//     x.style.top = e.pageY - dy + 'px'
//     console.log(e.pageX - dx)
//     console.log(e.pageX, e.target.offsetLeft, e.pageX-e.target.offsetLeft)
//   }
// }
// x.onmouseup = function(){
//   document.onmousemove = function(){
//     return false
//   }
// }
