// (function () {
//   const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;
//   var   dd_deline = data('date-deadline'),
//         mm_deline = data('month-deadline');
//   let today = new Date(),
//       dd = String(today.getDate()).padStart(2, "0"),
//       mm = String(today.getMonth() + 1).padStart(2, "0"),
//       yyyy = today.getFullYear(),
//       nextYear = yyyy + 1,
//       // dayMonth = "12/1",
//       // exprired = dayMonth + yyyy;
//       exprired = mm_deline + "/" + dd_deline + "/" + yyyy;
//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > exprired) {
//     exprired = dayMonth + nextYear;
//   }
//   //end
  
//   const countDown = new Date(exprired).getTime(),
//       x = setInterval(function() {    

//         const now = new Date().getTime(),
//               distance = countDown - now;

//         document.getElementById("days").innerText = Math.floor(distance / (day)),
//           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//         //do something later when date is reached
//         if (distance < 0) {
//           document.getElementById("headline").innerText = "time-expired";
//           document.getElementById("countdown").style.display = "none";
//           document.getElementById("content").style.display = "block";
//           clearInterval(x);
//         }
//         //seconds
//       }, 0)
//   }());
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24; 

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      // dd_deline = $this.data('date-deadline'),
      // mm_deline = $this.data('month-deadline'),
      // exprired = mm_deline + "/" + dd_deline + "/" + yyyy;
      dayMonth = "12/1/",
      experied = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > experied) {
    experied = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(experied).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());