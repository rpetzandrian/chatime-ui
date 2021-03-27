const { execSync } = require("child_process");
const urlLocal = [
  "http://127.0.0.1:5500/",
  "http://127.0.0.1:5500/login.html",
  "http://127.0.0.1:5500/register.html",
  "http://127.0.0.1:5500/forgot.html",
  "http://127.0.0.1:5500/chatlist.html",
  "http://127.0.0.1:5500/chatlist-openwindow.html",
  "http://127.0.0.1:5500/chat-menu.html",
  "http://127.0.0.1:5500/messages.html",
  "http://127.0.0.1:5500/messages-file.html",
  "http://127.0.0.1:5500/messages-profile.html",
  "http://127.0.0.1:5500/chatmessage-menu.html",
  "http://127.0.0.1:5500/incoming-calls.html",
  "http://127.0.0.1:5500/call.html",
  "http://127.0.0.1:5500/call-history.html",
  "http://127.0.0.1:5500/call-mobile.html",
];

const urlVercel = [
  "https://chatime-ui.vercel.app/",
  "https://chatime-ui.vercel.app/login.html",
  "https://chatime-ui.vercel.app/register.html",
  "https://chatime-ui.vercel.app/forgot.html",
  "https://chatime-ui.vercel.app/chatlist.html",
  "https://chatime-ui.vercel.app/chatlist-openwindow.html",
  "https://chatime-ui.vercel.app/chat-menu.html",
  "https://chatime-ui.vercel.app/messages.html",
  "https://chatime-ui.vercel.app/messages-file.html",
  "https://chatime-ui.vercel.app/messages-profile.html",
  "https://chatime-ui.vercel.app/chatmessage-menu.html",
  "https://chatime-ui.vercel.app/incoming-calls.html",
  "https://chatime-ui.vercel.app/call.html",
  "https://chatime-ui.vercel.app/call-history.html",
  "https://chatime-ui.vercel.app/call-mobile.html",
];

for (let i = 0; i < urlLocal.length; i++) {
  console.log(`Running performance test ${urlLocal[i]}`); // Logs this to the console just before it kicks off
  try {
    execSync(
      `lighthouse ${urlLocal[i]} --output=html --output-path=./report/report-${
        i + 1
      }-${Date.now()}-mobile.html --skip-audits`
    ); // Executes this on the command line to run the performance test
  } catch (err) {
    console.log(`Performance test ${urlLocal[i]} failed`); // If Lighthouse happens to fail it'll log this to the console and log the error message
    break;
  }
  console.log(`Finished running performance test ${urlLocal[i]}`); // Logs this to the console just after it finishes running each performance test
}

for (let i = 0; i < urlLocal.length; i++) {
  console.log(`Running performance test ${urlLocal[i]}`); // Logs this to the console just before it kicks off
  try {
    execSync(
      `lighthouse ${urlLocal[i]} --output=html --output-path=./report/report-${
        i + 11
      }-${Date.now()}-desktop.html --skip-audits --preset=desktop`
    ); // Executes this on the command line to run the performance test
  } catch (err) {
    console.log(`Performance test ${urlLocal[i]} failed`); // If Lighthouse happens to fail it'll log this to the console and log the error message
    break;
  }
  console.log(`Finished running performance test ${urlLocal[i]}`); // Logs this to the console just after it finishes running each performance test
}

for (let i = 0; i < urlVercel.length; i++) {
  console.log(`Running performance test ${urlVercel[i]}`); // Logs this to the console just before it kicks off
  try {
    execSync(
      `lighthouse ${urlVercel[i]} --output=html --output-path=./report/report-${
        i + 1
      }-${Date.now()}-mobile-v.html --skip-audits`
    ); // Executes this on the command line to run the performance test
  } catch (err) {
    console.log(`Performance test ${urlVercel[i]} failed`); // If Lighthouse happens to fail it'll log this to the console and log the error message
    break;
  }
  console.log(`Finished running performance test ${urlVercel[i]}`); // Logs this to the console just after it finishes running each performance test
}

for (let i = 0; i < urlVercel.length; i++) {
  console.log(`Running performance test ${urlVercel[i]}`); // Logs this to the console just before it kicks off
  try {
    execSync(
      `lighthouse ${urlVercel[i]} --output=html --output-path=./report/report-${
        i + 11
      }-${Date.now()}-desktop-v.html --skip-audits --preset=desktop`
    ); // Executes this on the command line to run the performance test
  } catch (err) {
    console.log(`Performance test ${urlVercel[i]} failed`); // If Lighthouse happens to fail it'll log this to the console and log the error message
    break;
  }
  console.log(`Finished running performance test ${urlVercel[i]}`); // Logs this to the console just after it finishes running each performance test
}
