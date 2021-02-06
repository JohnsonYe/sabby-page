// function addBalls(eleId) {
//     const colors = ["#FED2CF", "#F1CEFE", "#BEFFEF", "#B2E8FF", "#F9F6B0"];

//     const numBalls = 60;
//     const balls = [];

//     for (let i = 0; i < numBalls; i++) {
//         let ball = document.createElement("div");
//         ball.classList.add("ball");
//         ball.setAttribute('id', `ball_${i}`);
//         ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//         ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//         // ball.style.top = `${ballTop}${Math.floor(Math.random() * ballRatio)}vh)`;
//         ball.style.top = `calc(110vh + ${Math.floor(Math.random() * 200)}vh)`;
//         setTop(`${ballTop}${Math.floor(Math.random() * ballRatio)}vh)`);
//         console.log('ballTop', ballTop, ballRatio);
//         ball.style.transform = `scale(${Math.random()})`;
//         ball.style.width = `${Math.random()}em`;
//         ball.style.height = ball.style.width;
        
//         balls.push(ball);
//         document.getElementById(eleId).append(ball);
//     }

//     // Keyframes
//     balls.forEach((el, i, ra) => {
//         let to = {
//             x: Math.random() * (i % 2 === 0 ? -11 : 11),
//             y: Math.random() * 12
//         };

//         let anim = el.animate(
//             [
//             { transform: "translate(0, 0)" },
//             { transform: `translate(${to.x}rem, ${to.y}rem)` }
//             ],
//             {
//             duration: (Math.random() + 1) * 2000, // random duration
//             direction: "alternate",
//             fill: "both",
//             iterations: Infinity,
//             easing: "ease-in-out"
//             }
//         );
//     });
// }

// module.exports.addBalls = addBalls;