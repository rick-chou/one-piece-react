if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/repl/sw.js', { scope: '/repl/' })})}