// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.





const {ipcRenderer} = require('electron');
const dragFileLink = document.getElementById('drag-file-link');

dragFileLink.addEventListener('dragstart', (event)=>{
    event.preventDefault();
    ipcRenderer.send('ondragstart', __filename);
});


// const spawn = require('child_process').spawn,
// var childProcess = spawn('D:\\SerialPortDemo.exe', ['COM4',9600]); // 启动serialPortDemo.exe程序（C#开发），并传入两个参数：串口号与波特率；
// childProcess.stdout.on('data', (data) => { console.log(""+data); }); // 监听serialPortDemo.exe的输出，并将输出打印出来

// // 让下方程序休眠一段时间后执行，可以看到C#的输出；
// setTimeout(function(){
//    childProcess.stdin.write('quit'); // 给C#程序输入'quit'命令
//    childProcess.stdin.end(); // 完成输入后必须调用end方法，否则C#程序无法监听到用户输入
// }, 30000)

// ipcMain.on('oldVersion',()=>{
//     const child_process = require('child_process');
//     const path=require('path');
//     var old=child_process.spawn('npm',['start'],{
//       cwd:path.join(__dirname,"../old"),//运行子进程的目录
//       detached:true,//让父进程退出后，子进程能独立运行
//       shell: process.platform === 'win32',
//       windowsHide:true
//     });
//     app.quit();
//   })


// // In the renderer process.
// const { desktopCapturer } = require('electron')

// desktopCapturer.getSources({ types: ['window', 'screen'] }, (error, sources) => {
//   if (error) throw error
//   for (let i = 0; i < sources.length; ++i) {
//     console.log(sources[i].name);
//     if (sources[i].name === 'Electron') {
//       navigator.mediaDevices.getUserMedia({
//         audio: false,
//         video: {
//           mandatory: {
//             chromeMediaSource: 'desktop',
//             chromeMediaSourceId: sources[i].id,
//             minWidth: 1280,
//             maxWidth: 1280,
//             minHeight: 720,
//             maxHeight: 720
//           }
//         }
//       }).then((stream) => handleStream(stream))
//         .catch((e) => handleError(e))
//       return
//     }
//   }
// })

// function handleStream (stream) {
//   const video = document.querySelector('video')
//   video.srcObject = stream
//   video.onloadedmetadata = (e) => video.play()
// }

// function handleError (e) {
//   console.log(e)
// }

// const { dialog } = require('electron')
// console.log(dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }))


// const {spawn} = require('spawn')
// const os = require('os')

// spawn('explorer.exe',[os.tmpdir()])
